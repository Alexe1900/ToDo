import AddTaskForm from "./components/AddTaskForm/AddTaskForm";
import TaskModel from "./shared/TaskModel";
import TasksContainer from "./components/TasksContainer/TasksContainer";
import Task from "./components/Task/Task";

let form = new AddTaskForm();
document.body.append(form.element);

let container = new TasksContainer([]);
document.body.append(container.element);

form.addButton.element.addEventListener("click", () => {
  let newTaskModel = new TaskModel(
      form.titleInput.element.value,
      form.textInput.element.value
    ),
    newTask = new Task(newTaskModel, new Date().getTime());

  let exists = false;

  container.tasks.forEach((task) => {
    // console.log("task.data", task.data);
    // console.log("newTaskModel", newTaskModel);

    /*
    Object.is(newTaskModel, task.data)
    */
    if (
      Object.entries(newTaskModel).join("") ==
      Object.entries(task.data).join("")
    ) {
      alert("This task already exists");
      exists = true;
    }
  });

  if (!exists) {
    container.tasks.push(newTask);
    container.renderByTasks(container.tasks);

    form.titleInput.element.value = "";
    form.textInput.element.value = "";
  }
});
