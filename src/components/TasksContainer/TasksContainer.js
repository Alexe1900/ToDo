import { BasicElement } from "../../shared/BasicElement";
import TaskModel from "../../shared/TaskModel";
import Task from "../Task/Task";

export default class TasksContainer extends BasicElement {
  constructor(tasksModels) {
    super("div", ["tasks-container"]);
    this.tasks = [];

    this.renderByTasks(
      tasksModels.map((model) => new Task(model, new Date().getTime()))
    );
  }

  renderByTasks(tasksForRender) {
    this.element.innerHTML = "";
    this.tasks = tasksForRender;

    this.tasks.forEach((task, index) => {
      this.addDeleteTaskListener(task);

      this.addEditTaskListener(task, index);

      this.element.append(task.element);
    });
  }

  addDeleteTaskListener(task) {
    task.buttons.deleteButton.element.addEventListener("click", () => {
      this.tasks = this.tasks.filter((iterTask) => iterTask.id != task.id);
      this.renderByTasks(this.tasks);
    });
  }

  addEditTaskListener(task, index) {
    task.buttons.editButton.element.addEventListener("click", () => {
      task.editTaskForm.element.classList.add("open");
      task.editTaskForm.titleInput.element.value = task.data.title;
      task.editTaskForm.textInput.element.value = task.data.text;

      task.editTaskForm.setButton.element.addEventListener("click", () => {
        this.setTaskListener(task, index);
      });
    });
  }

  setTaskListener(task, index) {
    let newTaskModel = new TaskModel(
        task.editTaskForm.titleInput.element.value,
        task.editTaskForm.textInput.element.value
      ),
      newTask = new Task(newTaskModel, new Date().getTime());
    this.tasks.splice(index, 1, newTask);
    task.editTaskForm.element.classList.remove("open");
    this.renderByTasks(this.tasks);
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
