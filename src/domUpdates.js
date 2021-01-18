let domUpdates = {

welcomeUser(currentUser) {
  let firstName = currentUser.returnTravelerFirstName();
  let welcomeMsg = `<h2>Welcome Back, ${firstName}! </h2>`
  document.querySelector(".greeting-container").insertAdjacentHTML("afterbegin", welcomeMsg)
},

createTripCards(currentUser) {
  const cardDisplay = document.querySelector(".card-display")
  let cardHTML = `
  <article class="trip-card">
    <section class="destination-name-wrapper">
      <h2>${currentUser.destination}</h2>
    </section>
    <section class="image-wrapper">
      <img class='card-image image' src='${currentUser.image}' alt='${currentUser.alt}'></img>
    </section>  
    <section class="cost-wrapper">
      <p class='lodging-cost cost'>${currentUser.lodging}</p>
      <p class='flight-cost cost'>${currentUser.flights}</p>
    </section>
  </article>`
  cardDisplay.innerHTML = cardHTML;
}
  

}

export default domUpdates