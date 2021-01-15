/* eslint-disable max-len */
import { expect } from 'chai';

import Traveler from '../src/traveler';
import travelerData from '..src/data/traveler-test-data'

describe("Traveler",() => {
  let traveler;
  let traveler2;

  beforeEach(() => {
    traveler = new Traveler(travelerData);
    traveler2 = new Traveler(travelerData);

  });

  it("is a function", () => {

    expect(Traveler).to.be.a("function");
  });

  it('should be an instance of Traveler', () => {

    expect(traveler).to.be.an.instanceof(Traveler);
    expect(traveler2).to.be.an.instanceof(Traveler);
  });

  it('should have an id', () => {    

    expect(traveler.id).to.eq(2)
    expect(traveler2.id).to.eq(9)
  });

  it('should have a name', () => {

    expect(traveler.name).to.eq("Rachael Vaughten")
    expect(traveler2.name).to.eq("Natalee Deegin")
  });

  it('should have a traveler type', () => {

    expect(traveler.travelerType).to.eq("thrill-seeker")
    expect(traveler2.travelerType).to.eq("thrill-seeker")
  });

  it('should hold an array of trips', () => {

    let trips = new Trips(tripData)

    expect(traveler.trips).to.deep.eq(trips)
    expect(traveler2.trips).to.deep.eq(trips)
  });
});