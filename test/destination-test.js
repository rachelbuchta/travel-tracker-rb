/* eslint-disable max-len */
import { expect } from 'chai';

import Destination from '../src/destination';
import destinationData from '../src/data/destination-test-data'

describe("Destination",() => {
  let destination;

  beforeEach(() => {

    destination = new Destination(destinationData[0]);
  });

  it("is a function", () => {

    expect(Destination).to.be.a("function");
  });

  it('should be an instance of Destination', () => {

    expect(destination).to.be.an.instanceof(Destination);
  });

  it('should have an id', () => {    
    
    expect(destination.id).to.eq(1);
  });

  it('should have a destination', () => {    
    
    expect(destination.destination).to.eq("Lima, Peru");
  });

  it('should have an estimate cost of lodging per day', () => {    

    expect(destination.estimatedLodgingCostPerDay).to.eq(70);
  });

  it('should have an estimate flights per person', () => {    
    
   expect(destination.estimatedFlightCostPerPerson).to.eq(400);
  });

  it('should have an image', () => {    
    
   expect(destination.image).to.eq("https://images.unsplash.com/photo-1489171084589-9b5031ebcf9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80");
  });

  it('should have an alt text', () => {    
    
   expect(destination.alt).to.eq("overview of city buildings with a clear sky");
  })
})