import { Handlers } from "../../../core/models/handlers/handlers";

const handlers = new Handlers();
const button = handlers.getElement("btn-a");
handlers.addEvent("click", button, (event) => console.log(event));
