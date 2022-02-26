class Api::UsersController < ApplicationController
    skip_before_action :verify_authenticity_token
    before_action :require_logged_in!, only:[:show]

    def show
        @user = User.find(params[:id])
        if @user 
            render :show
        else
            render json: @user.errors.full_messages, status: 404
        end
    end

    def create
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            redirect_to api_user_url(@user)
        else
            flash.now[:errors] = @user.errors.full_messages
            render json: @user.errors.full_messages, status: 400
            # render "static_pages/root"
            # render "api/restaurants/index"
        end
    end

    private
    def user_params
        params.require(:user).permit(:email, :username, :password)
    end

end
