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
    this.destination = destinationData
  }

  findDestination(destinationData) {
   return destinationData.find(destination => this.destinationID === destination.id)
  }

  calculateCostOfTrip(destinationData) {
    const currentDestination = this.findDestination(destinationData)
    const costPerDay = currentDestination.estimatedLodgingCostPerDay * this.travelers
    const duration = costPerDay * this.duration
    const flights = currentDestination.estimatedFlightCostPerPerson * this.travelers
    return duration + flights
  }

  calculateAgentFee(destinationData) {
    const dollars = (this.calculateCostOfTrip(destinationData) / 100) * 10
     return dollars
  }

  costOfTripAndFee(destinationData) {
    return {
      total: this.calculateCostOfTrip(destinationData),
      totalPlusFees: this.calculateAgentFee(destinationData) + this.calculateCostOfTrip(destinationData)
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
