import { Component } from "../../core/models/component/component.model";

export class Brands extends Component {
  constructor() {
    super(import.meta.url, {
      html: "./brands.component.html",
    });
  }
}
