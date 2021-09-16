import { BasicElement } from "../BasicElement";
import "./Button.less";

export default class Button extends BasicElement {
  constructor(text, textColor, backgroundColor, borderColor, classList) {
    super("button", ["button", ...classList]);

    this.element.innerText = text;

    this.element.style.setProperty("--textColor", textColor);
    this.element.style.setProperty("--backgroundColor", backgroundColor);
    this.element.style.setProperty("--borderColor", borderColor);
  }
}
