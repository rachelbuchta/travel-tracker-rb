// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********
import Traveler from './traveler.js'
import Trip from './trip.js'
import Destination from './destination.js'

import fetchCalls from './apiCalls'

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';
// import '.traveler.js'

let traveler;
let trip;
let destination;
let travelerData;
let allTravelersData;
let tripsData;
let destinationsData;

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
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

