class CreateRestaurants < ActiveRecord::Migration[5.2]
  def change
    create_table :restaurants do |t|
      t.string :name, null: false
      t.string :address, null: false
      t.text :description, null: false, limit: 280
      t.string :phone, null: false
      t.string :cuisine, null: false
      t.integer :expense
      t.string :neighborhood
      t.string :operation_hours
      t.string :dining_style
      t.string :dress_code
      t.string :parking_details
      t.string :payment_options
      t.timestamps
    end

    add_index :restaurants, :name
  end
end
