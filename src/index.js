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
    greetUser(currentTraveler, tripInfo, allDestinations)
    })
}

function greetUser(currentTraveler, tripInfo, allDestinations) {
  currentUser = new Traveler(currentTraveler, tripInfo, allDestinations)
  domUpdates.welcomeUser(currentUser);
}






function createDestinationCard() {
        //   <div class="trip-card">
        //   <img class='card-image image' src='./assets/hiphop3.jpg' alt='taylor swift'>
        //   <div class="image-wrapper">
        //     <img class="nav-icons share-image" src='./assets/next.svg' alt='share-icon'>
        //     <div class="view-wrapper">
        //       <p class='views view-count'>VIEWS</p>
        //       <p class='count view-count'>02</p>
        //     </div>
        //   </div>
        //   <section class='information'>
        //     <h2 class='name'>Recipeint's Namehere</h2>
        //       <p class='date'>Monday 01/23/16 10:22am</p>
        //     <p class='sitelink'>"https://2win.2winstag.com/p/reci-pients_namehere"</p>
        //     <h3>PLAYLIST</h3>
        //       <h2 class='playlist-name'>Hip Hop</h2>
        //     <h3 class='attachments'>ATTACHMENTS</h3>
        //       <p class='number'>04</p>
        //   </section>
        // </div>
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

