class AddEmailToReservations < ActiveRecord::Migration[5.2]
  def change
    add_column :reservations, :email, :string
  end
end
