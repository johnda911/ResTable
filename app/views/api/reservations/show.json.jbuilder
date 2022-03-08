# if current_user
    json.extract! @reservation, :id, :date, :time, :party_size, :phone, :restaurant_id, :user_id
    json.restaurantPhotoURL url_for(@reservation.restaurant.photo)
    json.restaurantName @reservation.restaurant.name
    json.userName @reservation.user.username
# else
#     json.extract! @reservation, :id, :date, :time, :party_size, :phone, :restaurant_id, :first_name, :last_name, :email
# end
  