import { products } from "../seeds/products-seeds";

const mostSold = document.querySelector(".px-most-sold");

const chosenProducts = [];

function createRandomProducts() {
  while (chosenProducts.length < 3) {
    let numAleatorio = Math.floor(Math.random() * products.length);

    if (!chosenProducts.includes(products[numAleatorio])) {
      chosenProducts.push(products[numAleatorio]);
    }
  }
}

createRandomProducts();

const mapProducts = () => {
  chosenProducts.map((product) => {
    const card = createCard(product);
    mostSold.appendChild(card);
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
  const card = document.createElement("div");
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

mapProducts();

//Guardo todos los botones de los productos segun su clase
const buttons = document.getElementsByClassName("btn text-sm text-primary");

//A cada boton le agrego una funcion de guardar la id del producto donde se encuentra el boton en el localStorage
function buttonEvent() {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
      const actualProduct = products[this.id - 1];
      localStorage.setItem("productId", actualProduct.id);
    });
  }
}

buttonEvent();
