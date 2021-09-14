import { BasicElement } from "../BasicElement";
import "./Paragraph.less";

export default class Title extends BasicElement {
  constructor(text, classList) {
    super("p", [...classList, "paragraph"]);

    this.element.innerText = text;
  }
}
