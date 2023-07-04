class ProductsController < ApplicationController
    protect_from_forgery with: :exception
    def index
        products= Product.all
        render json: products
    end

    # Get Single Product
    def show
        product = Product.find_by(id: params[:id]) #value or null
        if product
            render json: product.as_json(include: :review)
            
        else
            render json: {error: "Product not found"}, status: :not_found

        end
    
    end 

    def create
        product = Product.new(product_params)
        if product.save
            
          render json: product, status: :created
        else
          render json: { error: product.errors.full_messages }, status: :unprocessable_entity
        end
    end
      

    private

        def product_params
        params.require(:product).permit(:name, :price, :description) # Adjust the permitted attributes according to your Product model
        end

end
