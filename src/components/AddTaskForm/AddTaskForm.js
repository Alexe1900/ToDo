import { BasicElement } from "../../shared/BasicElement";
import Button from "../../shared/Button/Button";

import "./AddTaskForm.less";

export default class AddTaskForm extends BasicElement {
  constructor() {
    super("div", ["add-task-form"]);

    this.titleInput = new BasicElement("input", [
      "add-task-form-input",
      "title-input",
    ]);
    this.titleInput.element.setAttribute("type", "text");
    this.titleInput.element.setAttribute("placeholder", "New Task's title");
    this.element.append(this.titleInput.element);

    this.textInput = new BasicElement("input", [
      "add-task-form-input",
      "text-input",
    ]);
    this.textInput.element.setAttribute("type", "text");
    this.textInput.element.setAttribute("placeholder", "New Task's text");
    this.element.append(this.textInput.element);

    this.addButton = new Button("Add task", "#fff", "#0c0", "#0c0", [
      "add-button",
    ]);
    this.element.append(this.addButton.element);
  }
}
