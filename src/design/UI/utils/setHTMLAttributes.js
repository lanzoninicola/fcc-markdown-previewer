import isValidHTMLTag from "./isNotValidHTMLTag";

export default function setHTMLAttributes(htmlTag, attributes = {}) {
  Object.keys(attributes).forEach((key) => {
    if (attributes[key] !== "") {
      htmlTag.setAttribute(key, attributes[key]);
    }
  });
}
