import { BasicElement } from "../BasicElement";
import "./Paragraph.less";

export default class Title extends BasicElement {
  constructor(text, classList) {
    super("p", ["paragraph", ...classList]);

    this.element.innerText = text;
  }
}
