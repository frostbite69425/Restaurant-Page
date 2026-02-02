import Element from "../elementClassController.js";

const heroText = (text) => {
  const headLine = new Element("div", "headline");
  const headLineH1 = new Element("h1", " ");
  Element.insertText(headLineH1, text);
  Element.setRelationship(headLine.elementName, headLineH1.elementName);

  headLine.setStyle({
    "background-color": "var(--bg-light)",
    padding: "1rem 2rem",
    "border-radius": "15px",
    "box-shadow": "5px 5px 2px var(--bg)",
    "font-family": "Corinthia",
    "font-size": "clamp(1.5rem, 4dvw, 3rem)",
  });
};

export default heroText;
