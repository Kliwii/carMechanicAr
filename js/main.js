
const tooltips = document.getElementsByClassName("tooltip");
const buttonBack = document.getElementById("buttonBack");
const buttonBackMore = document.getElementById("buttonBackMore");
const buttonMoreInformation = document.getElementById("buttonMoreInformation");
const interactionIndicator = document.getElementById("interactionIndicator");
const interactionIndicatorDashboard = document.getElementsByClassName("interactionIndicator");
const scanIndicatorOil = document.getElementById("scanIndicatorOil");
const recordButton = document.getElementById("recordButton");
const recordMore = document.getElementById("recordMore");
const buttonDisabled = document.getElementById("buttonDisabled");

//Feather Icons
feather.replace()

//GSAP
//Set Timelines and Set Initial State
var tl = gsap.timeline();
var tlMore = gsap.timeline();
var tlRecord = gsap.timeline();
gsap.set(".headerInformation, .headerMoreInformation, .recordMore", {display: "none", opacity: "0"});
gsap.set(buttonDisabled, {opacity: "0.5"});

//Animation
//Open Drop Down 
function openNav() {
  tl.to(".header", {duration: 0.8, height: "80vh", ease: "power3"});
  tl.to(".instructions", {duration: 0.4, opacity: 0, display: "none"}, "-=0.8");
  tl.to(".headerInformation", {duration: 0.4, opacity: 1, display: "block"}, "-=0.4");
  tl.to(".buttonPrevious", {duration: 0.4, opacity: 0, display: "none"}, "-=0.8")
  tl.to(".pagination", {duration: 0.4, opacity: 0, display: "none"}, "-=0.8")
  tl.play();
}

//Close Drop Down
function closeNav() {
  tl.reverse();
}

//Show more Information in the header
function moreInformation() {
  tlMore.to(".headerInformation", {duration: 0.4, opacity: 0, display: "none"});
  tlMore.to(".headerMoreInformation", {duration: 0.4, opacity: 1, display: "block"});
  tlMore.play();
}

//Pulsing Interaction Indicator
gsap.from("#interactionIndicator", 1.4, {scale: 1.1, repeat: -1, ease: "back"});

//Event Listener
//Tooltips (Instructions Screen)
for (let i = 0; i < tooltips.length; i++) {
  tooltips[i].addEventListener("click", function() {
    openNav();
  });
}

//Dashboard Interaction Indicators
for (let i = 0; i < interactionIndicatorDashboard.length; i++) {
  interactionIndicatorDashboard[i].addEventListener("click", function() {
    openNav();
  });
}

//Scan Indicator Oil
if (scanIndicatorOil) {
  scanIndicatorOil.addEventListener("click", function(){
    openNav();
  });
}

//Drop Down Back Button
if (buttonBack) {
  buttonBack.addEventListener("click", function(){
    closeNav();
  });
}

//Drop Down Back Button (Second Screen)
if (buttonBackMore) {
  buttonBackMore.addEventListener("click", function(){
    tlMore.reverse();
  });
}

//Interaction Indicator
if (interactionIndicator) {
  interactionIndicator.addEventListener("click", function(){
    openNav();
  });
}

//More Information (Drop Down Second Screen)
if (buttonMoreInformation) {
  buttonMoreInformation.addEventListener("click", function(){
    moreInformation();
  });
}

//Record Button 
tlRecord.to(".recordButton", {duration: 0.4, boxShadow: "0px 0px 5px 0px rgba(255,209,100,1)"});
tlRecord.to(".recordButton", {duration: 0.4, boxShadow: "0px 0px 5px 20px rgba(255,209,100,1)"});
tlRecord.to(".recordButton", {duration: 0.4, boxShadow: "0px 0px 5px 20px rgba(255,209,100,0)"});
tlRecord.repeat(-1);
tlRecord.pause();

if (recordButton) {
  recordButton.addEventListener("click", function(){
    recordButton.classList.toggle("paused");
    if (recordButton.classList.contains("paused")) {
      tlRecord.play();
      gsap.to(recordMore, {duration: 0.4, display: "none", opacity: 0})
      gsap.to(buttonDisabled, {duration: 0.4, opacity: 0.5})
    } else {
      tlRecord.pause("atTime: 0");
      gsap.to(recordMore, {duration: 0.4, display: "block", opacity: 1})
      gsap.to(buttonDisabled, {duration: 0.4, opacity: 1})
    }     
  });
}