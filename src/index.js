import { Task } from "./task";
import { Project } from "./project";
import "./index.css";
import { renderElements } from "./ui";

const container = document.createElement("div");
container.classList.add("container");
document.body.appendChild(container);

let myProject = new Project("yardwork");
let myTask = new Task("wash car", "take car to carwash", "monday", "high");
let secondTask = new Task("mow lawn");

myProject.projectTasks.push(myTask);
myProject.projectTasks.push(secondTask);
renderElements(myProject.projectTasks, container);

