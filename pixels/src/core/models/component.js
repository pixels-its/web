export default class Component {
  component = "";
  constructor(tagName, options) {
    this.component = this.create({
      tagName,
      parent: options.parent,
      content: options.content,
      onClick: options.onClick,
      attributes: options.attributes,
      style: options.style,
    });
    if (options.childrens && options.childrens.length > 0) {
      options.childrens.forEach((child) => child());
    }
  }
  toChild = () => this.component.outerHTML;
  /**
   * Metodo para crear e insertar un componente en el html.
   *
   * @param { CreateComponentOptions } options - Opciones para personalizar el component
   * @example
    ComponentMaker.create("container",{
        parent:"#content-area",
        tagName:"button",
        class:"btn btn red",
        content:`<p>holaMundo</p>`
    })
   */
  create(options) {
    const container = document.querySelector(options.parent || "#root");
    const newHtmlTag = document.createElement(options.tagName);
    if (options.style) {
      Object.assign(newHtmlTag.style, options.style);
    }
    if (options.onClick) {
      newHtmlTag.onclick = options.onClick;
    }
    if (options.attributes) {
      for (const [key, value] of Object.entries(options.attributes)) {
        newHtmlTag.setAttribute(key, value);
      }
    }
    const createdTag = container.appendChild(newHtmlTag);
    if (options.content) createdTag.innerHTML = options.content;

    return createdTag;
  }
}
