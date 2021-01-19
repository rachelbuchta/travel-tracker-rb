/* eslint-disable max-len */
import Destination from "./destination"

export default class Trip {
  constructor(tripsData, destinationData) {
    this.id = tripsData.id;
    this.userID = tripsData.userID;
    this.destinationID = tripsData.destinationID;
    this.travelers = tripsData.travelers;
    this.date = this.formatDate(tripsData.date);
    this.duration = tripsData.duration;
    this.status = tripsData.status;
    this.suggestedActivities = tripsData.suggestedActivities;
    this.destination = destinationData;
  }

  findDestination(destinationData) {
    console.log(destinationData)
    return this.destination.id 
    // return destinationData.destinations.find(destination => this.destinationID === destination.id)
  }

  calculateCostOfTrip() {
    // const currentDestination = this.findDestination(destinationData)
    console.log(this.destinationID)
    const costPerDay = this.destination.estimatedLodgingCostPerDay * this.travelers
    const duration = costPerDay * this.duration
    const flights = this.destination.estimatedFlightCostPerPerson * this.travelers
    console.log(duration + flights)
    return duration + flights
  }

  calculateAgentFee() {
    const dollars = (this.calculateCostOfTrip() / 100) * 10
    console.log(dollars)
    return dollars
  }

  costOfTripAndFee() {
    return {
      total: this.calculateCostOfTrip(),
      totalPlusFees: this.calculateAgentFee() + this.calculateCostOfTrip()
    }
  }

  formatDate(tripDate) {
    let today = new Date(tripDate);
    let month = '' + (today.getMonth() + 1);
    let day = '' + today.getDate();
    let year = today.getFullYear();
    if (month.length < 2) {
      month = '0' + month
    }
    if (day.length < 2) {
      day = '0' + day
    }
    return [year, month, day].join("/");
  }

}
