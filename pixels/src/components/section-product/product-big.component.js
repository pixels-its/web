import { Component } from "../../core/models/component/component.model.js";
import { LocalStorageService } from "../services/local-storage.service.js";


export class ProductBig extends Component {
  constructor() {
    super(
      import.meta.url,

      {
        html: "./product-big.component.html",
        css: "./product-big.style.css",
        js: "./product-big.component.js",
      }
    );
  }
}


// capturamos id del producto

getCard();
const readId = LocalStorageService.get('productId');

readId.innerHTML = `${readId}`;
