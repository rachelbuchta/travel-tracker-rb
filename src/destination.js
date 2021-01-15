/* eslint-disable max-len */
export default class Destination {
  constructor(destinationData) {
    this.id = destinationData.id;
    this.destination = destinationData.destination;
    this.estimatedLodgingCostPerDay = destinationData.lodging;
    this.estimatedFlightCostPerPerson = destinationData.flights;
    this.image = destinationData.image;
    this.alt = destinationData.altText;
  }
}