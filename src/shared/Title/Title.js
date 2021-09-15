import { BasicElement } from "../BasicElement";
import "./Title.less";

export default class Title extends BasicElement {
  constructor(text, classList) {
    super("h1", ["title", ...classList]);

    this.element.innerText = text;
  }
}
