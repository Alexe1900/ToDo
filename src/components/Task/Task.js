import { BasicElement } from "../../shared/BasicElement";
import Title from "../../shared/Title/Title";
import Paragraph from "../../shared/Paragraph/Paragraph";
import TaskButtons from "./TaskButtons/TaskButtons";

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

    this.buttons = new TaskButtons();

    this.element.append(this.buttons.element);
  }
}
