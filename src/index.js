import AddTaskForm from "./components/AddTaskForm/AddTaskForm";
import TaskModel from "./shared/TaskModel";
import TasksContainer from "./components/TasksContainer/TasksContainer";
import Task from "./components/task/Task";

let form = new AddTaskForm();
document.body.append(form.element);

let container = new TasksContainer([]);
document.body.append(container.element);

form.addButton.element.addEventListener("click", () => {
  let newTaskModel = new TaskModel(
    form.titleInput.element.value,
    form.textInput.element.value
  );

  form.titleInput.element.value = "";
  form.textInput.element.value = "";

  let exists = false;
  container.tasks.forEach((element) => {
    if (Object.is(new Task(newTaskModel), element)) {
      alert("This task already exists");
      exists = true;
    }
  });

  if (!exists) {
    container.tasks.push(new Task(newTaskModel, new Date().getTime()));
    container.renderByTasks(container.tasks);
  }
});
