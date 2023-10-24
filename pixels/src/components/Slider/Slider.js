import { Component } from "../../core/models/component/component.model";

export class Slider extends Component {
  constructor() {
    super(
      import.meta.url,

      {
        html: "./slider.component.html",
        css: "./slider.style.css",
        js: "./slider.component.js",
      }
    );
  }
}