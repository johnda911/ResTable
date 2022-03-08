# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'  

Reservation.destroy_all
User.destroy_all 
Restaurant.destroy_all
#     Comment.destroy_all

ApplicationRecord.connection.reset_pk_sequence!('users')
ApplicationRecord.connection.reset_pk_sequence!('restaurants')
#     ApplicationRecord.connection.reset_pk_sequence!('comments')
ApplicationRecord.connection.reset_pk_sequence!('reservations')


demoUser = User.create!(username: 'Demo User', email: 'demouser@gmail.com', password: '123456')

CUISINE = %w(American Italian Seafood French Chinese Indian Mexican Japanese British German Spanish Greek Pizzeria Tapas Winery Turkish Grill Mediterranean Steakhouse)
PAYMENT = %w(AMEX Discover MasterCard Visa Vemo PayPal Stripe)
DRESSCODE = ["Business Casual", "Smart Casual", "Casual Dress"]
NEIGHBOR = ["Tri-State Area", "Astoria", "Chelsea", "Columbus Circle", "Harlem", "Hudson Yards", "Kips Bay", "SoHo", "Long Island City", "NoMad", "Downtown Brooklyn", "DUMBO", "Williamsburg", "Upper East Side" ]
DININGSTYLE = ["Fine Dining", "Casual Dining", "Casual Elegant"]
RESTAURANT_META = [
    {
        name: "Popeyes",
        address: "994 Columbus Ave New York, NY 10025",
    },
    {
        name: "Le Coucou",
        address: "904 Columbus Ave New York, NY 10025",
    },
    {
        name: "Masseria",
        address: "887-889 9th Ave. New York, NY 10019",
    },
    {
        name: "Piccola Cucina",
        address: "106 E 60th St New York, NY 10022",
    },
    {
        name: "TAO Uptown",
        address: "42 East 58th Street New York, NY 10022",
    },
    {
        name: "Del Frisco's Double Eagle Steakhouse",
        address: "1221 Ave of the Americas New York, NY 10020",
    },
    {
        name: "Sugar Factory Broadway",
        address: "1991 Broadway New York, NY 10023",
    },
    {
        name: "Sarabeth's West",
        address: "423 Amsterdam Ave, New York, NY 10024",
    },
    {
        name: "BLT Prime",
        address: "1032 Lexington Ave New York, NY 10021",
    },
    {
      name: "Taco Bell",
      address: "994 Columbus Ave New York, NY 10025",
  },
  {
      name: "Saigon Shack",
      address: "904 Columbus Ave New York, NY 10025",
  },
  {
      name: "Shake Shack",
      address: "887-889 9th Ave. New York, NY 10019",
  },
  {
      name: "Mughlai indian Grill",
      address: "106 E 60th St New York, NY 10022",
  },
  {
      name: "Chipotle Mexican Grill",
      address: "42 East 58th Street New York, NY 10022",
  },
  {
      name: "MoMo Sushi",
      address: "1221 Ave of the Americas New York, NY 10020",
  },
  {
      name: "Golden wok",
      address: "1991 Broadway New York, NY 10023",
  },
  {
      name: "Eleven Madison Park",
      address: "423 Amsterdam Ave, New York, NY 10024",
  },
  {
      name: "BCD Tofo House",
      address: "1032 Lexington Ave New York, NY 10021",
  },
  {
      name: "Sabai Thai",
      address: "432 Park Ave S, New York, NY 10016",
  }
]



restaurant1 = Restaurant.create!(
  name: RESTAURANT_META[1][:name],
  address: RESTAURANT_META[1][:address],
  description: "Welcome to #{RESTAURANT_META[1][:name]}, the restaurant features a menu which includes Large variety of tappas, seafood, salads, burger ,meat and chicken entrees, vegan, gluten-free , childrens meals, and good selection of wines ,beers and cocktails.",
  phone: "(201)977-6093",
  cuisine: "#{CUISINE.sample}", 
  expense: 3,
  neighborhood: "#{NEIGHBOR.sample}",
  operation_hours: "Mon-Fri 11:30 am-10:30 pm",
  dining_style: "#{DININGSTYLE.sample}",  
  dress_code: "#{DRESSCODE.sample}",
  parking_details: "Public Lot",
  payment_options: "#{PAYMENT.sample}",
)
file1 = open('https://res-table-dev.s3.amazonaws.com/kfc.jpeg')
restaurant1.photo.attach(io: file1, filename: '1.jpg')

