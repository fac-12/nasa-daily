### **NASA Daily** 
![](https://api.travis-ci.org/fac-12/nasa-daily.svg?branch=master)

A website which allows the user to recieve daily pictures from space :alien: :full_moon: :rocket:

By Kitty, Dragomir, Sophie and Jamie.

View the live site [here](https://nasadaily.herokuapp.com/).

**How to install locally:**
1. [Clone this repo](http://github.com/fac-12/nasa-daily)
2. run `npm i` in your terminal
3. run `npm start` in your terminal to start our server
4. Open https://localhost:8000 in your browser

**How to run tests:**
1. Once you've cloned the repo, run `npm test`



Create a website that will include user input and a feed, with the content sourced via the [NASA API](https://api.nasa.gov/).



### **User stories:**

**Example User Stories:**

'As a student at F&C I want to know all the train departure times from Bethnal Green tube station, so that I can get home in time for dinner'.

'As a regular commuter, I want to input which direction of travel I am interested in so that I can see information that is relevant to me.'

**Our user story**:

> As a space enthusiast, I'd like to be able to see an image from space on any date (from 1995 to today) along with some information about that topic.  


### **WHY**

Because space pictures are cool, innit.


### **HOW**

#### VIA THE NASA API

We used the NASA Api which provides daily images from space from any date (back to 1995.) It gives us this object back:

![](https://i.imgur.com/cml6OsD.png)

#### WITH THE INPUT FIELD

We used JavaScript `Date` object to allow the user to input a search date.

[More information on this here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)

### Our project had to match the following criteria:

- [x] Use at least 1 API

- [x] Make your API calls from the back-end using the Request module (or one you build yourself)

- [x] Your server should contain a minimum of 2 routes

- [x] We expect back-end testing using tape (test as many components as you can) and basic front-end testing.

- [x] Test your server by injecting fake HTTP requests using Shot.

- [x] Host your project on heroku, see resources

- [x] Use module.exports and require to break a single large server file into smaller modules.

- [x] Consider a good server file structure based on what we have discussed over the week.

- [x] Employ continuous integration on your project with Travis or a similar tool. (If you decide to use Travis, we strongly recommend that you host this project in your own repo rather than in your cohort's FAC repository to avoid all builds getting queued together)

- [x] Use CodeCov or a similar tool for test coverage. (We used Istanbul)

- [ ] Display continuous intergration and code coverage badges on your project README.

- [ ] Ensure that errors are handled, if for example a user attempts to make a request to a non-existent route to your server, provide the user with a custom response. ()

- [ ] Include a user input field on your web app and include server-side validation to protect your server from potentially malicious user input.
