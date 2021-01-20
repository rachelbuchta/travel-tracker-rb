/* eslint-disable max-len */
import { expect } from "chai";

import Trip from "../src/trip";
import tripsData from "../src/data/trip-test-data"
import destinationData from "../src/data/destination-test-data"

describe("Trip",() => {
  let currentTrip;


  beforeEach(() => {

    currentTrip = new Trip(tripsData[0], destinationData[0]);
  });

  it("is a function", () => {

    expect(Trip).to.be.a("function");
  });

  it("should be an instance of Trip", () => {

    expect(currentTrip).to.be.an.instanceof(Trip);
  });

  it("should have an id", () => {    
    
    expect(currentTrip.id).to.eq(182);
  });

  it("should have a user ID", () => {    
    
    expect(currentTrip.userID).to.eq(9);
  });

  it("should have a destination ID", () => {    
    
    expect(currentTrip.destinationID).to.eq(1);
  });

  it("should hold number of travelers", () => {    
    
    expect(currentTrip.travelers).to.eq(6);
  });

  it("should have a start date", () => {    
    
    expect(currentTrip.date).to.eq("2021/01/15");
  });

  it("should hold travel duration", () => {    
    
    expect(currentTrip.duration).to.eq(5);
  });

  it("should have a status", () => {    
    
    expect(currentTrip.status).to.eq("approved");
  });

  it("should find the destination data by the id", () => {

  expect(currentTrip.findDestination(destinationData)).to.deep.eq(destinationData[0]);
  });

  it("should calculate total cost of trip for that destination", () => { 

    expect(currentTrip.calculateCostOfTrip(destinationData)).to.eq(4500);
  });

  it("should add 10% to the total cost of trip", () => {

    expect(currentTrip.calculateAgentFee(destinationData)).to.eq(450);
  });

  it("should return total cost of trip plus fees", () => {

    expect(currentTrip.costOfTripAndFee(destinationData)).to.deep.eq({total: 4500, totalPlusFees: 4950});
  });

  it("should reformat the date property", () => {

  expect(currentTrip.formatDate(currentTrip.date)).to.eq("2021/01/15");
  });

});