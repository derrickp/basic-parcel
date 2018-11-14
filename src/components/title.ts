export default function title(text: string) {
  const element = document.createElement("h3");
  element.appendChild(document.createTextNode(text));
  return element;
}
