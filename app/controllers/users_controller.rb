class UsersController < ApplicationController
    protect_from_forgery with: :exception
    # fetching all users
    def index
      users = User.all
      render json: users
    end
  
    # creating a new user 
    def create
      user = User.new(user_params)
  
      if user.save
        render json: { success: "User created successfully" }, status: :created
      else
        render json: { error: user.errors.full_messages }, status: :unprocessable_entity
      end
    end
  
    # seeing a single user
    def show
      user = User.find_by(id: params[:id])
  
      if user
        render json: user
      else
        render json: { error: "User not found" }, status: :not_found
      end
    end
  
    private
  
    def user_params
      params.require(:user).permit(:username, :email, :password)
    end
  end
  