# if current_user
    json.extract! @reservation, :id, :date, :time, :party_size, :phone, :restaurant_id
    json.restaurantPhotoURL url_for(@reservation.restaurant.photo)
    json.restaurantName @reservation.restaurant.name
# else
#     json.extract! @reservation, :id, :date, :time, :party_size, :phone, :restaurant_id, :first_name, :last_name, :email
# end
  