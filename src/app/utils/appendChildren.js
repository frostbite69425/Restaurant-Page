export default function setParentAndChild(parentSelector, ...children) {
  const parent = document.querySelector(parentSelector);
  for (let child of children) {
    parent.appendChild(child);
  }
}
