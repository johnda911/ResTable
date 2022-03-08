class AddForeignKeyToReservation < ActiveRecord::Migration[5.2]
  def change
    add_foreign_key :reservations, :users
  end
end
