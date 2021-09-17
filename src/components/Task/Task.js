import { BasicElement } from "../../shared/BasicElement";
import TaskContent from "./TaskContent/TaskContent";
import TaskButtons from "./TaskButtons/TaskButtons";

import "./Task.less";

export default class Task extends BasicElement {
  constructor(taskObject) {
    super("div", ["task"]);

    this.content = new TaskContent(taskObject);
    this.element.append(this.content.element);

    this.buttons = new TaskButtons();
    this.element.append(this.buttons.element);
  }
}
