import makeElementWithClass from "./utils/makeElementWithClass.js";

const initDomPopulator = () => {
  // MAKE DOM ELEMENTS
  const imageHolder = makeElementWithClass("div", "image-holder");
  const headLine = makeElementWithClass("div", "headline");
  const headLineH1 = makeElementWithClass("h1", " ");
  const intro = makeElementWithClass("div", "hero-text");
  const heroParaOne = makeElementWithClass("p", " ");
  const heroParaTwo = makeElementWithClass("p", " ");
  const openHours = makeElementWithClass("div", "open-hours");
  const openHoursPara = makeElementWithClass("p", " ");
  const openHoursList = makeElementWithClass("ul", " ");
  const openHoursListItemOne = makeElementWithClass("li", " ");
  const openHoursListItemTwo = makeElementWithClass("li", " ");
  const openHoursListItemThree = makeElementWithClass("li", " ");
  const openHoursListItemFour = makeElementWithClass("li", " ");
  const openHoursListItemFive = makeElementWithClass("li", " ");
  const openHoursListItemSix = makeElementWithClass("li", " ");
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

export default initDomPopulator;
