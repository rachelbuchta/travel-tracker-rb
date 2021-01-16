/* eslint-disable max-len */
import Trip from "./trip";
import Destination from "./destination"

export default class Traveler {
  constructor(travelerData, tripsData) {
    this.id = travelerData.id;
    this.name = travelerData.name;
    this.travelerType = travelerData.travelerType;
    this.trips = this.instantiateNewTrips(tripsData);
  }

filterTripData(tripsData) {
  return tripsData.filter(trip => trip.userID === this.id)
}

instantiateNewTrips(tripsData) {
  return this.filterTripData(tripsData).map(data => new Trip(data))
}

filterByStatus(status) {
  const trips = this.trips.filter(trip => trip.status === status)
  return trips
}

findCurrentTrips(tripsData) {
  const date = this.trips.map(trip => trip.date)
  const findDates = date.map(date => new Date(date))
  const findCurrent = this.trips.find(trip => trip.date.includes(new Date()))
  console.log(findDates)
  console.log(new Date())
}

returnTravelerFirstName() {
  const firstName = this.name.split(" ")[0]
  return firstName
}

findTripsThisYear() {
  const date = this.trips.map(trip => trip.date)
  const findDates = date.map(date => new Date(date))
  const filterDates = findDates.filter(item => item.getFullYear() === 2021)
  const indexOfDate = findDates.indexOf(2021)
}

calculateTotalSpentOnTrips(destinationData) {
 return this.findTripsThisYear.reduce((sum, trip) => {
  sum += trip.calculateCostOfTrip(destinationData)
 return sum  
 },0)
}


}