# Travel Tracker
Mod 2 Final Project

## Usage
This application is used to keep track of your travels - past, present and future. Upon pageload, the user is met with a login screen. After entering the correct username and password, the user can view their trips or book a new one from a list of destinations. If the user is happy with their booking decision and price, it is then sent to pending trips to await agents approval.

### Login Page
![Login Page](https://media.giphy.com/media/V5NpZNe82o6taMDiu7/giphy.gif)
### Current, Pending, Upcoming and Past Trips
![Trips View](https://media.giphy.com/media/P5PowQ27ITWkrbphMu/giphy.gif)
### Booking a Trip
![Booking View](https://media.giphy.com/media/7vnJGB0VQRuzxbxwx5/giphy.gif)


## Setup and Installation

1. `Fork` this repository
2. `git clone` into your command line
3. CD into repository on your local machine
4. Run `npm install`
5. `git clone` [Server API](https://github.com/turingschool-examples/travel-tracker-api)
6. Run npm install
7. Run `npm start` in both repos and navigate to localhost 8080 in your browser

OR visit the live site [here](https://rachelbuchta.github.io/travel-tracker-rb/)

## To Login

* Username: traveler + any number 1 - 50
* Password: traveler2020

## Technologies And Skills

This application is made using:
* Semantic HTML5, CSS3/ SCSS including media queries so that is can be viewed across a variety of screens.
* ES6 Javascript, classes and iterator methods.
* Webpack for bundling and production build.
* Mocha and Chai for TDD tests.

My main objective was:
* Seperating data model (using classes) and DOM - this is further achieved seperating things that update the dom in its own file.
* Implement working with an API to send and receive data.
* Implementing helper function to keep code clean and demonstrate DRYness and SRP.
* Using SCSS mixins, nesting, partial files and variables.
* Using atomic commits and creating branches that relect the current feature being worked on.
* Wrtiting a robust testing suite.
* Implementing strong user accessibilty and scoring 100 on lighthouse

## Future Iterations

Currently, there are no planned additions to Travel Tracker. But, I would love to go back and complete the agent login feature.

## Contributors

Project implementation by [Rachel Buchta](https://github.com/rachelbuchta)

Project created by Turing School staff.

Special thanks to our 2010FE cohort and instructors.
