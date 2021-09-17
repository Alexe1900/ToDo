import Task from "./components/task/Task";
import TaskModel from "./shared/TaskModel";

for (let index = 0; index < 10; index++) {
  let task = new TaskModel("Buy bread", "Go to shop and buy bread");
  if (index > 7) {
    task.completeTask();
  }
  let taskObject = new Task(task);

  document.body.append(taskObject.element);
}
