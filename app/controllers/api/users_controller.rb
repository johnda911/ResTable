
class Api::UsersController < ApplicationController
    skip_before_action :verify_authenticity_token
    before_action :require_logged_in!, only:[:show]

    def create
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            render "api/users/show"
        else
            render json: @user.errors.full_messages, status: 422
        end
    end


    def show
        @user = User.find(params[:id])
        if @user 
            render :show
        else
            render json: @user.errors.full_messages, status: 404
        end
    end

    private
    def user_params
        params.require(:user).permit(:email, :username, :password)
    end

end
