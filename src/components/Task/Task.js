import { BasicElement } from "../../shared/BasicElement";
import Title from "../../shared/Title/Title";
import Paragraph from "../../shared/Paragraph/Paragraph";
import Button from "../../shared/Button/Button";

import TaskModel from "../../shared/TaskModel";

import "./Task.less";

export default class Task extends BasicElement {
  constructor(taskObject) {
    super("div", ["task"]);

    this.taskTitle = new Title(
      taskObject.title,
      taskObject.active ? ["task-title"] : ["task-title", "grey"]
    );
    this.element.append(this.taskTitle.element);

    this.taskText = new Paragraph(
      taskObject.text,
      taskObject.active ? ["task-text"] : ["task-text", "grey"]
    );
    this.element.append(this.taskText.element);

    this.buttons = new BasicElement("div", ["buttons"]);

    this.buttons.deleteButton = new Button("Delete", "#800", "#fff", "#800", [
      "task-button",
      "task-delete-button",
    ]);
    this.buttons.element.append(this.buttons.deleteButton.element);

    this.buttons.editButton = new Button("Edit", "#c80", "#fff", "#c80", [
      "task-button",
      "task-edit-button",
    ]);
    this.buttons.element.append(this.buttons.editButton.element);

    this.element.append(this.buttons.element);
  }
}
