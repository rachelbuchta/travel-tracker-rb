/* eslint-disable max-len */
import { expect } from 'chai';

import Destination from '../src/destinations';
import destinationData from '..src/data/destinations-test-data'

describe("Destination",() => {
  let destination;

  beforeEach(() => {
    destination = new Destination(destinationData);

  });

  it("is a function", () => {

    expect(Destination).to.be.a("function");
  });

  it('should be an instance of Destination', () => {

    expect(destination).to.be.an.instanceof(Destination);
   
  });

  it('should initialize with an id', () => {    
    
   
  });
});