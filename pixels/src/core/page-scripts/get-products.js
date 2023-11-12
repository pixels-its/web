import { SeedService } from "../services/seed.service";
import { Handlers } from "../models/handlers/handlers";

const $ = document; // Guardo el dom en una variable
const handlers = new Handlers(); // Manejadores de eventos y obtención de elementos
const seeds = new SeedService();
const products = seeds.get("products");
const main = () => {
  const bodyContainer = handlers.getElement("body-container");
  const productsContainer = $.createElement("div");
  productsContainer.setAttribute("id", "productsContainer");
  productsContainer.setAttribute("class", "card-group justify-content-center");
  bodyContainer.appendChild(productsContainer);
};

const mapProducts = () => {
  const productsContainer = handlers.getElement("productsContainer");

  products.map((product) => {
    const card = createCard(product);
    productsContainer.appendChild(card);
  });
};

const createCard = (productData) => {
  const { id, productName, productDescription, productPrice } = productData;
  const card = $.createElement("div");
  card.setAttribute("class", "px-card border my-4 mx-2 shadow");
  card.setAttribute("id", id);
  card.innerHTML = `
    <img loading="lazy" src="https://picsum.photos/512/200" class="px-card-image" alt="${productName}">
     <div class="px-card-body p-4">
            <h4>RTX 3090</h4>
            <div class="stars my-2">⭐️⭐️⭐️⭐️</div>
            <small>
              ${productDescription.substring(0, 120)}...
            </small>
          <hr/>
              <div class="d-flex justify-content-between my-auto">
              <p class="text-sm my-auto">ARS: $${productPrice}</p>
              <button class="btn text-sm text-primary">Comprar</button>
            </div>
          </div>`;
  return card;
};

//Función auto invocada para iniciar el modulo
(() => {
  main();
  mapProducts();
})();
