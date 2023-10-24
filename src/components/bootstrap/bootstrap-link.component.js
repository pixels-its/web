import { Component } from "../../core/models/component/component.model";

export class BoostrapLink extends Component {
  constructor() {
    super(import.meta.url, {
      html: "./bootstrap-link.component.html",
    });
  }
}
