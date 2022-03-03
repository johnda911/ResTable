class Restaurant < ApplicationRecord
    validates :name, :address, :description, :phone, :cuisine, presence: true
    # validates :name, uniqueness: true 

    # to be commented in after creatingn comments model
    # has_many :comments
    # has_many :commemters,
    #     through: :comments,
    #     source: :user
   
    has_one_attached :photo


end