restaurant2 = Restaurant.create!(
  name: RESTAURANT_META[2][:name],
  address: RESTAURANT_META[2][:address],
  description: "Welcome to #{RESTAURANT_META[2][:name]}, the restaurant features a menu which includes Large variety of tappas, seafood, salads, burger ,meat and chicken entrees, vegan, gluten-free, childrens meals, and good selection of wines, beers and cocktails.",
  phone: "(201)977-6094",
  cuisine: "#{CUISINE.sample}", 
  expense: 3,
  neighborhood: "#{NEIGHBOR.sample}",
  operation_hours: "Mon-Thu, Sun 12:00 pm-10:00 pm",
  dining_style: "#{DININGSTYLE.sample}",  
  dress_code: "#{DRESSCODE.sample}",
  parking_details: "arking lots on Amsterdam & 75th Street",
  payment_options: "#{PAYMENT.sample}",
)
file2 = open('https://res-table-dev.s3.amazonaws.com/2.jpeg')
restaurant2.photo.attach(io: file2, filename: '2.jpg')

restaurant3 = Restaurant.create!(
  name: RESTAURANT_META[3][:name],
  address: RESTAURANT_META[3][:address],
  description: "Welcome to #{RESTAURANT_META[3][:name]}, the restaurant features a menu which includes Large variety of tappas, seafood, salads, burger ,meat and chicken entrees, vegan, gluten-free , childrens meals, and good selection of wines ,beers and cocktails.",
  phone: "(201)947-6093",
  cuisine: "#{CUISINE.sample}", 
  expense: 2,
  neighborhood: "#{NEIGHBOR.sample}",
  operation_hours: "Daily 5:00 pm-9:30 pm",
  dining_style: "#{DININGSTYLE.sample}",  
  dress_code: "#{DRESSCODE.sample}",
  parking_details: "Parking garage on 112 between Broadway and Amsterdam.",
  payment_options: "#{PAYMENT.sample}",
)
file3 = open('https://res-table-dev.s3.amazonaws.com/3.jpeg')
restaurant3.photo.attach(io: file3, filename: '3.jpg')

restaurant4 = Restaurant.create!(
  name: RESTAURANT_META[4][:name],
  address: RESTAURANT_META[4][:address],
  description: "Welcome to #{RESTAURANT_META[4][:name]}, showcasing the full breadth of the American table, prime steak and exceptional American seafood remain at the menu's core, while new seasonally-inspired signatures reflect Chef Lomonaco's dedication to contemporary American cuisine. Our award-winning wine list of over 550 labels is rivaled only by our world-class premium cocktail program, dedicated to expert showmanship and the art of the classic cocktail.",
  phone: "(421)977-6093",
  cuisine: "#{CUISINE.sample}", 
  expense: 2,
  neighborhood: "#{NEIGHBOR.sample}",
  operation_hours: "Daily 5:00 pm-9:00 pm",
  dining_style: "#{DININGSTYLE.sample}",  
  dress_code: "#{DRESSCODE.sample}",
  parking_details: "There is parking available on the street. There are two parking garages one block away.",
  payment_options: "#{PAYMENT.sample}",
)
file4 = open('https://res-table-dev.s3.amazonaws.com/4.jpeg')
restaurant4.photo.attach(io: file4, filename: '4.jpg')

restaurant5 = Restaurant.create!(
  name: RESTAURANT_META[5][:name],
  address: RESTAURANT_META[5][:address],
  description: "#{RESTAURANT_META[5][:name]} is a lovely little trattoria residing on an unassuming stretch of the SoHo area, across the street from the 92nd Street Y. Farmhouse tables topped with the season's produce are the appropriate setting for Sfoglia's country Italian fare. The private dining room tucked away upstairs can seat an intimate party of twelve.",
  phone: "(201)977-6097",
  cuisine: "#{CUISINE.sample}", 
  expense: 1,
  neighborhood: "#{NEIGHBOR.sample}",
  operation_hours: "Daily 1:00 pm-9:00 pm",
  dining_style: "#{DININGSTYLE.sample}",  
  dress_code: "#{DRESSCODE.sample}",
  parking_details: "There is street parking free after 7pm and there is a collection of garages in the area.",
  payment_options: "#{PAYMENT.sample}",
)
file5 = open('https://res-table-dev.s3.amazonaws.com/5.jpeg')
restaurant5.photo.attach(io: file5, filename: '5.jpg')

