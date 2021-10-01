import { BasicElement } from "../../../shared/BasicElement";
import Button from "../../../shared/Button/Button";

import "./TaskButtons.less";

export default class TaskButtons extends BasicElement {
  constructor() {
    super("div", ["task-buttons"]);

    this.deleteButton = new Button("Delete", "#800", "#fff", "#800", [
      "task-button",
    ]);
    this.element.append(this.deleteButton.element);

    this.editButton = new Button("Edit", "#c80", "#fff", "#c80", [
      "task-button",
    ]);
    this.element.append(this.editButton.element);

    this.disableButton = new Button("Disable", "#0c0", "#fff", "#0c0", [
      "task-button",
    ]);
    this.element.append(this.disableButton.element);

    this.activateButton = new Button(
      "Activate task",
      "#07beb8",
      "#fff",
      "#07beb8",
      ["task-button", "task-activate-button"]
    );
    this.element.append(this.activateButton.element);
  }
}
