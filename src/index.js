
import Traveler from './traveler.js'
import Trip from './trip.js'
import Destination from './destination.js'

import fetchCalls from './apiCalls'


import './css/base.scss';


let currentTraveler;
let allTrips;
let allDestinations;
let allTravelers;



import './images/turing-logo.png'



const initiateData = () => {
 let travelerData = fetchCalls.getTraveler(1) 
 let tripData = fetchCalls.getTrips() 
 let destinationData = fetchCalls.getDestinations()
 let allTravelerData = fetchCalls.getAllTravelers()
  return Promise.all([tripData, destinationData, allTravelerData, travelerData])
  .then(responses => {
    allTrips = responses[0]
    allDestinations = responses[1]
    allTravelers = responses[2]
    currentTraveler = responses[3]
    console.log(allTrips)
    console.log(currentTraveler)
  })


}
window.addEventListener('load', initiateData)

