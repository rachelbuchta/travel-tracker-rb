const fetchCalls = {

  getTraveler(id) {
    return fetch(`http://localhost:3001/api/v1/travelers/${id}`)
      .then(response => response.json())
      .catch(err => {
        alert("Sorry! We are having trouble getting the data, try again later!")
      })
  },

  getAllTravelers() {
    return fetch("http://localhost:3001/api/v1/travelers")
      .then(response => response.json())
      .catch(err => {
        alert("Sorry! We are having trouble getting the data, try again later!")
      })
  },

  getTrips() {
    return fetch("http://localhost:3001/api/v1/trips")
      .then(response => response.json())
      .catch(err => {
        alert("Sorry! We are having trouble getting the data, try again later!")
      })
  },

  getDestinations() {
    return fetch("http://localhost:3001/api/v1/destinations")
      .then(response => response.json())
      .catch(err => {
        alert("Sorry! We are having trouble getting the data, try again later!")
      })
  },

  postTrip(newBooking) {
    // let newTrip = fetchAPI.buildTripObject(trip);
    return fetch('http://localhost:3001/api/v1/trips', {
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify(newBooking)
    })
      .then(response => response.json())
      .then((response) => {
        console.log(response)
        return response
      })
      .catch(error => console.log(error.message))
      
  }
}
  // buildTripObject(booking) {
  //   let bookingObject = {
  //     id: trip.id,
  //     userID: trip.userID,
  //     destinationID: trip.destinationID,
  //     travelers: trip.travelers,
  //     date: trip.date,
  //     duration: trip.duration,
  //     status: trip.status,
  //     suggestedActivities: trip.suggestedActivities
  //   }
  //   return bookingObject
  // }




export default fetchCalls;