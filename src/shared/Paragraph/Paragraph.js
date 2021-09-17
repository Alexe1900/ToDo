import { BasicElement } from "../BasicElement";
import "./Paragraph.less";

export default class Paragraph extends BasicElement {
  constructor(text, classList) {
    super("p", ["paragraph", ...classList]);

    this.element.innerText = text;
  }
}
