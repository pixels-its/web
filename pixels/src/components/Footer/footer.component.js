import { Component } from "../../core/models/component/component.model.js";

export class Footer extends Component {
  constructor() {
    super(
      import.meta.url,

      {
        html: "./footer.component.html",
      }
    );
  }
}
