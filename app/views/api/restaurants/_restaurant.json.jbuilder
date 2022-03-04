json.extract! restaurant, :id, :name, :address, :description, :phone, :cuisine, :expense, :neighborhood, :operation_hours, :dining_style, :dress_code, :parking_details, :payment_options
json.restaurantPhotoURL url_for(restaurant.photo)
