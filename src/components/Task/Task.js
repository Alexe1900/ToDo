import { BasicElement } from "../../shared/BasicElement";
import TaskContent from "./TaskContent/TaskContent";
import TaskButtons from "./TaskButtons/TaskButtons";
import EditTaskForm from "./EditTaskForm/EditTaskForm";

import "./Task.less";

const msg = new SpeechSynthesisUtterance();

let voice = null;

function populateVoices() {
  voice = this.getVoices()[0];
}

msg.voice = voice;

speechSynthesis.addEventListener("voiceschanged", populateVoices);

export default class Task extends BasicElement {
  constructor(taskObject, id) {
    super("div", ["task"]);

    this.data = taskObject;

    this.content = new TaskContent(taskObject);
    this.element.append(this.content.element);

    this.buttons = new TaskButtons();
    this.element.append(this.buttons.element);

    this.id = id;

    this.editTaskForm = new EditTaskForm();
    this.element.append(this.editTaskForm.element);

    this.buttons.readButton.element.addEventListener("click", () => {
      msg.text = this.data.title;
      speechSynthesis.speak(msg);

      msg.text = this.data.text;
      speechSynthesis.speak(msg);
    });
  }
}
