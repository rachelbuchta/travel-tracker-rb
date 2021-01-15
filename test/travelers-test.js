/* eslint-disable max-len */
import { expect } from 'chai';

import Traveler from '../src/traveler';
import travelerData from '..src/data/traveler-test-data'

describe("Traveler",() => {
  let traveler;

  beforeEach(() => {
    traveler = new Traveler(travelerData);

  });

  it("is a function", () => {

    expect(Traveler).to.be.a("function");
  });

  it('should be an instance of Traveler', () => {

    expect(traveler).to.be.an.instanceof(Traveler);
  });

  it('should have an id', () => {    

    expect(traveler.id).to.eq(2)
  });

  it('should have a name', () => {

    expect(traveler.name).to.eq("Rachael Vaughten")
  });

  it('should have a traveler type', () => {

    expect(traveler.travelerType).to.eq("thrill-seeker")
  });

  it('should hold an array of trips', () => {

    trips = new Trips(tripData)

    expect(traveler.trips).to.deep.eq(trips)
  });


});