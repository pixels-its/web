import { Component } from "../../core/models/component/component.model";

export class Pie extends Component {
  constructor() {
    super(
      import.meta.url,

      {
        html: "./pie.component.html",
        css: "./pie.style.css",
        
      }
    );
  }
}
