//files
import Traveler from './traveler.js'
import Trip from './trip.js'
import Destination from './destination.js'
import fetchCalls from './apiCalls'
import './css/base.scss';

//images
import './images/image.png';
// import './images/search.png';

//globalVariables
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
const backToMainBook = document.querySelector(".back-to-main-book")
const bookingPage = document.querySelector(".book-trip-page")
const submitBookingBtn = document.querySelector(".booking-button")

//eventListeners
window.addEventListener('load', initiateData)
loginButton.addEventListener("click", hideLoginPage)
myTripsBtn.addEventListener('click', hideMainPage)
backToMain.addEventListener('click', goBackToMain)
bookButton.addEventListener('click', bookATrip)
backToMainBook.addEventListener('click', backToMainFromBook)

function initiateData() {
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

function hideLoginPage() {
  event.preventDefault()
  loginPage.classList.add("hidden")
  welcomePage.classList.remove("hidden")
  
}

function hideMainPage() {
  welcomePage.classList.add("hidden")
  myTripsPage.classList.remove("hidden")
}

function goBackToMain() {
  welcomePage.classList.remove("hidden")
  myTripsPage.classList.add("hidden")
}

function bookATrip() {
  welcomePage.classList.add("hidden")
  bookingPage.classList.remove("hidden")
}

function backToMainFromBook() {
  welcomePage.classList.remove("hidden")
  bookingPage.classList.add("hidden")
}

