import setParentAndChild from "./utils/appendChildren.js";
import initDomPopulator from "./initDomPopulator.service.js";
import domTextPopulatorService from "./domTextPopulator.service.js";

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
  ] = domTextPopulatorService();

  setParentAndChild("#content", imageHolder, headLine, intro, openHours);
  setParentAndChild(".headline", headLineH1);
  setParentAndChild(".hero-text", heroParaOne, heroParaTwo);
  setParentAndChild(".open-hours", openHoursPara, openHoursList);
  setParentAndChild(
    ".open-hours > ul",
    openHoursListItemOne,
    openHoursListItemTwo,
    openHoursListItemThree,
    openHoursListItemFour,
    openHoursListItemFive,
  );

  return [
    headLineH1,
    heroParaOne,
    heroParaTwo,
    openHoursPara,
    openHoursListItemOne,
    openHoursListItemTwo,
    openHoursListItemThree,
    openHoursListItemFour,
    openHoursListItemFive,
  ];
};
