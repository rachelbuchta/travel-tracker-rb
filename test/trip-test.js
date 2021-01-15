/* eslint-disable max-len */
import { expect } from 'chai';

import Trip from '../src/trip';
import tripsData from '../src/data/trip-test-data'

describe("Trip",() => {
  let currentTrip;
  let approvedTrip;
  let pendingTrip;

  beforeEach(() => {

    currentTrip = new Trip(tripsData[0]);
    approvedTrip = new Trip(tripsData[1]);
    pendingTrip = new Trip(tripsData[3]);
  });

  it("is a function", () => {

    expect(Trip).to.be.a("function");
  });

  it('should be an instance of Trip', () => {

    expect(currentTrip).to.be.an.instanceof(Trip);
    expect(approvedTrip).to.be.an.instanceof(Trip);
    expect(pendingTrip).to.be.an.instanceof(Trip);
  });

  it('should have an id', () => {    
    
    expect(currentTrip.id).to.eq(182);
    expect(approvedTrip.id).to.eq(10);
    expect(pendingTrip.id).to.eq(171);
  });

  it('should have a user ID', () => {    
    
    expect(currentTrip.userID).to.eq(9);
    expect(approvedTrip.userID).to.eq(9);
    expect(pendingTrip.userID).to.eq(2);
  });

  it('should have a destination ID', () => {    
    
    expect(currentTrip.destinationID).to.eq(1);
    expect(approvedTrip.destinationID).to.eq(2);
    expect(pendingTrip.destinationID).to.eq(4);
});

  it('should hold number of travelers', () => {    
    
    expect(currentTrip.travelers).to.eq(6);
    expect(approvedTrip.travelers).to.eq(6);
    expect(pendingTrip.travelers).to.eq(1);
});

  it('should have a start date', () => {    
    
    expect(currentTrip.date).to.eq("2021/01/15");
    expect(approvedTrip.date).to.eq("2020/07/23");
    expect(pendingTrip.date).to.eq("2020/12/27");
});

  it('should hold travel duration', () => {    
    
    expect(currentTrip.duration).to.eq(5);
    expect(approvedTrip.duration).to.eq(17);
    expect(pendingTrip.duration).to.eq(18);
});

  it('should have a status', () => {    
    
    expect(currentTrip.status).to.eq("approved");
    expect(approvedTrip.status).to.eq("approved");
    expect(pendingTrip.status).to.eq("pending");
});

});