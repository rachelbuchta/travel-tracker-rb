/* eslint-disable max-len */
import Traveler from "./traveler.js";
import fetchCalls from "./apiCalls";
import "./css/base.scss";
import domUpdates from "./domUpdates.js";

//images
import "./images/image.png";
import "./images/man.jpg";
import "./images/globe.svg";
import "./images/curve-arrow.svg";

//globalVariables
let currentTraveler;
let userName;
let allDestinations;
let currentUser;
let tripInfo;
let travelerData;
let tripData;
let destinationData;
let bookingObject; 

//querySelectors
const loginForm = document.querySelector(".login-form");
const welcomePage = document.querySelector(".welcome-page");
const myTripsBtn = document.querySelector(".my-trips-btn");
const bookButton = document.querySelector(".book-trip");
const myTripsPage = document.querySelector(".my-trips");
const backToMain = document.querySelector(".back-to-main");
const backToMainBook = document.querySelector(".back-to-main-book");
const bookingPage = document.querySelector(".book-trip-page");
const currentTripsBtn = document.querySelector(".current-trips-btn");
const pendingTripsBtn = document.querySelector(".pending-trips-btn");
const upcomingTripsBtn = document.querySelector(".upcoming-trips-btn");
const pastTripsBtn = document.querySelector(".past-trips-btn");
const destinationInput = document.querySelector(".trip-dropdown");
const startDate = document.querySelector("#calendar");
const durationInput = document.querySelector("#duration");
const numberOfTravelers = document.querySelector("#numtravelers");
const submitBookingForm = document.querySelector(".booking-form");
const userLoginInput = document.querySelector("#username");
const userPasswordInput = document.querySelector("#pwd");
const confirmButton = document.querySelector(".confirm-button");
const confirmMessage = document.querySelector(".confirm-message");
const cancelButton = document.querySelector(".cancel-button")

//eventListeners
myTripsBtn.addEventListener("click", hideMainPage);
backToMain.addEventListener("click", goBackToMain);
bookButton.addEventListener("click", bookATrip);
backToMainBook.addEventListener("click", backToMainFromBook);
currentTripsBtn.addEventListener("click", getCurrentTrips);
pendingTripsBtn.addEventListener("click", getPendingTrips);
upcomingTripsBtn.addEventListener("click", getUpcomingTrips);
pastTripsBtn.addEventListener("click", getPastTrips);
submitBookingForm.addEventListener("submit", displayModal);
loginForm.addEventListener("submit", userLogin);
confirmButton.addEventListener("click", confirmBooking);
cancelButton.addEventListener("click", cancelRequest)

function getData(id) {
  travelerData = fetchCalls.getTraveler(id);
  destinationData = fetchCalls.getDestinations();
  tripData = fetchCalls.getTrips();
  initiateData();
}

function initiateData() {
  return Promise.all([travelerData, destinationData, tripData])
    .then(responses => {
      currentTraveler = responses[0];
      allDestinations = responses[1].destinations;
      tripInfo = responses[2].trips;
      greetUser(currentTraveler, tripInfo, allDestinations);
    })
}

function userLogin(event) {
  userName = parseInt(userLoginInput.value.split("").splice(8,3).join(""));
  event.preventDefault();
  if (userPasswordInput.value !== "traveler2020") {
    alert("Wrong password, try again");
    domUpdates.clearInputs(userPasswordInput);
  }
  if (userPasswordInput.value === "traveler2020") {
    getData(userName);
    domUpdates.hideLoginPage();
  }
}

function greetUser(currentTraveler, tripInfo, allDestinations) {
  currentUser = new Traveler(currentTraveler, tripInfo, allDestinations);
  domUpdates.welcomeUser(currentUser);
  getCostSpentOverAYear(currentUser);
  displayTripDropDown();
}

function formatTravelCard(trips) {
  let returnedCurrent = trips.map(trip => {
    const destination = trip.destination;
    const tripCard = {
      name: destination.destination,
      image: destination.image,
      alt: destination.alt,
      status: trip.status,
      lodging: destination.estimatedLodgingCostPerDay,
      flights: destination.estimatedFlightCostPerPerson
    }
    return tripCard;
  })
  return returnedCurrent;
}

function findDestination() {
  const destinationRequest = allDestinations.find(destination => {
    if (destinationInput.value === destination.destination) {
      return destination.id;
    }
  });
  return destinationRequest.id;
}

function displayModal(event) {
  event.preventDefault();
  // debugger
  buildTripObject();
  clearBookingInputs();
  submitBookingForm.classList.add("hidden");
  confirmMessage.classList.remove("hidden");
  domUpdates.displayCost(bookingObject);
}

function clearBookingInputs() {
  domUpdates.clearInputs(destinationInput);
  domUpdates.clearInputs(startDate);
  domUpdates.clearInputs(durationInput);
  domUpdates.clearInputs(numberOfTravelers);
}

function cancelRequest() {
  alert("You have cancelled your trip request.")
  confirmMessage.classList.add("hidden");
  submitBookingForm.classList.remove("hidden");
}

function confirmBooking(event) {
  event.preventDefault();
  fetchCalls.postTrip(bookingObject)
    .then(alert(`Congrats! Your trip is booked! You will see this booking in your pending trips.`))
    .then(domUpdates.clearCardDisplay())
    .then(showTripsPage())
    .then(getData(userName))
}

function showTripsPage() {
  domUpdates.clearCardDisplay();
  bookingPage.classList.add("hidden");
  confirmMessage.classList.add("hidden");
  myTripsPage.classList.remove("hidden");
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
    suggestedActivities: [],
    cost: getEstimatedTripCost(numberOfTravelers.value, durationInput.value)
  }
  clearBookingInputs()
}

function getEstimatedTripCost(numberOfTravelers, duration) {
  const currentDestinationCost = allDestinations.reduce((sum, destination) => {
    if (destinationInput.value === destination.destination) {
      const flights = destination.estimatedFlightCostPerPerson * numberOfTravelers;
      const lodging = destination.estimatedLodgingCostPerDay * duration;
      const agentFee = ((flights + lodging) * .01);
      sum += flights + lodging + agentFee;
    }
    return sum;
  }, 0);
  return currentDestinationCost.toLocaleString("en-US", {style: "currency", currency: "USD"});
}

function displayTripDropDown() {
  const alphabetically = allDestinations.map(destination => {
    let destinationName = destination.destination;
    return destinationName;
  })
  return domUpdates.displayDestinationOptions(alphabetically.sort());
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
  let pendingTrips = currentUser.filterByStatus("pending");
  displayCurrentCards(formatTravelCard(pendingTrips));
}

function displayCurrentCards(trips) {
  domUpdates.createTripCards(trips);
}

function getCostSpentOverAYear() {
  let cost = currentUser.calculateTotalSpentOnTrips(2020).toLocaleString("en-US", {style: "currency", currency: "USD"});
  domUpdates.displayAmountSpentAYear(cost);
}

function hideMainPage() {
  domUpdates.clearCardDisplay();
  welcomePage.classList.add("hidden");
  myTripsPage.classList.remove("hidden");
}

function goBackToMain() {
  welcomePage.classList.remove("hidden");
  myTripsPage.classList.add("hidden");
}

function bookATrip() {
  welcomePage.classList.add("hidden");
  bookingPage.classList.remove("hidden");
  submitBookingForm.classList.remove("hidden");
}

function backToMainFromBook() {
  welcomePage.classList.remove("hidden");
  bookingPage.classList.add("hidden");
}

