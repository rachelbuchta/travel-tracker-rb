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

  it('should initialize with an id', () => {    
    
   
  });
});