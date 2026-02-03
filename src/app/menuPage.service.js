import imageHolder from "./components/bannerImage.component.js";
import cardComponent from "./components/card.component.js";
import heroText from "./components/heroText.component.js";
import textHolder from "./components/textHolder.component.js";
import Element from "./elementClassController.js";
import setSyleOfElement from "./utils/setSyleOfElement.js";

const loadMenuPage = () => {
  const content = document.querySelector("#content");
  const layoutDiv = new Element("div", "layout");
  const menuHolder = new Element("div", "menu-holder");

  Element.setRelationship(content, layoutDiv.elementName);
  const hero = heroText("Menu");

  const menuItemOne = cardComponent();
  const itemImageOne = imageHolder("coffeeSquareOne");
  const itemOneName = textHolder("Affogatto");
  const itemOnePrice = textHolder("Price: $15");

  const menuItemTwo = cardComponent();
  const itemImageTwo = imageHolder("coffeeSquareTwo");
  const itemTwoName = textHolder("Black coffee & donut");
  const itemTwoPrice = textHolder("Price: $25");

  const menuItemThree = cardComponent();
  const itemImageThree = imageHolder("coffeeSquareThree");
  const itemThreeName = textHolder("Cold Coffee");
  const itemThreePrice = textHolder("Price: $17");

  const menuItemFour = cardComponent();
  const itemImageFour = imageHolder("sweetSquareOne");
  const itemFourName = textHolder("Waffles");
  const itemFourPrice = textHolder("Price: $5");

  Element.setRelationship(
    layoutDiv.elementName,
    hero.elementName,
    menuHolder.elementName,
  );

  Element.setRelationship(
    menuHolder.elementName,
    menuItemOne.elementName,
    menuItemTwo.elementName,
    menuItemThree.elementName,
    menuItemFour.elementName,
  );

  Element.setRelationship(
    menuItemOne.elementName,
    itemImageOne.elementName,
    itemOneName.elementName,
    itemOnePrice.elementName,
  );

  Element.setRelationship(
    menuItemTwo.elementName,
    itemImageTwo.elementName,
    itemTwoName.elementName,
    itemTwoPrice.elementName,
  );

  Element.setRelationship(
    menuItemThree.elementName,
    itemImageThree.elementName,
    itemThreeName.elementName,
    itemThreePrice.elementName,
  );

  Element.setRelationship(
    menuItemFour.elementName,
    itemImageFour.elementName,
    itemFourName.elementName,
    itemFourPrice.elementName,
  );

  layoutDiv.setStyle({
    flex: 1,
    display: "flex",
    "justify-content": "center",
    "align-items": "center",
    "flex-direction": "column",
    gap: "3rem",
  });

  menuHolder.setStyle({
    display: "grid",
    "grid-template-columns": "1fr 1fr",
    "grid-template-rows": "1fr 1fr",
    gap: "1.5rem",
  });

  setSyleOfElement(
    {
      display: "flex",
      "max-width": "500px",
      "justify-content": "center",
      "flex-direction": "column",
    },
    menuItemOne,
    menuItemTwo,
    menuItemThree,
    menuItemFour,
  );
};

export default loadMenuPage;
