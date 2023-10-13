import Component from "../core/models/component";

export const Footer = () => {
  return new Component("footer", {
    parent: "#home",
    content: "2023 Pixels Todos los derechos reservados",
    attributes: {
      id: "footer",
      class: "container text-light bg-secondary p-4 text-center",
    },
  });
};
