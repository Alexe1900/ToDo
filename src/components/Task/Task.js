import { BasicElement } from "../../shared/BasicElement";
import TaskContent from "./TaskContent/TaskContent";
import TaskButtons from "./TaskButtons/TaskButtons";
import EditTaskForm from "./EditTaskForm/EditTaskForm";

import "./Task.less";

export default class Task extends BasicElement {
  constructor(taskObject, id) {
    super("div", ["task"]);

    this.data = taskObject;

    this.content = new TaskContent(taskObject);
    this.element.append(this.content.element);

    this.buttons = new TaskButtons();
    this.element.append(this.buttons.element);

    this.id = id;

    this.editTaskForm = new EditTaskForm();
    this.element.append(this.editTaskForm.element);
  }
}
