import { BasicElement } from "../../shared/BasicElement";
import Button from "../../shared/Button/Button";
import TaskModel from "../../shared/TaskModel";
import Title from "../../shared/Title/Title";
import Task from "../Task/Task";
import "./TasksContainer.less";

const msg = new SpeechSynthesisUtterance();

let voice = null;

function populateVoices() {
  voice = this.getVoices()[0];
}

msg.voice = voice;

speechSynthesis.addEventListener("voiceschanged", populateVoices);

export default class TasksContainer extends BasicElement {
  constructor() {
    super("div", ["tasks-container"]);
    this.incompletedTasks = [];
    this.completedTasks = [];

    this.renderByTasks([], []);
  }

  renderByTasks(incompletedTasksForRender, completedTasksForRender) {
    this.element.innerHTML = "";

    this.readAllTasksButton = new Button(
      "Read all tasks",
      "#80b8",
      "#fff",
      "#80b8",
      ["read-all-tasks-button"]
    );

    this.element.append(this.readAllTasksButton.element);

    this.setReadAllTasksListener();

    this.incompletedTasks = incompletedTasksForRender.map((task) => {
      return new Task(task.data, task.id);
    });
    this.completedTasks = completedTasksForRender.map((task) => {
      return new Task(task.data, task.id);
    });

    this.incompletedTasks.forEach((task, index) => {
      this.addDeleteTaskListener(task, false);

      this.addEditTaskListener(task, index, false);

      this.addDisableTaskListener(task);

      this.element.append(task.element);
    });

    this.completedTasks.forEach((task) => {
      this.addDeleteTaskListener(task, true);

      task.buttons.editButton.element.classList.add("invisible");

      task.buttons.disableButton.element.classList.add("invisible");

      task.buttons.activateButton.element.classList.add("visible");

      this.addActivateTaskListener(task);

      task.content.element.classList.add("grey");
      this.element.append(task.element);
    });

    this.counter = new Title(
      `Incompleted: ${this.incompletedTasks.length}
      Completed: ${this.completedTasks.length}
      At all: ${this.incompletedTasks.length + this.completedTasks.length}`,
      []
    );
    this.element.append(this.counter.element);
  }

  setReadAllTasksListener() {
    this.readAllTasksButton.element.addEventListener("click", () => {
      msg.text = "?????????????????????????? ????????????:";
      speechSynthesis.speak(msg);

      if (this.incompletedTasks.length == 0) {
        msg.text = "????????";
        speechSynthesis.speak(msg);
      } else {
        msg.text = "";
        this.incompletedTasks.forEach((task) => {
          if (task.data.title) {
            msg.text += `${task.data.title}, `;
          }
          if (task.data.text) {
            msg.text += `(${task.data.text}), `;
          }
        });
        speechSynthesis.speak(msg);
      }
    });
  }

  addDeleteTaskListener(task, completed) {
    task.buttons.deleteButton.element.addEventListener("click", () => {
      if (completed) {
        this.completedTasks = this.completedTasks.filter(
          (iterTask) => iterTask.id != task.id
        );
      } else {
        this.incompletedTasks = this.incompletedTasks.filter(
          (iterTask) => iterTask.id != task.id
        );
      }

      this.renderByTasks(this.incompletedTasks, this.completedTasks);
    });
  }

  addEditTaskListener(task, index, completed) {
    task.buttons.editButton.element.addEventListener("click", () => {
      task.editTaskForm.element.classList.add("open");
      task.editTaskForm.titleInput.element.value = task.data.title;
      task.editTaskForm.textInput.element.value = task.data.text;

      task.editTaskForm.setButton.element.addEventListener("click", () => {
        this.setTaskListener(task, index, completed);
      });
    });
  }

  setTaskListener(task, index, completed) {
    let newTaskModel = new TaskModel(
        task.editTaskForm.titleInput.element.value,
        task.editTaskForm.textInput.element.value
      ),
      newTask = new Task(newTaskModel, new Date().getTime());

    if (completed) {
      this.completedTasks.splice(index, 1, newTask);
    } else {
      this.incompletedTasks.splice(index, 1, newTask);
    }

    task.editTaskForm.element.classList.remove("open");
    this.renderByTasks(this.incompletedTasks, this.completedTasks);
  }

  addDisableTaskListener(task) {
    task.buttons.disableButton.element.addEventListener("click", () => {
      this.incompletedTasks = this.incompletedTasks.filter(
        (iterTask) => iterTask.id != task.id
      );

      this.completedTasks.push(new Task(task.data, task.id));

      this.renderByTasks(this.incompletedTasks, this.completedTasks);
    });
  }

  addActivateTaskListener(task) {
    task.buttons.activateButton.element.addEventListener("click", () => {
      this.completedTasks = this.completedTasks.filter(
        (iterTask) => iterTask.id != task.id
      );

      this.incompletedTasks.push(new Task(task.data, task.id));

      this.renderByTasks(this.incompletedTasks, this.completedTasks);
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
