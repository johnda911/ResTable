# ResTable

## Description
ResTable, an OpenTable clone, is an online restaurant-reservation service that allows users to make online reservations, see the upcoming reservations, and search for restaurants based on their cuisines.

[live site](https://restable-fsp.herokuapp.com/#/) 

## Core Features
### Search Restaurants by Cuisine

The searchbar at the top of homepage allows users to search restaurants based on the cuisine type they are interested in. On click of any cuisine from the dropdown menu, or manyally type in the searchbar, the page below will show the filtered result simultaneously. This feature is achieved by using the redux event listeners to rerender the page. The function `editSearchTerm` listens to any input changes users make in the searchbar to make sure the page rerenders whenever the state changes. `dynamicSearch` is responsible for filtering the dropdown list based on user input. `onCuisineSelected` is passed to the child component `Cuisine` to force the whole state change once the click event is triggered.

![ezgif-4-0e2f08d26e](https://user-images.githubusercontent.com/94198079/157999168-d5515574-b770-497b-b26f-63c44009245a.gif)

```javascript
  editSearchTerm = (e) => {
    this.setState({ searchTerm: e.target.value });
    this.props.receiveCuisine(e.target.value);
  };

  dynamicSearch = () => {
    return this.state.cuisines.filter((cuisine) =>
      cuisine.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    );
  };

  onCuisineSelected = (cuisine) => {
    this.setState({ searchTerm: cuisine });
    this.props.receiveCuisine(cuisine);
  };
```

### Make Reservations
Users can make reservations by filling out the reservation form using dropdown menus. If the current user is not signed in, there would be a popover requesting them to sign in or use demo user mode instead. Upon click on "Reserve a Table", it redirects users to the confirmation page where they can modify or view the reservation they just made. They can also see the whole of list upcoming reservations by going to the profile page. 


By making an async call as shown below, the app would hold on the the confirmation page until after it makes a post ajax request and returns a new reservatio object as a promise.

![ezgif com-gif-maker](https://user-images.githubusercontent.com/94198079/157999283-82c4de26-dedf-4b5d-b120-b115fb42420f.gif)


```javascript
const handleSubmit = (e) => {
    e.preventDefault();
    ReservationAPIUtil.createReservation({
      restaurant_id: myReservation.restaurant_id,
      date: reservationDate,
      time: reservationDate,
      party_size: partySize,
      phone: "(123)-456-7890",
      user_id: currentUser.id,
    }).then((reservation) => {
      history.push(`/reservation/${reservation.id}/confirmation`);
    });
```

### Future Directions
* Diners can make reviews on their past comfirmed reservations.
* Users can see recommended restaurants based on their current location.
