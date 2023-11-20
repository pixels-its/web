import { Component } from "../../core/models/component/component.model.js";

export class Card extends Component {
  constructor() {
    super(
      import.meta.url,

      {
        html: "./card.component.html",
      }
    );
  }
}
