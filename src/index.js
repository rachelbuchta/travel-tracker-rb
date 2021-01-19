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
const submitBookingBtn = document.querySelector(".booking-button")
const userLoginInput = document.querySelector("#username")
const userPasswordInput = document.querySelector("#pwd")



//eventListeners
myTripsBtn.addEventListener('click', hideMainPage)
backToMain.addEventListener('click', goBackToMain)
bookButton.addEventListener('click', bookATrip)
backToMainBook.addEventListener('click', backToMainFromBook)
currentTripsBtn.addEventListener('click', getCurrentTrips)
pendingTripsBtn.addEventListener('click', getPendingTrips)
upcomingTripsBtn.addEventListener('click', getUpcomingTrips)
pastTripsBtn.addEventListener('click', getPastTrips)
submitBookingBtn.addEventListener('click', postData)
loginForm.addEventListener('submit', userLogin)

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
    // .then(()=> {
      
    // })

    
  
}

function userLogin(event) {
  let userName = parseInt(userLoginInput.value.split('').splice(8,3).join(''));
  event.preventDefault()
  if (userPasswordInput.value !== "traveler2020") {
    alert("Wrong password, try again")
    clearInputs(userPasswordInput)
  }
  if (userPasswordInput.value === "traveler2020") {
    getData(userName)
    hideLoginPage()
  }
}
  


function clearInputs(input) {
  input.value = '';
 
}

function greetUser(currentTraveler, tripInfo, allDestinations) {
  currentUser = new Traveler(currentTraveler, tripInfo, allDestinations)
  domUpdates.welcomeUser(currentUser);
  getCostSpentOverAYear(currentUser)
  addDestinationOptions()
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


function displayEstimatedCost(event) {
  event.preventDefault()
  // console.log(findDestination())
  // console.log(findDestinationCost(findDestination()))
  // console.log(tripInfo.trips)
  // console.log(allDestinations.destinations)
  //  let test = tripInfo.trips.forEach(trip => {
  
  //     allDestinations.destinations.forEach(destination => {
  //       trip = new Trip(trip, allDestinations)
  //           // console.log(trip)
  //           console.log("input",destinationInput.value)
  //           console.log("destinationID",trip.destinationID)
  //       if (destinationInput.value === destination.destination) {
  //         // console.log(trip)
  //         // console.log(destination)
      
  //         console.log(trip.costOfTripAndFee())
  //       }
  //     })
  //  })
}

      
    
  //   console.log(test)
  // return test


function postData(bookingObject) {
  event.preventDefault()
  // console.log(currentUser.trips)
  bookingObject = buildTripObject()
  // console.log(bookingObject.destinationID)
  // const destID = findDestinationCost(bookingObject.destinationID)
  // console.log(destID)
  fetchCalls.postTrip(bookingObject)
  findDestinationCost()
  // displayEstimatedCost(event)
  // const test = domUpdates.displayEstimatedTripCost(currentUser)
  // console.log(test)
}

function findDestinationCost() {

// const trip = currentUser.trips.find(trip => trip.destinationID === id)
const test = findDestination()
console.log(test)
const please = currentUser.trips.filter(trip => {
  console.log(test)
  return trip.destinationID === test
console.log(trip.destinationID)
})

console.log(please)
return please
// console.log(trip.costOfTripAndFee())
}

function findDestination() {
  const test = allDestinations.destinations.find(destination => {
    if (destinationInput.value === destination.destination) {
      return destination.id
    }
  })
  console.log(test.id)
  // findDestinationCost()
  return test.id
}

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
    return bookingObject
  }

  function sortDestinationsAlphabetically() {
    const alphabetically = allDestinations.destinations.map(destination => {
      let destinationName = destination.destination
      return destinationName
      })
    return alphabetically.sort()
  }

  function addDestinationOptions() {
     let options = sortDestinationsAlphabetically().map(destination => {
       return `<option id="${destination.id}" value="${destination}">${destination}</option>`
      })
    document.querySelector(".trip-dropdown").insertAdjacentHTML("afterbegin",options)
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

