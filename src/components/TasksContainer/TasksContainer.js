import { BasicElement } from "../../shared/BasicElement";
import Task from "../task/Task";

export default class TasksContainer extends BasicElement {
  constructor(tasksModels) {
    super("div", ["tasks-container"]);
    this.tasks = [];

    tasksModels.forEach((element) => {
      this.append(element);
    });
  }

  append(taskModel) {
    this.tasks.push(new Task(taskModel));
    this.element.append(this.tasks[this.tasks.length - 1].element);
  }
}
