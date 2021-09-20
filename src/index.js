import AddTaskForm from "./components/AddTaskForm/AddTaskForm";
import TaskModel from "./shared/TaskModel";
import TasksContainer from "./components/TasksContainer/TasksContainer";

let tasksModels = [];

let form = new AddTaskForm();
document.body.append(form.element);

let container = new TasksContainer(tasksModels);
document.body.append(container.element);

form.addButton.element.addEventListener("click", () => {
  let newTask = new TaskModel(
    form.titleInput.element.value,
    form.textInput.element.value
  );

  form.titleInput.element.value = "";
  form.textInput.element.value = "";

  let exists = false;
  tasksModels.forEach((element) => {
    if (
      [element.title, element.text].join("") ==
      [newTask.title, newTask.text].join("")
    ) {
      alert("This task already exists");
      exists = true;
    }
  });

  if (!exists) {
    container.append(newTask);
    tasksModels.push(newTask);
  }
});
