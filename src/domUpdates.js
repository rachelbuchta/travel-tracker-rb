let domUpdates = {

welcomeUser(currentUser) {
  let firstName = currentUser.returnTravelerFirstName();
  let welcomeMsg = `<h2>Welcome Back, ${firstName}! </h2>`
  document.querySelector(".greeting-container").insertAdjacentHTML("afterbegin", welcomeMsg)
}
  

}

export default domUpdates