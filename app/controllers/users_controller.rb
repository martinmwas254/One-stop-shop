class UsersController < ApplicationController
    # fetching all users
    def index
        users = User.all
        render json: users
    end

    # creating a new user 
    def create
        user = User.create(username: params[:username],email: params[:email], password: params[:password] )
        if user.valid?
            render json: {success: "User created successfully"}, status: :created

        else
            render json: {error: user.errors.full_messages}, status: :unprocessable_entity

        end
    end

    # seeing a single user
    def show
        user = User.find_by(id: params[:id]) #value or null
        if user
            render json: user
            
        else
            render json: {error: "User not found"}, status: :not_found

        end
    
    end 
    

end
