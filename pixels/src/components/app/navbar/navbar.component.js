import { Component } from "../../core/models/component/component.model";

export class Navbar extends Component {
  constructor() {
    super(
      import.meta.url,

      {
        html: "./navbar.component.html",
        css: "./navbar.style.css",
        js: "./navbar.component.js",
      }
    );
  }
}
