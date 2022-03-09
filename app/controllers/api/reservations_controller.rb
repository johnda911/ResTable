class Api::ReservationsController < ApplicationController
    skip_before_action :verify_authenticity_token
    before_action :require_logged_in!, only:[:create, :show]

    def index 
        @reservations = Reservation.all;
        render :index
    end
    
    def create
        @reservation = Reservation.new(reservation_params)
        if @reservation.save
            render "api/reservations/show"
        else
            render json: ["Please signin to make a reservation"], status: 422
        end
    end

    def show
        @reservation = Reservation.find(params[:id])
        if @reservation 
            render :show
        else
            render json: @reservation.errors.full_messages, status: 404
        end
    end

    def destroy
        @deleted_reservation = Reservation.find(params[:id])
        if @deleted_reservation.delete
            render :destroy
        else
            render @deleted_reservation.errors.full_messages
        end
    end

    private
    def reservation_params
        # if current_user 
            params.require(:reservation).permit(:party_size, :date, :time, :phone, :restaurant_id, :user_id)
        # else
        #     params.require(:reservation).permit(:party_size, :date, :time, :phone, :first_name, :last_name, :email)
        # end
    end

end
