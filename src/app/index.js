import "../styles.css";
import loadInitPage from "./initPageLoad.service.js";
import addEventListenerToElement from "./utils/addEventListenerToElement.js";
import makeAboutPage from "./aboutPage.service.js";
import loadMenuPage from "./menuPage.service.js";

loadInitPage();

(function () {
  const homeBtn = document.querySelector("header > nav > button:first-child");
  const menuBtn = document.querySelector("header > nav > button:nth-child(2)");
  const aboutBtn = document.querySelector("header > nav > button:last-child");

  addEventListenerToElement(homeBtn, loadInitPage);
  addEventListenerToElement(aboutBtn, makeAboutPage);
  addEventListenerToElement(menuBtn, loadMenuPage);
})();

// https://unsplash.com/photos/person-sitting-inside-restaurant-zlABb6Gke24?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink

// https://unsplash.com/photos/man-and-woman-sitting-on-chair-in-front-of-table-2PUwRmJOdNo?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink

// https://unsplash.com/photos/a-cup-of-coffee-sitting-on-top-of-a-wooden-table-PYW33YCKEEM?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink

// https://unsplash.com/photos/a-row-of-waffles-with-chocolate-drizzled-on-them-yPPZBUoVZAA?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink

// https://unsplash.com/photos/a-plate-of-food-and-a-cup-of-coffee-on-a-table-01MrF7iPwOo?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink

// https://unsplash.com/photos/orange-and-white-plastic-cup-with-white-straw-pdTpTjV48_w?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink
