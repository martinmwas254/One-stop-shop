class UsersController < ApplicationController
    # fetching all users
    def index
        users = User.all
        render json: users
    end

    # creating a new user 
    def create
        user = User.new(user_params)
        if user.save
          render json: user, status: :created
        else
          render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end
    

end
