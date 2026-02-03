import Element from "../elementClassController.js";

const textHolder = (text) => {
  const para = new Element("p", " ");
  Element.insertText(para, text);
  para.setStyle({
    width: "70%",
    "font-size": "clamp(1.5rem, 2.5dvw, 2.7rem)",
    margin: "auto",
    "word-break": "break-word",
  });

  return para;
};

export default textHolder;
