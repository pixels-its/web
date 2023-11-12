import { Component } from "../../core/models/component/component.model";

export class Link extends Component {
  constructor() {
    super(
      import.meta.url,

      {
        html: "./link.component.html",
        css: "./link.style.css",
      }
    );
  }
 
}
