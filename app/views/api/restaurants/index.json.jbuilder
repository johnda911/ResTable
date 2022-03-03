@restaurants.each do |restaurant|
    json.set! restaurant.id do 
        json.extract! restaurant, :id, :name, :cuisine, :expense, :neighborhood
        json.restaurantPhotoURL url_for(restaurant.photo)
    end
end
