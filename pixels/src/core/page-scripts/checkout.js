import { products } from "../seeds/products.seeds.js";

const productId = localStorage.getItem("productoCarrito");
let productAMostrar = null;
products.map((product) => {
  if (product.id == productId) {
    productAMostrar = product;
  }
});
const descripcionProducto = document.getElementById("nombreProducto");
descripcionProducto.innerText = productAMostrar.productName;
precio.innerText = "$" + productAMostrar.productPrice;

const cantidadStock = localStorage.getItem("cantidadProductoCarrito");
const cantidadProductoCarrito = document.getElementById("cantidad");
cantidadProductoCarrito.innerText = cantidadStock;

const totalCarrito = localStorage.getItem("totalProductoCarrito");
const totalprecioCarrito = document.getElementById("total");
totalprecioCarrito.innerText = "$" + totalCarrito;

() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
        alert("formulario validado");
      },
      false
    );
  });
};
