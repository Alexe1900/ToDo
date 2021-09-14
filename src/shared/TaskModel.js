export default class TaskModel {
  constructor(taskTitle, taskText) {
    this.title = taskTitle;
    this.text = taskText;
    this.active = true;
  }

  completeTask() {
    this.active = false;
  }
}
