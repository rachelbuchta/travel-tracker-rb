const fetchCalls = {

  getTraveler(id) {
    return fetch()
    .then(response => response.json())
  },

  getTrips() {
    return fetch()
    .then(response => response.json())
  },

  getDestinations() {
    return fetch()
    .then(response => response.json())
  }
}

export default fetchCalls;