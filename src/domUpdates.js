let domUpdates = {

  welcomeUser(currentUser) {
    let firstName = currentUser.returnTravelerFirstName();
    let welcomeMsg = `<h2>Welcome Back, ${firstName}! </h2>`
    document.querySelector(".greeting-container").insertAdjacentHTML("afterbegin", welcomeMsg)
  },

  createTripCards(trips) {
    let cardDisplay = document.querySelector(".card-display")
    cardDisplay.innerHTML = "";
    return trips.map(trip => {
      let cardHTML = `
    <article class="trip-card">
      <section class="destination-name-wrapper">
        <h2>${trip.name}</h2>
      </section>
      <section class="image-wrapper">
        <img class='card-image image' src='${trip.image}' alt='${trip.alt}'></img>
      </section>  
      <section class="cost-wrapper">
        <p class='status'>Trip Status:${trip.status}</p>
        <p class='lodging-cost cost'>Estimated Lodging Cost:${trip.lodging}</p>
        <p class='flight-cost cost'>Estimated Flight Cost:${trip.flights}</p>
      </section>
    </article>`
      document.querySelector(".card-display").insertAdjacentHTML("afterbegin", cardHTML)
    })
  },

  displayAmountSpentAYear(currentUser) {
    let costHTML = `<h3 class="year-cost">You've spent ${currentUser} on making memories this year.` 
    document.querySelector(".header-wrapper").insertAdjacentHTML("beforeend", costHTML)
  },

  displayDestinationOptions(destinations) {
    let options = destinations.map(destination => {
       return `<option id="${destination.id}" value="${destination}">${destination}</option>`
      })
    document.querySelector(".trip-dropdown").insertAdjacentHTML("afterbegin",options)
  },

  displayEstimatedTripCost(currentUser) {
    let estimatedCost = `<h3>${currentUser.costOfTripAndFee}</h3>`
    document.querySelector(".booking-form").insertAdjacentHTML("beforeend", estimatedCost)
  },

  clearInputs(input) {
    input.value = '';
  },

  hideLoginPage() {
    event.preventDefault()
    const loginPage = document.querySelector(".login-page")
    const welcomePage = document.querySelector(".welcome-page")
    loginPage.classList.add("hidden")
    welcomePage.classList.remove("hidden")
  },
}

export default domUpdates