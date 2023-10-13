import { WebComponent } from "../../core/models/web-component";

export class Card extends WebComponent {
  constructor() {
    super("./card.component.html", "./card.style.css", import.meta.url);
  }
}
