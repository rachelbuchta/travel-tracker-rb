/* eslint-disable max-len */

import Trip from "./trip";

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

}