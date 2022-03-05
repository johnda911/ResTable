class Reservation < ApplicationRecord
    validates :party_size, :date, :time, :phone, presence: true

    # to be commented in after creatingn comments model
    # has_many :comments
    # has_many :commemters,
    #     through: :comments,
    #     source: :user
   

end
