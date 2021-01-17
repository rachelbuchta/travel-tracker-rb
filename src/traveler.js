/* eslint-disable max-len */
import Trip from "./trip";
import Destination from "./destination"

export default class Traveler {
  constructor(travelerData,tripsData, destinationData) {
    this.id = travelerData.id;
    this.name = travelerData.name;
    this.travelerType = travelerData.travelerType;
    this.destinationData = destinationData;
    this.tripsData = tripsData;
    this.trips = this.instantiateNewTrips() || [];
  }

filterTripData(tripsData) {
  return tripsData.filter(trip => trip.userID === this.id)
}

instantiateNewTrips() {
  if (this.tripsData.length >0)
  return this.tripsData.reduce((acc, trip) => {
  this.destinationData.forEach(destination => {
    if (this.id === trip.userID && trip.destinationID === destination.id) {
      acc.push(new Trip(trip, destination))
    }
  })
  return acc  
  },[])
}

filterByStatus(status) {
  const trips = this.trips.filter(trip => trip.status === status)
  return trips
}

findCurrentTrips() {
  const currentTrip = this.trips.reduce((acc, trip) => {
    let today = new Date()
    let startDate = new Date(trip.date)
    let endDate = new Date(trip.date)
    endDate.setDate(endDate.getDate() + trip.duration)
    if (startDate < today && endDate > today) {
      acc.push(trip)
    }
  return acc
  },[])
  return currentTrip
}

findPastTrips() {
  const trips = this.trips.reduce((acc, trip) => {
    let today = new Date()
    let endDate = new Date(trip.date)
    endDate.setDate(endDate.getDate() + trip.duration)
    if (endDate < today) {
      acc.push(trip)
    }
  return acc
  },[])
  return trips
}

findUpcomingTrips() {
  const trips = this.trips.reduce((acc, trip) => {
    let today = new Date();
    let startDate = new Date(trip.date);
    if (startDate > today) {
      acc.push(trip);
    }
    return acc;
  }, []);
  return trips
}

returnTravelerFirstName() {
  const firstName = this.name.split(" ")[0]
  return firstName
}

calculateTotalSpentOnTrips(year) {
  const tripTotal = this.trips.reduce((total, trip) => {
  if (trip.date.includes(year)) {
    let lodging = trip.destination.estimatedLodgingCostPerDay * trip.duration * trip.travelers;
    let flights = trip.destination.estimatedFlightCostPerPerson * trip.travelers;
    total += lodging + flights;
  }  
  return total  
  },0)
  let agentFee = tripTotal * 0.1;
  return tripTotal + agentFee
}

}
