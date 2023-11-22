import { Component } from "../../core/models/component/component.model.js";
import { products } from "../../core/seeds/products-seeds.js";
import { LocalStorageService } from "../../core/services/local-storage.service.js";

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
const imagen = document.getElementById("image");

// capturamos id del producto
const productId = LocalStorageService.get("productId");
let productAMostrar = null;

products.map((product) => {
  if (product.id == productId) {
    productAMostrar = product;
  }
});

console.log(productAMostrar);
title.innerText = productAMostrar.productName;
description.innerText = productAMostrar.productDescription;
stock.innerHTML = `Stock disponible: ${Math.floor(Math.random() * 10) + 1}`;
price.innerText = `$${productAMostrar.productPrice}`;
imagen.src =
  "https://logg.api.cygnus.market/static/logg/Global/Placa%20de%20Video%20MSI%20NVIDIA%20GeForce%20RTX%203080%20Ti%20GAMING%20X%20TRIO%2012GB%20GDDR6X%20RGB%20c/%20Bracket%20+%20SPIDER-MAN/c6f884bfc3984bd8b8e51c18dafaa01b.webp";

// function añadircarrito() {
//   if (inputCantidad.value <= 0) {
//     alert("No podes comprar 0 productos");
//   } else {
//     localStorage.setItem("cantidadProductoCarrito", inputCantidad.value);
//     stock = stock--;
//   }

//   localStorage.setItem("productoCarrito", productAMostrar);
// }
