import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";
import Component from "../core/models/component";

export const Body = () => {
  return new Component("div", {
    parent: "#home",
    onClick: handleClick,
    content: `<h1 class="text-center ">Hola mundo</h1>`,
    style: {
      width: "720px",
    },
    attributes: {
      id: "hero",
      class: "text-light bg-danger p-4",
    },
  });
};

export const Home = () => {
  return new Component("div", {
    attributes: {
      id: "home",
      class: "container",
    },
    childrens: [Navbar, Body, Footer],
  });
};
export const Home2 = () => {
  return new Component("div", {
    attributes: {
      id: "home",
      class: "container",
    },
    childrens: [Navbar, Body, Footer],
  });
};
