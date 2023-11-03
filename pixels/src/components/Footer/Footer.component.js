import { Component } from "../../core/models/component/component.model";

export class Footer extends Component {
  constructor() {
    super(
      import.meta.url,

      {
        html: "./Footer.component.html",
        // css: "./Footer.style.css",
      }
    );
  }
}
