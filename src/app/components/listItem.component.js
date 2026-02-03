import Element from "../elementClassController.js";

const createListItem = (text) => {
  const listItem = new Element("li", " ");
  Element.insertText(listItem, text);

  return listItem;
};

export default createListItem;
