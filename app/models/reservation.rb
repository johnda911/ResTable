class Reservation < ApplicationRecord
    # if current_user 
        validates :party_size, :date, :time, :phone, :restaurant_id, presence: true
    # else
    #     validates :first_name, :last_name, :email, presence: true
    # end

    belongs_to :user
    belongs_to :restaurant

end
