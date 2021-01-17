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


// function updateDate(event) {
//   today = new Date(event.target.value).toDateString();
//   hotel.date = today;
//   hotel.userDirectory.currentUser.bookingService.sortBookingsByDate(today);
//   displayAvailableRooms();
// }
/* <input type="date" id="calendar" name="date"></input> */