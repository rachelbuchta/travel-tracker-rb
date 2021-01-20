/* eslint-disable max-len */
import { expect } from 'chai';

import Traveler from '../src/traveler';
import travelerData from '../src/data/traveler-test-data'
import tripsData from '../src/data/trip-test-data'
import destinationData from '../src/data/destination-test-data'

describe("Traveler",() => {
  let traveler;
  let traveler2;

  beforeEach(() => {
    traveler = new Traveler(travelerData[0], tripsData, destinationData);
    traveler2 = new Traveler(travelerData[1], tripsData, destinationData);
  });

  it("is a function", () => {

    expect(Traveler).to.be.a("function");
  });

  it('should be an instance of Traveler', () => {

    expect(traveler).to.be.an.instanceof(Traveler);
    expect(traveler2).to.be.an.instanceof(Traveler);
  });

  it('should have an id', () => {    

    expect(traveler.id).to.eq(2);
    expect(traveler2.id).to.eq(9);
  });

  it('should have a name', () => {

    expect(traveler.name).to.eq("Rachael Vaughten");
    expect(traveler2.name).to.eq("Natalee Deegin");
  });

  it('should have a traveler type', () => {

    expect(traveler.travelerType).to.eq("thrill-seeker");
    expect(traveler2.travelerType).to.eq("relaxer");
  });

  it('should filter through all trips and return the ones whose userID matches travelers ID', () => {

    expect(traveler.filterTripData(tripsData)).to.deep.eq
    ([tripsData[3], tripsData[4], tripsData[5]]);
    expect(traveler2.filterTripData(tripsData)).to.deep.eq
    ([tripsData[0], tripsData[1], tripsData[2]]);
  });

  it.skip('should instantiate and hold all trips for that traveler', () => {

    expect(traveler.instantiateNewTrips(tripsData)).to.deep.eq([tripsData[3], tripsData[4], tripsData[5]])
    expect(traveler.trips).to.deep.eq([tripsData[3], tripsData[4], tripsData[5]]);
    expect(traveler2.instantiateNewTrips(tripsData)).to.deep.eq([tripsData[0], tripsData[1], tripsData[2]])
    expect(traveler2.trips).to.deep.eq([tripsData[0], tripsData[1], tripsData[2]]);
  });

  it.skip('should filter users trips based on status', () => {

    expect(traveler.filterByStatus("approved")).to.deep.eq([tripsData[4], tripsData[5]]);
    
    expect(traveler.filterByStatus("pending")).to.deep.eq([tripsData[3]]);

  });

  it.skip('should return trips they are currently on', () => {


    expect(traveler2.findCurrentTrips()).to.deep.eq([tripsData[0]])
  });

  it('should return travelers first name', () => {

    expect(traveler.returnTravelerFirstName()).to.eq("Rachael")
  });

  it('should calculate total amount spent on trips this year', () => {

    expect(traveler2.calculateTotalSpentOnTrips(2020)).to.eq(33748)
    expect(traveler.calculateTotalSpentOnTrips(2020)).to.eq(15862)
  })

  it.skip('should return past trips they were on', () => {

    expect(traveler2.findPastTrips()).to.deep.eq([tripsData[1], tripsData[2]])
  });

  it('should return upcoming trips they have', () => {

    expect(traveler2.findUpcomingTrips()).to.deep.eq([])
  });

});