import { BasicElement } from "../BasicElement";
import "./Span.less";

export default class Title extends BasicElement {
  constructor(text, classList) {
    super("span", ["span", ...classList]);

    this.element.innerText = text;
  }
}
