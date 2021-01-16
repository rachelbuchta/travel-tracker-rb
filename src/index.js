
import Traveler from './traveler.js'
import Trip from './trip.js'
import Destination from './destination.js'

import fetchCalls from './apiCalls'


import './css/base.scss';


let traveler;
let trip;
let destination;
let travelerData;
let allTravelersData;
let tripsData;
let destinationsData;


import './images/turing-logo.png'



const initiateData = () => {
  console.log("HI")
  const data = Promise.all([fetchCalls.getTraveler(1), fetchCalls.getTrips(), fetchCalls.getDestinations()])
  .then(data => {
    traveler = new Traveler(data[0]);
    console.log(trip = new Trip(data[1]));
    destination = new Destination(data[2]);
  })
console.log(data.traveler)
return data
}
window.addEventListener('load', initiateData)

