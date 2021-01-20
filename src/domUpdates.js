/* eslint-disable max-len */
let domUpdates = {

  welcomeUser(currentUser) {
    let greetingMessage = document.querySelector(".greeting-container");
    let firstName = currentUser.returnTravelerFirstName();
    greetingMessage.innerHTML = "";
    let welcomeMsg = `<h2>Welcome Back, ${firstName}! </h2>`
    greetingMessage.insertAdjacentHTML("afterbegin", welcomeMsg);
  },

  createTripCards(trips) {
    let cardDisplay = document.querySelector(".card-display");
    cardDisplay.innerHTML = "";
    return trips.map(trip => {
      let cardHTML = `
    <article class="trip-card">
      <section class="destination-name-wrapper">
        <h2>${trip.name}</h2>
      </section>
      <section class="image-wrapper">
        <img class="card-image image" src="${trip.image}" alt="${trip.alt}"></img>
      </section>  
      <section class="cost-wrapper">
        <p class="status">Trip Status:${trip.status}</p>
        <p class="lodging-cost cost">Estimated Lodging Cost:${trip.lodging}</p>
        <p class="flight-cost cost">Estimated Flight Cost:${trip.flights}</p>
      </section>
    </article>`
      document.querySelector(".card-display").insertAdjacentHTML("afterbegin", cardHTML);
    });
  },

  displayAmountSpentAYear(currentUser) {
    let yearlyDisplay = document.querySelector(".header-wrapper");
    yearlyDisplay.innerHTML = "";
    let costHTML = `<h3 class="year-cost">You"ve spent ${currentUser} on making memories this year.` 
    yearlyDisplay.insertAdjacentHTML("beforeend", costHTML);
  },

  displayDestinationOptions(destinations) {
    let options = destinations.map(destination => {
      return `<option id="${destination.id}" value="${destination}">${destination}</option>`
    });
    document.querySelector(".trip-dropdown").insertAdjacentHTML("afterbegin",options);
  },

  displayEstimatedTripCost(currentUser) {
    let costDisplay = document.querySelector(".booking-form");
    costDisplay.innerHTML = "";
    let estimatedCost = `<h3>${currentUser.costOfTripAndFee}</h3>`
    costDisplay.insertAdjacentHTML("beforeend", estimatedCost);
  },

  clearInputs(input) {
    input.value = "";
  },

  hideLoginPage() {
    event.preventDefault();
    const loginPage = document.querySelector(".login-page");
    const welcomePage = document.querySelector(".welcome-page");
    loginPage.classList.add("hidden");
    welcomePage.classList.remove("hidden");
  },

  displayCost(bookingObject) {
    const costDisplay = document.querySelector(".cost");
    costDisplay.innerHTML = `This trip will cost ${bookingObject.cost}, and includes a 10% agent fee. Would you like to proceed?`
  }
}

export default domUpdates;