import AddTaskForm from "./components/AddTaskForm/AddTaskForm";
import TaskModel from "./shared/TaskModel";
import TasksContainer from "./components/TasksContainer/TasksContainer";
import Task from "./components/Task/Task";

let form = new AddTaskForm();
document.body.append(form.element);

let container = new TasksContainer();
document.body.append(container.element);

form.addButton.element.addEventListener("click", () => {
  let newTaskModel = new TaskModel(
      form.titleInput.element.value,
      form.textInput.element.value
    ),
    newTask = new Task(newTaskModel, new Date().getTime());

  let isTaskExisting = false;

  container.incompletedTasks.forEach((task) => {
    // console.log("task.data", task.data);
    // console.log("newTaskModel", newTaskModel);

    /*
    Object.is(newTaskModel, task.data)
    */
    if (
      Object.entries(newTaskModel).join() == Object.entries(task.data).join()
    ) {
      alert("This task already exists");
      isTaskExisting = true;
    }
  });

  container.completedTasks.forEach((task) => {
    // console.log("task.data", task.data);
    // console.log("newTaskModel", newTaskModel);

    /*
    Object.is(newTaskModel, task.data)
    */
    if (
      Object.entries(newTaskModel).join() == Object.entries(task.data).join()
    ) {
      alert("This task already exists");
      isTaskExisting = true;
    }
  });

  if (!isTaskExisting) {
    container.incompletedTasks.push(newTask);
    container.renderByTasks(
      container.incompletedTasks,
      container.completedTasks
    );

    form.titleInput.element.value = "";
    form.textInput.element.value = "";
  }
});
