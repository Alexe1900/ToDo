import { BasicElement } from "../../../shared/BasicElement";
import Title from "../../../shared/Title/Title";
import Paragraph from "../../../shared/Paragraph/Paragraph";

import "./TaskContent.less";

export default class TaskContent extends BasicElement {
  constructor(taskObject) {
    super("div", ["task-content"]);

    this.taskTitle = new Title(taskObject.title, ["task-title"]);
    this.element.append(this.taskTitle.element);

    this.taskText = new Paragraph(taskObject.text, ["task-text"]);
    this.element.append(this.taskText.element);
  }
}
