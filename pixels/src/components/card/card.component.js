import { Component } from "../../core/models/component/component.model";

export class Card extends Component {
  constructor() {
    super("./card.component.html", "./card.style.css", import.meta.url);
  }
}
