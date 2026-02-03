import Element from "../elementClassController.js";

const cardComponent = () => {
  const card = new Element("div", "hero-text");
  card.setStyle({
    width: "70%",
    "font-size": "clamp(1.5rem, 2.5dvw, 2.7rem)",
    margin: "auto",
    display: "grid",
    gap: "2rem",
    "background-color": "var(--bg)",
    padding: "1rem 2rem",
    "border-radius": "15px",
  });
  return card;
};

export default cardComponent;
