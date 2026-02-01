import insertTextIntoElement from "./utils/insertTextIntoElement.js";
import initDomPopulator from "./initDomPopulator.service.js";

export default () => {
  const [
    imageHolder,
    headLine,
    headLineH1,
    intro,
    heroParaOne,
    heroParaTwo,
    openHours,
    openHoursPara,
    openHoursList,
    openHoursListItemOne,
    openHoursListItemTwo,
    openHoursListItemThree,
    openHoursListItemFour,
    openHoursListItemFive,
    openHoursListItemSix,
  ] = initDomPopulator();

  insertTextIntoElement(headLineH1, "Cosy Cafe");
  insertTextIntoElement(
    heroParaOne,
    "Welcome to Cosy Cafe! Where we serve not only coffee and good vibes but also offer a cosy community that you can be a part of!",
  );
  insertTextIntoElement(
    heroParaTwo,
    "In case you're new here, hi! Please have a look at the menu, relax and let us know what we can get you. If you're a returning customer, then shall we get you your usual?",
  );
  insertTextIntoElement(openHoursPara, "Come give us a visit! We're open:");
  insertTextIntoElement(openHoursListItemOne, "Monday: 10AM - 9PM");
  insertTextIntoElement(openHoursListItemTwo, "Tuesday: 10AM - 9PM");
  insertTextIntoElement(openHoursListItemThree, "Wednesday: 10AM - 9PM");
  insertTextIntoElement(openHoursListItemFour, "Friday: 10AM - 9PM");
  insertTextIntoElement(openHoursListItemFive, "Saturday: 10AM - 9PM");
  insertTextIntoElement(openHoursListItemSix, "Sunday: 10AM - 9PM");
  return [
    imageHolder,
    headLine,
    headLineH1,
    intro,
    heroParaOne,
    heroParaTwo,
    openHours,
    openHoursPara,
    openHoursList,
    openHoursListItemOne,
    openHoursListItemTwo,
    openHoursListItemThree,
    openHoursListItemFour,
    openHoursListItemFive,
    openHoursListItemSix,
  ];
};
