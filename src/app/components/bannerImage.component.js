import Element from "../elementClassController.js";
import cafeBackgroundTwo from "../../assets/cafe-landscape2.jpg";
import cafeBackgroundOne from "../../assets/cafe-landscape.jpg";
import coffeeSquareOne from "../../assets/coffee-square1.jpg";
import coffeeSquareTwo from "../../assets/coffee-square2.jpg";
import coffeeSquareThree from "../../assets/coffee-square3.jpg";
import sweetSquareOne from "../../assets/sweet-square1.jpg";

const imageHolder = (src) => {
  const imagesObj = {
    cafeBackgroundTwo,
    cafeBackgroundOne,
    coffeeSquareOne,
    coffeeSquareTwo,
    coffeeSquareThree,
    sweetSquareOne,
  };

  const imageHolder = new Element("div", "image-holder");
  const image = new Element("img", "main-image");
  Element.setRelationship(imageHolder.elementName, image.elementName);
  image.elementName.src = imagesObj[src];

  imageHolder.setStyle({
    "border-radius": "15px",
    "min-height": "100%",
    "min-width": "100%",
    "grid-area": "1 / 1 / -1 / 2",
    display: "flex",
  });

  image.setStyle({
    "border-radius": "15px",
    "object-fit": "cover",
  });

  return imageHolder;
};

export default imageHolder;
