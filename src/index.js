//files
import Traveler from './traveler.js'
import Trip from './trip.js'
import Destination from './destination.js'
import fetchCalls from './apiCalls'
import './css/base.scss';

//images
import './images/image.png';
import domUpdates from './domUpdates.js';
// import './images/search.png';

//globalVariables
let currentTraveler;
let allTrips = []
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
const currentTripsBtn = document.querySelector(".current-trips-btn");
const pendingTripsBtn = document.querySelector(".pending-trips-btn")
const upcomingTripsBtn = document.querySelector(".upcoming-trips-btn")
const pastTripsBtn = document.querySelector(".past-trips-btn")


//eventListeners
window.addEventListener('load', getData)
loginButton.addEventListener("click", hideLoginPage)
myTripsBtn.addEventListener('click', hideMainPage)
backToMain.addEventListener('click', goBackToMain)
bookButton.addEventListener('click', bookATrip)
backToMainBook.addEventListener('click', backToMainFromBook)
currentTripsBtn.addEventListener('click', getCurrentTrips)
// pendingTripsBtn.addEventListener('click', displayPendingCards)
upcomingTripsBtn.addEventListener('click', getUpcomingTrips)
pastTripsBtn.addEventListener('click', getPastTrips)



function getData() {
 travelerData = fetchCalls.getTraveler(9) 
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
    greetUser(currentTraveler, tripInfo, allDestinations)
    })
}

function greetUser(currentTraveler, tripInfo, allDestinations) {
  currentUser = new Traveler(currentTraveler, tripInfo, allDestinations)
 domUpdates.welcomeUser(currentUser);
 getCostSpentOverAYear(currentUser)
}

function formatTravelCard(trips) {
let returnedCurrent = trips.map(trip => {
  const destination = trip.destination
  const tripCard = 
  // [destination.destination, destination.image, destination.alt, destination.estimatedLodgingCostPerDay, destination.estimatedFlightCostPerPerson]
  {
    name: destination.destination,
    image: destination.image,
    alt: destination.alt,
    lodging: destination.estimatedLodgingCostPerDay,
    flights: destination.estimatedFlightCostPerPerson
    }
  return tripCard
})
return returnedCurrent
}

function getCurrentTrips() {
let currentTrips = currentUser.findCurrentTrips();
console.log("current",currentTrips)
displayCurrentCards(formatTravelCard(currentTrips));
}

function getPastTrips() {
let pastTrips = currentUser.findPastTrips();
const formatedTrips = formatTravelCard(pastTrips)
const test2 = displayCurrentCards(formatedTrips)
console.log(test2)
}

function getUpcomingTrips() {
let upComingTrips = currentUser.findUpcomingTrips();
console.log("upcoming",upComingTrips)
displayCurrentCards(formatTravelCard(upComingTrips));
}

// function displayCurrentCards(trips) {
//   console.log("display",trips)
//  const test = trips.map(trip => {
//    console.log(trip[trip])
//     const hey = domUpdates.createTripCards(trip)
//     return hey
//   })
//   return test
//   console.log(number)
// }

function displayCurrentCards(trips) {
  console.log("display",trips)
 const test = trips.map(trip => {
   console.log(trip)

    const hey = domUpdates.createTripCards(trip)
 
  })
  return test
  console.log(number)
}

function getCostSpentOverAYear() {
   let cost = currentUser.calculateTotalSpentOnTrips(2020).toLocaleString("en-US", {style: "currency", currency: "USD"});
   domUpdates.displayAmountSpentAYear(cost)
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

