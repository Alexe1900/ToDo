import { BasicElement } from "../../shared/BasicElement";
import Task from "../task/Task";

export default class TasksContainer extends BasicElement {
  constructor(tasksModels) {
    super("div", ["tasks-container"]);
    this.tasks = [];

    this.renderByTasks(
      tasksModels.map((model) => new Task(model, new Date().getTime()))
    );
  }

  renderByTasks(tasks) {
    this.element.innerHTML = "";
    this.tasks = [];
    tasks.forEach((task) => {
      this.tasks.push(task);
      task.buttons.deleteButton.element.addEventListener("click", () => {
        this.tasks = this.tasks.filter((iterTask) => iterTask.id != task.id);
        this.renderByTasks(this.tasks);
      });
      this.element.append(task.element);
    });
  }

  // append(taskModel) {
  //   this.tasks.push(new Task(taskModel, new Date().getUTCMilliseconds()));
  //   let index = this.tasks.length - 1;
  //   this.tasks[index].buttons.deleteButton.element.addEventListener(
  //     "click",
  //     () => {
  //       this.tasks = this.tasks.filter(
  //         (task) => task.id != this.tasks[index].id
  //       );
  //       this.element.innerHTML = "";
  //       this.tasks.forEach((task) => {
  //         this.element.append(task.element);
  //       });
  //     }
  //   );
  //   this.element.append(this.tasks[index].element);
  // }
}