restaurant6 = Restaurant.create!(
  name: RESTAURANT_META[6][:name],
  address: RESTAURANT_META[6][:address],
  description: "Welcome to #{RESTAURANT_META[6][:name]}, the restaurant features a menu which includes Large variety of tappas, seafood, salads, burger ,meat and chicken entrees, vegan, gluten-free , childrens meals, and good selection of wines ,beers and cocktails.",
  phone: "(201)977-6297",
  cuisine: "#{CUISINE.sample}", 
  expense: 2,
  neighborhood: "#{NEIGHBOR.sample}",
  operation_hours: "Daily 1:00 pm-9:00 pm",
  dining_style: "#{DININGSTYLE.sample}",  
  dress_code: "#{DRESSCODE.sample}",
  parking_details: "There is ample and convenient parking in the Times Square area.",
  payment_options: "#{PAYMENT.sample}",
)
file6 = open('https://res-table-dev.s3.amazonaws.com/6.jpeg')
restaurant6.photo.attach(io: file6, filename: '6.jpg')

restaurant7 = Restaurant.create!(
  name: RESTAURANT_META[7][:name],
  address: RESTAURANT_META[7][:address],
  description: "Welcome to #{RESTAURANT_META[7][:name]}, it is named after a flowering plant famed in Mexico for its use in love potions. We hope that when you dine with us you too will fall under the spell of chef Medina's creative cooking, which incorporates seasonal and natural ingredients and more than a dozen types of chilies. Along with the authentic Mexican menu and an exceptional tequila list, we offer elegant decorative elements imported from Mexico. We look forward to seeing you soon.",
  phone: "(243)977-6297",
  cuisine: "#{CUISINE.sample}", 
  expense: 4,
  neighborhood: "#{NEIGHBOR.sample}",
  operation_hours: "Tue-Sat 5:00 pm-10:00 pm",
  dining_style: "#{DININGSTYLE.sample}",  
  dress_code: "#{DRESSCODE.sample}",
  parking_details: "Garage available on 58th street between 5th & 6th avenues, next to the Park Lane Hotel.",
  payment_options: "#{PAYMENT.sample}",
)
file7 = open('https://res-table-dev.s3.amazonaws.com/7.jpeg')
restaurant7.photo.attach(io: file7, filename: '7.jpg')

restaurant8 = Restaurant.create!(
  name: RESTAURANT_META[8][:name],
  address: RESTAURANT_META[8][:address],
  description: "Welcome to #{RESTAURANT_META[8][:name]}, the restaurant features a menu which brings to you the flavors and food of Tuscany. Established in 1983, Pappardella offers a romantic setting of timeless charm with 20 foot ceilings, French doors; a stunning mural of Florence.
  # Menu and service reflect the warmth and attention of the old world, as well as the diversity and techniques of today. we feature homemade pasta, artisanal pizza; other great Italian staples, like chicken parmagian, grilled branzino; scrumptious tiramisu.",
  phone: "(743)977-7297",
  cuisine: "#{CUISINE.sample}", 
  expense: 1,
  neighborhood: "#{NEIGHBOR.sample}",
  operation_hours: "Tue-Sat 5:00 pm-10:00 pm",
  dining_style: "#{DININGSTYLE.sample}",  
  dress_code: "#{DRESSCODE.sample}",
  parking_details: "Street Parking",
  payment_options: "#{PAYMENT.sample}",
)
file8 = open('https://res-table-dev.s3.amazonaws.com/8.jpeg')
restaurant8.photo.attach(io: file8, filename: '8.jpg')



restaurant9 = Restaurant.create!(
  name: RESTAURANT_META[9][:name],
  address: RESTAURANT_META[9][:address],
  description: "Welcome to #{RESTAURANT_META[9][:name]}, the restaurant features a menu which includes Large variety of tappas, seafood, salads, burger ,meat and chicken entrees, vegan, gluten-free , childrens meals, and good selection of wines ,beers and cocktails.",
  phone: "(201)977-6093",
  cuisine: "#{CUISINE.sample}", 
  expense: 3,
  neighborhood: "#{NEIGHBOR.sample}",
  operation_hours: "Mon-Fri 11:30 am-10:30 pm",
  dining_style: "#{DININGSTYLE.sample}",  
  dress_code: "#{DRESSCODE.sample}",
  parking_details: "Public Lot",
  payment_options: "#{PAYMENT.sample}",
)
file9 = open('https://res-table-dev.s3.amazonaws.com/9.jpeg')
restaurant9.photo.attach(io: file9, filename: '9.jpg')

