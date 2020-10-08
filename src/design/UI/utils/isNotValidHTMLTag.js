export default function isNotValidHTMLTag(htmlTagValue = "") {
  return htmlTagValue.toString() instanceof HTMLUnknownElement;
}
