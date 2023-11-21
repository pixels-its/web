import { Component } from "../../core/models/component/component.model";

export class Forum extends Component {
  constructor() {
    super(
      import.meta.url,

      {
        html: "./forum-component.html",
      }
    );
  }
}