export default function keyValue(key: string, value: string) {
  const element = document.createElement("p");
  element.appendChild(document.createTextNode(`${key}: ${value}`));
  return element;
}
