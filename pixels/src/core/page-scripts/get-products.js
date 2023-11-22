import { SeedService } from "../services/seed.service.js";
import { Handlers } from "../models/handlers/handlers.js";

const $ = document; // Guardo el dom en una variable
const categoria = $.getElementById("filterSelect"); //Guardo el Select para filtrar busquedas segun el tipo de producto
const inputText = $.getElementById("filterText"); //Guardo el input type text para filtrar busquedas segun el tipo nombre del producto
const handlers = new Handlers(); // Manejadores de eventos y obtención de elementos
const seeds = new SeedService();
const products = seeds.get("products");
const main = () => {
  const bodyContainer = handlers.getElement("body-container");
  let productsContainer = $.createElement("div");
  productsContainer.setAttribute("id", "productsContainer");
  productsContainer.setAttribute("class", "card-group justify-content-center");
  bodyContainer.appendChild(productsContainer);
  const categoria = document.getElementById("filterSelector");
};

const mapProducts = () => {
  let productsContainer = handlers.getElement("productsContainer");

  products.map((product) => {
    const card = createCard(product);
    productsContainer.appendChild(card);
  });
};

const createCard = (productData) => {
  const {
    id,
    productName,
    productDescription,
    productPrice,
    rating,
    productThumbnail,
  } = productData;
  const getRating = () => {
    let starsHTML = "";

    for (let index = 0; index < rating; index++) {
      starsHTML += `<h6 class="px-star-color"><i class="bi bi-star-fill"></i></h6>`;
    }

    return starsHTML;
  };
  const card = $.createElement("div");
  card.setAttribute("class", "px-card border my-4 mx-2 shadow");
  card.setAttribute("id", id);
  card.innerHTML = `
    <img loading="lazy" src="${productThumbnail}" class="px-card-image" alt="${productName}">
     <div class="px-card-body p-4">
            <h5>${productName}</h5>
            <div class="d-flex my-2">
         
        ${getRating()}
            </div>
            <small>
              ${productDescription.substring(0, 120)}...
            </small>
          <hr/>
              <div class="d-flex justify-content-between my-auto">
              <p class="text-sm my-auto">ARS: $${productPrice}</p>
              <button class="btn text-sm text-primary" id="${id}">Comprar</button>
            </div>
          </div>`;
  return card;
};

//Función auto invocada para iniciar el modulo
(() => {
  main();
  mapProducts();
})();

//Vacia el contenedor de los productos y coloca los productos segun sus categorias
function createfiltereddivsByCategory(category) {
  productsContainer.innerHTML = "";

  products.map((product) => {
    if (product.category == category) {
      const card = createCard(product);
      productsContainer.appendChild(card);
    }
  });
}
//Vacia el contenedor de los productos y coloca los productos por nombre
function createfiltereddivsByName(text) {
  productsContainer.innerHTML = "";

  products.map((product) => {
    if (product.productName.includes(text)) {
      const card = createCard(product);
      productsContainer.appendChild(card);
    }
  });
}
//Le agrego la funcion al input text y un event listener que verifique su valor en tiempo real
inputText.addEventListener("input", function (event) {
  createfiltereddivsByName(inputText.value);
  buttonEvent();
});

//le agrego la funcion al select y un event listener para que verifique su valor cada vez que cambia
categoria.addEventListener("change", function () {
  switch (categoria.value) {
    case "cpu":
      createfiltereddivsByCategory("cpu");
      break;

    case "gpu":
      createfiltereddivsByCategory("gpu");
      break;

    case "perif":
      createfiltereddivsByCategory("perif");
      break;

    case "mem":
      createfiltereddivsByCategory("mem");
      break;

    case "ram":
      createfiltereddivsByCategory("ram");
      break;

    case "mother":
      createfiltereddivsByCategory("mother");
      break;

    case "sof":
      createfiltereddivsByCategory("sof");
      break;

    default:
      mapProducts();
  }
  buttonEvent();
});

//Guardo todos los botones de los productos segun su clase
const buttons = document.getElementsByClassName("btn text-sm text-primary");

//A cada boton le agrego una funcion de guardar la id del producto donde se encuentra el boton en el localStorage
function buttonEvent() {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
      const actualProduct = products[this.id - 1];
      localStorage.setItem("productId", actualProduct.id);
      window.location.href = "./simple-product.html"
    })
    
}
};
buttonEvent();