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
  }
}

export default fetchCalls;