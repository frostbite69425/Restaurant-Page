import imageHolder from "./components/bannerImage.component.js";
import cardComponent from "./components/card.component.js";
import heroText from "./components/heroText.component.js";
import makeList from "./components/list.component.js";
import textHolder from "./components/textHolder.component.js";
import Element from "./elementClassController.js";

const makeAboutPage = () => {
  const content = document.querySelector("#content");
  const layoutDiv = new Element("div", "layout");

  Element.setRelationship(content, layoutDiv.elementName);

  const imageCard = imageHolder("cafeBackgroundOne");
  const hero = heroText("About us");
  const cardHolderOne = cardComponent();
  const cardTextOne = textHolder(
    "Hi! We are a team of caffeine heads passionate about all things coffee! Cosy cafe is an attempt to bring our passion of coffee to other people.",
  );

  const cardHolderTwo = cardComponent();
  const listPara = textHolder("Our sweet employees:");
  const list = makeList(
    4,
    "John - Our Barista",
    "Stacy - Our waitress",
    "Holly - Our Pastry Chef",
    "Amber - Our other Barista",
  );

  const cardHolderThree = cardComponent();
  const cardTextThree = textHolder(
    "If you would like to work with us, please send us an email at caffeineHeads@totallyRealEmail.com!",
  );

  Element.setRelationship(
    layoutDiv.elementName,
    imageCard.elementName,
    hero.elementName,
    cardHolderOne.elementName,
    cardHolderTwo.elementName,
    cardHolderThree.elementName,
  );

  Element.setRelationship(cardHolderOne.elementName, cardTextOne.elementName);

  Element.setRelationship(
    cardHolderTwo.elementName,
    listPara.elementName,
    list.elementName,
  );

  Element.setRelationship(
    cardHolderThree.elementName,
    cardTextThree.elementName,
  );

  layoutDiv.setStyle({
    flex: 1,
    display: "grid",
    "place-items": "center",
    gap: "1.3rem",
    "grid-template-rows": " 0.5fr 1fr 1fr 1fr",
    "grid-template-columns": "1fr 1fr",
    "column-gap": "2rem",
    "row-gap": "2rem",
  });
};

export default makeAboutPage;
