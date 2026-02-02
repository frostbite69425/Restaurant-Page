import Element from "./elementClassController.js";
import stylePage from "./initPageStyleParser.service.js";

const makeInitPage = () => {
  const imageHolder = new Element("div", "image-holder");
  const image = new Element("img", "main-image");
  const headLine = new Element("div", "headline"); // moved to components
  const headLineH1 = new Element("h1", " "); // moved to components
  const intro = new Element("div", "hero-text");
  const heroParaOne = new Element("p", " ");
  const heroParaTwo = new Element("p", " ");
  const openHours = new Element("div", "open-hours");
  const openHoursPara = new Element("p", " ");
  const openHoursList = new Element("ul", " ");
  const openHoursListItemOne = new Element("li", " ");
  const openHoursListItemTwo = new Element("li", " ");
  const openHoursListItemThree = new Element("li", " ");
  const openHoursListItemFour = new Element("li", " ");
  const openHoursListItemFive = new Element("li", " ");
  const openHoursListItemSix = new Element("li", " ");

  Element.insertText(headLineH1, "Cosy Cafe");
  Element.insertText(
    heroParaOne,
    "Welcome to Cosy Cafe! Where we serve not only coffee and good vibes but also offer a cosy community that you can be a part of!",
  );
  Element.insertText(
    heroParaTwo,
    "In case you're new here, hi! Please have a look at the menu, relax and let us know what we can get you. If you're a returning customer, then shall we get you your usual?",
  );
  Element.insertText(openHoursPara, "Come give us a visit! We're open:");
  Element.insertText(openHoursListItemOne, "Monday: 10AM - 9PM");
  Element.insertText(openHoursListItemTwo, "Tuesday: 10AM - 9PM");
  Element.insertText(openHoursListItemThree, "Wednesday: 10AM - 9PM");
  Element.insertText(openHoursListItemFour, "Friday: 10AM - 9PM");
  Element.insertText(openHoursListItemFive, "Saturday: 10AM - 9PM");
  Element.insertText(openHoursListItemSix, "Sunday: 10AM - 9PM");

  Element.setRelationship(
    "#content",
    imageHolder.elementName,
    headLine.elementName,
    intro.elementName,
    openHours.elementName,
  );

  Element.setRelationship(".image-holder", image.elementName);

  Element.setRelationship(".headline", headLineH1.elementName);
  Element.setRelationship(
    ".hero-text",
    heroParaOne.elementName,
    heroParaTwo.elementName,
  );
  Element.setRelationship(
    ".open-hours",
    openHoursPara.elementName,
    openHoursList.elementName,
  );
  Element.setRelationship(
    ".open-hours > ul",
    openHoursListItemOne.elementName,
    openHoursListItemTwo.elementName,
    openHoursListItemThree.elementName,
    openHoursListItemFour.elementName,
    openHoursListItemFive.elementName,
  );

  const contentSelector = document.querySelector("#content");
  const content = {
    elementName: contentSelector,
  };
  stylePage([
    content,
    imageHolder,
    image,
    headLine,
    intro,
    openHours,
    openHoursList,
  ]);
};

export default makeInitPage;
