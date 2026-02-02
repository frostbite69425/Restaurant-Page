import setSyleOfElement from "./utils/setSyleOfElement.js";
import cafeLandscape2 from "../assets/cafe-landscape2.jpg";

export default function stylePage(array) {
  const [
    content,
    imageHolder,
    image,
    headLine,
    intro,
    openHours,
    openHoursList,
  ] = array;

  setSyleOfElement(
    {
      flex: 1,
      display: "grid",
      "place-items": "center",
      gap: "1.3rem",
      "grid-template-rows": " 0.5fr 1fr 1fr",
      "grid-template-columns": "1fr 1fr",
      "column-gap": "2rem",
      "row-gap": "2rem",
    },
    content,
  );

  imageHolder.setStyle({
    "border-radius": "15px",
    "min-height": "100%",
    "min-width": "100%",
    "grid-area": "1 / 1 / -1 / 2",
    display: "flex",
  });

  image.elementName.src = cafeLandscape2;

  image.setStyle({
    "border-radius": "15px",
    "object-fit": "cover",
  });

  headLine.setStyle({
    "background-color": "var(--bg-light)",
    padding: "1rem 2rem",
    "border-radius": "15px",
    "box-shadow": "5px 5px 2px var(--bg)",
    "font-family": "Corinthia",
    "font-size": "clamp(1.5rem, 4dvw, 3rem)",
  }); // exported to component

  setSyleOfElement(
    {
      width: "70%",
      "font-size": "clamp(1.5rem, 2.5dvw, 2.7rem)",
      margin: "auto",
    },
    intro,
    openHours,
  );

  intro.setStyle({
    display: "grid",
    gap: "2rem",
    "background-color": "var(--bg)",
    padding: "1rem 2rem",
    "border-radius": "15px",
  });

  openHours.setStyle({
    display: "grid",
    gap: "2rem",
    "background-color": "var(--bg)",
    padding: "1rem 2rem",
    "border-radius": "15px",
    "box-shadow": "5px 5px 2px var(--bg)",
  });

  openHoursList.setStyle({
    "list-style": "none",
    padding: 0,
  });
}
