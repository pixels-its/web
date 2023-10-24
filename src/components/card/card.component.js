import { Component } from "../../core/models/component/component.model";

export class Card extends Component {
  constructor() {
    super(
      import.meta.url,

      {
        html: "./card.component.html",
        css: "./card.style.css",
        js: "./scripts/click-console.js",
      }
    );
  }
}
