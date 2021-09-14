import { BasicElement } from "../BasicElement";
import "./Title.less";

export default class Title extends BasicElement {
  constructor(text, classList) {
    super("h1", [...classList, "title"]);

    this.element.innerText = text;
  }
}
