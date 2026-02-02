import setParentAndChild from "./utils/appendChildren.js";
import insertTextIntoElement from "./utils/insertTextIntoElement.js";
import makeElementWithClass from "./utils/makeElementWithClass.js";
import setSyleOfElement from "./utils/setSyleOfElement.js";

export default class Element {
  constructor(elementType, className) {
    this.elementName = makeElementWithClass(elementType, className);
    this.setStyle = (styleList) => {
      setSyleOfElement(styleList, this);
    };
  }
  static insertText(element, text) {
    insertTextIntoElement(element.elementName, text);
  }

  static setRelationship(parent, ...child) {
    setParentAndChild(parent, child);
  }
}
