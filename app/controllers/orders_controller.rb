class OrdersController < ApplicationController
    # Placing a new order
    protect_from_forgery with: :null_session

      def index
        user = User.find(params[:user_id])
        orders = user.orders.includes(:products)
    
        render json: orders, include: { products: { only: [:id, :name, :price] } }
      end

    
    def create
        order = Order.new(order_params)
        order.total_price = calculate_total_price(order)
    
        if order.save
          render json: order, status: :created
        else
          render json: { error: order.errors.full_messages }, status: :unprocessable_entity
        end
     end
  
    # Retrieving a single order
    def show
      order = Order.find_by(id: params[:id])
  
      if order
        render json: order, include: :order_items
      else
        render json: { error: "Order not found" }, status: :not_found
      end
    end
  
    # Cancelling an order
    def destroy
      order = Order.find_by(id: params[:id])
  
      if order
        order.destroy
        render json: { message: "Order cancelled successfully" }
      else
        render json: { error: "Order not found" }, status: :not_found
      end
    end
  
    private
  
    def order_params
        params.permit(:user_id)
    end
    
    def calculate_total_price(order)
        total_price = 0
    
        order.order_items.each do |order_item|
          total_price += order_item.product.price * order_item.quantity
        end
    
        total_price
    end
  end
  