restaurant10 = Restaurant.create!(
  name: RESTAURANT_META[10][:name],
  address: RESTAURANT_META[10][:address],
  description: "Welcome to #{RESTAURANT_META[10][:name]}, the restaurant features a menu which includes Large variety of tappas, seafood, salads, burger ,meat and chicken entrees, vegan, gluten-free, childrens meals, and good selection of wines, beers and cocktails.",
  phone: "(201)977-6094",
  cuisine: "#{CUISINE.sample}", 
  expense: 3,
  neighborhood: "#{NEIGHBOR.sample}",
  operation_hours: "Mon-Thu, Sun 12:00 pm-10:00 pm",
  dining_style: "#{DININGSTYLE.sample}",  
  dress_code: "#{DRESSCODE.sample}",
  parking_details: "arking lots on Amsterdam & 75th Street",
  payment_options: "#{PAYMENT.sample}",
)
file10 = open('https://res-table-dev.s3.amazonaws.com/10.jpeg')
restaurant10.photo.attach(io: file10, filename: '10.jpg')

restaurant11 = Restaurant.create!(
  name: RESTAURANT_META[11][:name],
  address: RESTAURANT_META[11][:address],
  description: "Welcome to #{RESTAURANT_META[11][:name]}, the restaurant features a menu which includes Large variety of tappas, seafood, salads, burger, meat and chicken entrees, vegan, gluten-free, childrens meals, and good selection of wines, beers and cocktails.",
  phone: "(201)947-6093",
  cuisine: "#{CUISINE.sample}", 
  expense: 2,
  neighborhood: "#{NEIGHBOR.sample}",
  operation_hours: "Daily 5:00 pm-9:30 pm",
  dining_style: "#{DININGSTYLE.sample}",  
  dress_code: "#{DRESSCODE.sample}",
  parking_details: "Parking garage on 112 between Broadway and Amsterdam.",
  payment_options: "#{PAYMENT.sample}",
)
file11 = open('https://res-table-dev.s3.amazonaws.com/11.jpeg')
restaurant11.photo.attach(io: file11, filename: '11.jpg')

restaurant12 = Restaurant.create!(
  name: RESTAURANT_META[12][:name],
  address: RESTAURANT_META[12][:address],
  description: "Welcome to #{RESTAURANT_META[12][:name]}, showcasing the full breadth of the American table, prime steak and exceptional American seafood remain at the menu's core, while new seasonally-inspired signatures reflect Chef Lomonaco's dedication to contemporary American cuisine. Our award-winning wine list of over 550 labels is rivaled only by our world-class premium cocktail program, dedicated to expert showmanship and the art of the classic cocktail.",
  phone: "(421)977-6093",
  cuisine: "#{CUISINE.sample}", 
  expense: 2,
  neighborhood: "#{NEIGHBOR.sample}",
  operation_hours: "Daily 5:00 pm-9:00 pm",
  dining_style: "#{DININGSTYLE.sample}",  
  dress_code: "#{DRESSCODE.sample}",
  parking_details: "There is parking available on the street. There are two parking garages one block away.",
  payment_options: "#{PAYMENT.sample}",
)
file12 = open('https://res-table-dev.s3.amazonaws.com/12.jpeg')
restaurant12.photo.attach(io: file12, filename: '12.jpg')

restaurant13 = Restaurant.create!(
  name: RESTAURANT_META[13][:name],
  address: RESTAURANT_META[13][:address],
  description: "#{RESTAURANT_META[13][:name]} is a lovely little trattoria residing on an unassuming stretch of the SoHo area, across the street from the 92nd Street Y. Farmhouse tables topped with the season's produce are the appropriate setting for Sfoglia's country Italian fare. The private dining room tucked away upstairs can seat an intimate party of twelve.",
  phone: "(201)977-6097",
  cuisine: "#{CUISINE.sample}", 
  expense: 1,
  neighborhood: "#{NEIGHBOR.sample}",
  operation_hours: "Daily 1:00 pm-9:00 pm",
  dining_style: "#{DININGSTYLE.sample}",  
  dress_code: "#{DRESSCODE.sample}",
  parking_details: "There is street parking free after 7pm and there is a collection of garages in the area.",
  payment_options: "#{PAYMENT.sample}",
)
file13 = open('https://res-table-dev.s3.amazonaws.com/13.jpeg')
restaurant13.photo.attach(io: file13, filename: '13.jpg')

