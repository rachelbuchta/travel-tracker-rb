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
let currentUser;
let tripInfo;
let userTrips;
 let travelerData
 let tripData 
 let destinationData
 let allTravelerData 

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
window.addEventListener('load', getData)
loginButton.addEventListener("click", hideLoginPage)
myTripsBtn.addEventListener('click', hideMainPage)
backToMain.addEventListener('click', goBackToMain)
bookButton.addEventListener('click', bookATrip)
backToMainBook.addEventListener('click', backToMainFromBook)

function getData() {
 travelerData = fetchCalls.getTraveler(1) 
 tripData = fetchCalls.getTrips() 
 destinationData = fetchCalls.getDestinations()
 allTravelerData = fetchCalls.getAllTravelers()
 initiateData()
}

function initiateData() {
  return Promise.all([travelerData, destinationData, tripData])
  .then(responses => {
    currentTraveler = responses[0];
    allDestinations = responses[1];
    tripInfo = responses[2];
    const test = tripInfo.map(trip => {
      userTrips = new Trip(trip)
      allTrips.push(userTrips)
    })
    return test
    console.log(tripInfo)
    
    
    // greetUser()
  })
  
}

// const travelerProfile() {
//   currentTraveler = new Traveler()
// }
// build page - traveler profile and display trips - create traveker profile -instantiaite traveler
//display trips - 
// traveler - instantate it there
function greetUser(currentTraveler, allTrips, allDestinations) {

  currentUser = new Traveler(currentTraveler, allTrips, allDestinations)
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

