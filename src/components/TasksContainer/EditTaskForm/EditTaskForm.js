import { BasicElement } from "../../../shared/BasicElement";
import Button from "../../../shared/Button/Button";

import "./EditTaskForm.less";

export default class EditTaskForm extends BasicElement {
  constructor() {
    super("div", ["edit-task-form-wrapper"]);
    this.inner = new BasicElement("div", ["edit-task-form"]);

    this.titleInput = new BasicElement("input", [
      "edit-task-form-input",
      "edit-title-input",
    ]);
    this.titleInput.element.setAttribute("type", "text");
    this.titleInput.element.setAttribute("placeholder", "New Task's title");
    this.inner.element.append(this.titleInput.element);

    this.textInput = new BasicElement("input", [
      "edit-task-form-input",
      "edit-text-input",
    ]);
    this.textInput.element.setAttribute("type", "text");
    this.textInput.element.setAttribute("placeholder", "New Task's text");
    this.inner.element.append(this.textInput.element);

    this.setButton = new Button("Set task", "#fff", "#0c0", "#0c0", [
      "set-button",
    ]);
    this.inner.element.append(this.setButton.element);

    this.element.append(this.inner.element);
  }
}
