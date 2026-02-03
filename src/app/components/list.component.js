import Element from "../elementClassController.js";
import createListItem from "./listItem.component.js";

const makeList = (num, ...text) => {
  const textArray = text;
  const list = new Element("ul", " ");

  for (let i = 0; i < num; i++) {
    const listItem = createListItem(textArray[i]);
    Element.setRelationship(list.elementName, listItem.elementName);
  }

  list.setStyle({
    "list-style": "none",
  });

  return list;
};

export default makeList;
