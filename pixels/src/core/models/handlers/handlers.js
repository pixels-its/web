export class Handlers {
  getElement = (id) => document.getElementById(id);
  addEvent = (type, element, callback) =>
    element.addEventListener(type, callback);
}
