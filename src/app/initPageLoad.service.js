import imageHolder from "./components/bannerImage.component.js";
import cardComponent from "./components/card.component.js";
import heroText from "./components/heroText.component.js";
import makeList from "./components/list.component.js";
import textHolder from "./components/textHolder.component.js";
import Element from "./elementClassController.js";

const loadInitPage = () => {
  const content = document.querySelector("#content");
  const layoutDiv = new Element("div", "layout");

  Element.setRelationship(content, layoutDiv.elementName);

  const imageCard = imageHolder("cafeBackgroundTwo");
  const hero = heroText("Cosy Cafe");
  const cardHolder = cardComponent();
  const cardTextOne = textHolder(
    "Welcome to Cosy Cafe! Where we serve not only coffee and good vibes but also offer a cosy community that you can be a part of!",
  );
  const cardTextTwo = textHolder(
    "In case you're new here, hi! Please have a look at the menu, relax and let us know what we can get you. If you're a returning customer, then shall we get you your usual?",
  );
  const listHolder = cardComponent();
  const listPara = textHolder("Come give us a visit! We're open:");
  const list = makeList(
    6,
    "Monday: 10AM - 9PM",
    "Tuesday: 10AM - 9PM",
    "Wednesday: 10AM - 9PM",
    "Friday: 10AM - 9PM",
    "Saturday: 10AM - 9PM",
    "Sunday: 10AM - 9PM",
  );

  Element.setRelationship(
    layoutDiv.elementName,
    imageCard.elementName,
    hero.elementName,
    cardHolder.elementName,
    listHolder.elementName,
  );
  Element.setRelationship(
    cardHolder.elementName,
    cardTextOne.elementName,
    cardTextTwo.elementName,
  );
  Element.setRelationship(
    listHolder.elementName,
    listPara.elementName,
    list.elementName,
  );

  listHolder.setStyle({
    display: "grid",
    gap: "2rem",
    "background-color": "var(--bg)",
    padding: "1rem 2rem",
    "border-radius": "15px",
    "box-shadow": "5px 5px 2px var(--bg)",
  });

  layoutDiv.setStyle({
    flex: 1,
    display: "grid",
    "place-items": "center",
    gap: "1.3rem",
    "grid-template-rows": " 0.5fr 1fr 1fr",
    "grid-template-columns": "1fr 1fr",
    "column-gap": "2rem",
    "row-gap": "2rem",
  });
};

export default loadInitPage;
