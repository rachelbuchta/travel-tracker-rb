//files
import Traveler from './traveler.js'
import Trip from './trip.js'
import Destination from './destination.js'
import fetchCalls from './apiCalls'
import './css/base.scss';
import domUpdates from './domUpdates.js';

//images
import './images/image.png';
import './images/man.jpg'
import './images/globe.svg'
import './images/curve-arrow.svg'

//globalVariables
let currentTraveler;
let userName;
let currentUserID;
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
let bookingObject; 

//querySelectors
// const loginButton = document.querySelector(".login-button")
const loginForm = document.querySelector(".login-form")
const loginPage = document.querySelector(".login-page")
const welcomePage = document.querySelector(".welcome-page")
const myTripsBtn = document.querySelector(".my-trips-btn")
const bookButton = document.querySelector(".book-trip")
const myTripsPage = document.querySelector(".my-trips")
const backToMain = document.querySelector(".back-to-main")
const backToMainBook = document.querySelector(".back-to-main-book")
const bookingPage = document.querySelector(".book-trip-page")
const currentTripsBtn = document.querySelector(".current-trips-btn");
const pendingTripsBtn = document.querySelector(".pending-trips-btn")
const upcomingTripsBtn = document.querySelector(".upcoming-trips-btn")
const pastTripsBtn = document.querySelector(".past-trips-btn")
const destinationInput = document.querySelector(".trip-dropdown")
const startDate = document.querySelector("#calendar")
const durationInput = document.querySelector("#duration")
const numberOfTravelers = document.querySelector("#numtravelers")
// const bookingForm = document.querySelector(".booking-form")
const submitBookingForm = document.querySelector(".booking-form")
const userLoginInput = document.querySelector("#username")
const userPasswordInput = document.querySelector("#pwd")
const confirmButton = document.querySelector(".confirm-button")
const confirmMessage = document.querySelector(".confirm-message")


//eventListeners
myTripsBtn.addEventListener('click', hideMainPage)
backToMain.addEventListener('click', goBackToMain)
bookButton.addEventListener('click', bookATrip)
backToMainBook.addEventListener('click', backToMainFromBook)
currentTripsBtn.addEventListener('click', getCurrentTrips)
pendingTripsBtn.addEventListener('click', getPendingTrips)
upcomingTripsBtn.addEventListener('click', getUpcomingTrips)
pastTripsBtn.addEventListener('click', getPastTrips)
submitBookingForm.addEventListener('submit', displayModal)
loginForm.addEventListener('submit', userLogin)
confirmButton.addEventListener('click', confirmBooking)




function getData(id) {
  travelerData = fetchCalls.getTraveler(id) 
  destinationData = fetchCalls.getDestinations()
  tripData = fetchCalls.getTrips() 
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

function userLogin(event) {
   userName = parseInt(userLoginInput.value.split('').splice(8,3).join(''));
  event.preventDefault()
  if (userPasswordInput.value !== "traveler2020") {
    alert("Wrong password, try again")
    domUpdates.clearInputs(userPasswordInput)
  }
  if (userPasswordInput.value === "traveler2020") {
    getData(userName)
    domUpdates.hideLoginPage()
  }
}

function greetUser(currentTraveler, tripInfo, allDestinations) {
  currentUser = new Traveler(currentTraveler, tripInfo, allDestinations)
  domUpdates.welcomeUser(currentUser);
  getCostSpentOverAYear(currentUser)
  displayTripDropDown()
}

function formatTravelCard(trips) {
  let returnedCurrent = trips.map(trip => {
    const destination = trip.destination
    const tripCard = {
      name: destination.destination,
      image: destination.image,
      alt: destination.alt,
      status: trip.status,
      lodging: destination.estimatedLodgingCostPerDay,
      flights: destination.estimatedFlightCostPerPerson
    }
    return tripCard
  })
  return returnedCurrent
}

function findDestination() {
  const destinationRequest = allDestinations.destinations.find(destination => {
    if (destinationInput.value === destination.destination) {
      return destination.id
    }
  })
  console.log(destinationRequest.id)
  return destinationRequest.id
}

function displayModal(event) {
  event.preventDefault()
  buildTripObject()
  confirmMessage.classList.remove("hidden")
  
  // domUpdates.displayEstimatedCost()
  domUpdates.clearInputs(destinationInput)
  domUpdates.clearInputs(startDate)
  domUpdates.clearInputs(durationInput)
  domUpdates.clearInputs(numberOfTravelers)
  confirmMessage.classList.remove("hidden")
  // bookingPage.classList.add("hidden")
}

// function postData(event, bookingObject) {
//   event.preventDefault()
 
//   fetchCalls.postTrip(bookingObject)
//   domUpdates.clearInputs(destinationInput)
//   domUpdates.clearInputs(startDate)
//   domUpdates.clearInputs(durationInput)
//   domUpdates.clearInputs(numberOfTravelers)
// }


function confirmBooking(event) {
  event.preventDefault()
  console.log(bookingObject)
  fetchCalls.postTrip(bookingObject)
    .then(getData(userName))
    .then(showTripsPage)
  }

function showTripsPage() {
  myTripsPage.classList.remove("hidden")
  bookingPage.classList.add("hidden")
  confirmMessage.classList.add("hidden")
}








// function findDestinationCost() {
// const test = findDestination()
// console.log(test)
// const please = currentUser.trips.filter(trip => {
//   console.log(test)
//   return trip.destinationID === test
// console.log(trip.destinationID)
// })

// console.log(please)
// return please

// }



 function buildTripObject() {
     bookingObject = {
      id: Number(Date.now()),
      userID: currentUser.id,
      destinationID: findDestination(allDestinations),
      travelers: parseInt(numberOfTravelers.value),
      date: startDate.value.split("-").join("/"),
      duration: parseInt(durationInput.value),
      status: "pending",
      suggestedActivities: []
    }
    // return bookingObject
  }

  function displayTripDropDown() {
    const alphabetically = allDestinations.destinations.map(destination => {
      let destinationName = destination.destination
      return destinationName
      })
    return domUpdates.displayDestinationOptions(alphabetically.sort())
  }

function getCurrentTrips() {
  let currentTrips = currentUser.findCurrentTrips();
  displayCurrentCards(formatTravelCard(currentTrips));
}

function getPastTrips() {
  let pastTrips = currentUser.findPastTrips();
  displayCurrentCards(formatTravelCard(pastTrips));
}

function getUpcomingTrips() {
  let upComingTrips = currentUser.findUpcomingTrips();
  displayCurrentCards(formatTravelCard(upComingTrips));
}

function getPendingTrips() {
  let pendingTrips = currentUser.filterByStatus("pending")
  displayCurrentCards(formatTravelCard(pendingTrips));
}

function displayCurrentCards(trips) {
  domUpdates.createTripCards(trips)
}

function getCostSpentOverAYear() {
  let cost = currentUser.calculateTotalSpentOnTrips(2020).toLocaleString("en-US", {style: "currency", currency: "USD"});
  domUpdates.displayAmountSpentAYear(cost)
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

