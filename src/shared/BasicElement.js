export class BasicElement {
  constructor(tag = "div", styles = []) {
    this.element = document.createElement(tag);
    if (styles.join("") !== "") {
      this.element.classList.add(...styles);
    }
  }
}
