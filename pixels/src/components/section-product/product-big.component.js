import { Component } from "../../core/models/component/component.model.js";
import { products } from "../../core/seeds/products-seeds.js";
import {LocalStorageService} from "../../core/services/local-storage.service.js";

export class ProductBig extends Component {
  constructor() {
    super(
      import.meta.url,

      {
        html: "./product-big.component.html",
      }
    );
  }
}

// llamo al input
const inputCantidad = document.getElementById("quantity");

// llamamos a los productos
const title = document.getElementById("title");
const star = document.getElementById("star");
const description = document.getElementById("description");
const stock = document.getElementById("stock");
const price = document.getElementById("productPrice");
const imagen = document.getElementsByClassName("col-md-5");

// capturamos id del producto
const productId = LocalStorageService.get("productId");
let productAMostrar = null;

products.map((product) => {
  if (product.id == productId) {
    let productAMostrar = product;

    console.log(imagen);
    console.log(productAMostrar);
  }
});


console.log(productAMostrar);


function añadircarrito() {
  if (inputCantidad.value <= 0) {
    alert("No podes comprar 0 productos");
  } else {
    localStorage.setItem("cantidadProductoCarrito", inputCantidad.value);
    stock = stock--;
  }

  localStorage.setItem("productoCarrito", productAMostrar);
}







