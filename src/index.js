//files
import Traveler from './traveler.js'
import Trip from './trip.js'
import Destination from './destination.js'
import fetchCalls from './apiCalls'
import './css/base.scss';

//images
import './images/image.png';
// import './images/search.png';

//global variables
let currentTraveler;
let allTrips;
let allDestinations;
let allTravelers;

//querySelectors
const loginButton = document.querySelector(".login-button")
const loginPage = document.querySelector(".login-page")
const welcomePage = document.querySelector(".welcome-page")
const myTripsBtn = document.querySelector(".my-trips-btn")
const bookButton = document.querySelector(".book-trip")
const myTripsPage = document.querySelector(".my-trips")
const backToMain = document.querySelector(".back-to-main")
const bookingPage = document.querySelector(".book-trip-page")
const submitBookingBtn = document.querySelector(".booking-button")








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

