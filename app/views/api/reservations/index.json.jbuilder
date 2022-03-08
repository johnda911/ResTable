@reservations.each do |reservation|
    json.set! reservation.id do 
        json.extract! reservation, :id, :date, :time, :party_size, :restaurant_id, :user_id
        json.restaurantPhotoURL url_for(reservation.restaurant.photo)
        json.restaurantName reservation.restaurant.name
        # json.userName @reservation.user.username
    end
end
