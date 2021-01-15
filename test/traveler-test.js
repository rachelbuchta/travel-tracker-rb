/* eslint-disable max-len */
import { expect } from 'chai';

import Trips from '../src/trips';
import tripsData from '..src/data/trips-test-data'

describe("Trips",() => {
  let trips;

  beforeEach(() => {
    trips = new Trips(tripsData);

  });

  it("is a function", () => {

    expect(Trips).to.be.a("function");
  });

  it('should be an instance of Trips', () => {

    expect(trips).to.be.an.instanceof(Trips);
   
  });

  it('should initialize with an id', () => {    
    
   
  });
});