import { Component } from "../../core/models/component/component.model.js";

export class Navbar extends Component {
  constructor() {
    super(import.meta.url, {
      html: "./navbar.component.html",
    });
  }
}
