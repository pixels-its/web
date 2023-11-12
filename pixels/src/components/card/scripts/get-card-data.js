console.log("Hola mundo");

const $ = document;
const data = [
  {
    id: 0,
    title: "Mi tarjeta",
    picture: "https://picsum.photos/512/512",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis aut eaque dignissimos quae? Eius ducimus accusantium optio ratione ea, quidem maiores consectetur tenetur rerum quas sunt ex facilis nemo quod.",
  },
  {
    id: 1,
    title: "Una segunda tarjeta",
    picture: "https://picsum.photos/512/512",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis aut eaque dignissimos quae? Eius ducimus accusantium optio ratione ea, quidem maiores consectetur tenetur rerum quas sunt ex facilis nemo quod.",
  },
  {
    id: 2,
    title: "Una segunda tarjeta",
    picture: "https://picsum.photos/512/512",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis aut eaque dignissimos quae? Eius ducimus accusantium optio ratione ea, quidem maiores consectetur tenetur rerum quas sunt ex facilis nemo quod.",
  },
];
/**
 * <div class="card text-bg-primary mb-3" style="max-width: 18rem">
  
</div>

 */
function createContainerData() {
  //Bootstrap script
  const bootstrapLink = $.createElement("px-bootstrap");
  $.head.appendChild(bootstrapLink);
  let container = $.createElement("div"); //<div class="card text-bg-primary mb-3" style="max-width: 18rem">
  container.setAttribute("id", "data-container");
  container.setAttribute("class", "card text-bg-primary mb-3 ");
  container.setAttribute("style", "max-width: 18rem");
  $.body.appendChild(container);

  /**
   * <div class="card-header">Title</div>
            <div class="card-body">
                <h5 class="card-title">Primary card title</h5>
                <p class="card-text">
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </p>
  </div>
   */
  data.map((obj) => {
    const divider = $.createElement("hr");

    const cardHeader = $.createElement("div");
    cardHeader.setAttribute("id", "card-header");
    cardHeader.setAttribute("class", "card-header");
    cardHeader.innerHTML = `
      ${obj.title}
      `;
    const cardBody = $.createElement("div");
    cardBody.setAttribute("id", "card-body");
    cardBody.setAttribute("class", "card-body");
    cardBody.innerHTML = `
     <h5 class="card-title">${obj.title}</h5>
                <p class="card-text">
                ${obj.description}
                </p>
      `;
    container.appendChild(cardHeader);
    container.appendChild(cardBody);
    container.appendChild(divider);
  });
}

createContainerData();
