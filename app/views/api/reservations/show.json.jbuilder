# if current_user
    json.extract! @reservation, :id, :date, :time, :party_size, :phone, :restaurant_id
# else
#     json.extract! @reservation, :id, :date, :time, :party_size, :phone, :restaurant_id, :first_name, :last_name, :email
# end
  