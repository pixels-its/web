import { products } from "../../core/seeds/products-seeds.js";
import { LocalStorageService } from "../../core/services/local-storage.service.js";

// llamamos a las etiquetas donde estaran las propiedades del procuto

const title = document.getElementById("title");
const star = document.getElementById("star");
const description = document.getElementById("description");
const stock = document.getElementById("stock");
const price = document.getElementById("productPrice");
const imagen = document.getElementById("image");
const boton = document.getElementById("btn");
const inputKart = document.getElementById("quantity");

// capturamos id del producto
const productId = LocalStorageService.get("productId");
let productAMostrar = null;

products.map((product) => {
  if (product.id == productId) {
    productAMostrar = product;
  }
});

//transferimos las propiedades el producto a las etiquetas del html
const cantidadStock = Math.floor(Math.random() * 10) + 1;
title.innerText = productAMostrar.productName;
description.innerText = productAMostrar.productDescription;
stock.innerHTML = `Stock disponible: ${cantidadStock}`;
price.innerText = `$${productAMostrar.productPrice}`;
imagen.src = productAMostrar.productThumbnail;

//añadimos funcion al boton "Añadir al carro" de guardar que producto compraste, su cantidad y el total de la compra
boton.addEventListener("click", function () {
  if (inputKart.value <= 0 || inputKart.value > cantidadStock) {
    alert(
      "No podes comprar 0 productos o mas productos de los que tenemos en stock"
    );
  } else {
    localStorage.setItem("cantidadProductoCarrito", inputKart.value);
    localStorage.setItem(
      "totalProductoCarrito",
      inputKart.value * productAMostrar.productPrice
    );
    localStorage.setItem("productoCarrito", productAMostrar.id);
    alert(
      `mandaste al carrito el producto ${
        productAMostrar.productName
      } con un total de ${
        inputKart.value
      } unidades, el total de tu compra es de ${
        inputKart.value * productAMostrar.productPrice
      }`
    );
  }
});