restaurant14 = Restaurant.create!(
  name: RESTAURANT_META[14][:name],
  address: RESTAURANT_META[14][:address],
  description: "Welcome to #{RESTAURANT_META[14][:name]}, the restaurant features a menu which includes Large variety of tappas, seafood, salads, burger ,meat and chicken entrees, vegan, gluten-free , childrens meals, and good selection of wines ,beers and cocktails.",
  phone: "(201)977-6297",
  cuisine: "#{CUISINE.sample}", 
  expense: 2,
  neighborhood: "#{NEIGHBOR.sample}",
  operation_hours: "Daily 1:00 pm-9:00 pm",
  dining_style: "#{DININGSTYLE.sample}",  
  dress_code: "#{DRESSCODE.sample}",
  parking_details: "There is ample and convenient parking in the Times Square area.",
  payment_options: "#{PAYMENT.sample}",
)
file14 = open('https://res-table-dev.s3.amazonaws.com/14.jpeg')
restaurant14.photo.attach(io: file14, filename: '14.jpg')

restaurant15 = Restaurant.create!(
  name: RESTAURANT_META[15][:name],
  address: RESTAURANT_META[15][:address],
  description: "Welcome to #{RESTAURANT_META[15][:name]}, it is named after a flowering plant famed in Mexico for its use in love potions. We hope that when you dine with us you too will fall under the spell of chef Medina's creative cooking, which incorporates seasonal and natural ingredients and more than a dozen types of chilies. Along with the authentic Mexican menu and an exceptional tequila list, we offer elegant decorative elements imported from Mexico. We look forward to seeing you soon.",
  phone: "(243)977-6297",
  cuisine: "#{CUISINE.sample}", 
  expense: 4,
  neighborhood: "#{NEIGHBOR.sample}",
  operation_hours: "Tue-Sat 5:00 pm-10:00 pm",
  dining_style: "#{DININGSTYLE.sample}",  
  dress_code: "#{DRESSCODE.sample}",
  parking_details: "Garage available on 58th street between 5th & 6th avenues, next to the Park Lane Hotel.",
  payment_options: "#{PAYMENT.sample}",
)
file15 = open('https://res-table-dev.s3.amazonaws.com/15.jpeg')
restaurant15.photo.attach(io: file15, filename: '15.jpg')

restaurant16 = Restaurant.create!(
  name: RESTAURANT_META[16][:name],
  address: RESTAURANT_META[16][:address],
  description: "Welcome to #{RESTAURANT_META[16][:name]}, the restaurant features a menu which brings to you the flavors and food of Tuscany. Established in 1983, Pappardella offers a romantic setting of timeless charm with 20 foot ceilings, French doors; a stunning mural of Florence.
  # Menu and service reflect the warmth and attention of the old world, as well as the diversity and techniques of today. we feature homemade pasta, artisanal pizza; other great Italian staples, like chicken parmagian, grilled branzino; scrumptious tiramisu.",
  phone: "(743)977-7297",
  cuisine: "#{CUISINE.sample}", 
  expense: 1,
  neighborhood: "#{NEIGHBOR.sample}",
  operation_hours: "Tue-Sat 5:00 pm-10:00 pm",
  dining_style: "#{DININGSTYLE.sample}",  
  dress_code: "#{DRESSCODE.sample}",
  parking_details: "Street Parking",
  payment_options: "#{PAYMENT.sample}",
)
file16 = open('https://res-table-dev.s3.amazonaws.com/16.jpeg')
restaurant16.photo.attach(io: file16, filename: '16.jpg')




demoReservation1 = Reservation.create!(party_size: 4, date: '2022-05-01', time: '20:00:00', phone: '(000)000-0000', restaurant_id: restaurant11.id, user_id: demoUser.id)
demoReservation2 = Reservation.create!(party_size: 1, date: '2022-03-20', time: '20:30:00', phone: '(000)000-0000', restaurant_id: restaurant7.id, user_id: demoUser.id)
demoReservation3 = Reservation.create!(party_size: 2, date: '2022-06-01', time: '18:00:00', phone: '(000)000-0000', restaurant_id: restaurant15.id, user_id: demoUser.id)
demoReservation4 = Reservation.create!(party_size: 3, date: '2023-12-24', time: '19:30:00', phone: '(000)000-0000', restaurant_id: restaurant4.id, user_id: demoUser.id)