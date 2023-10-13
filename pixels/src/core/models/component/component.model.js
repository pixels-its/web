/**
 * Crea un componente web,
 * Lee el archivo html y lo renderiza.
 * @example
     class Carousel extends Component{
          constructor(){
            super("./carousel.component.html","./carousel.component.css",import.meta.url)
          }
      }
 */
export class Component extends HTMLElement {
  /**
   *
   * @param {string} html - ruta del archivo html
   * @param {string} css - ruta del archivo css
   * @param {string} base - ruta absoluta del archivo
  
   */
  constructor(html, css = "", base = import.meta.url) {
    super();
    this.options = options;
    this.htmlPath = this.resolveUrl(html, base);
    this.cssPath = this.resolveUrl(css, base);
  }
  connectedCallback() {
    this.render(this.html, this.base);
  }
  async renderContext(htmlContent) {
    this.innerHTML = htmlContent;
    await this.linkCss();
  }
  resolveUrl(relativePath, base) {
    const relativeURL = new URL(relativePath, base);
    return relativeURL.pathname;
  }

  async linkCss() {
    try {
      const cssContent = `@import url(${this.cssPath})`;

      const style = document.createElement("style");
      style.textContent = cssContent;
      this.appendChild(style);
    } catch (error) {
      console.error("Error al cargar el archivo CSS:", error);
    }
  }
  async render() {
    try {
      const response = await fetch(this.htmlPath);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const htmlContent = await response.text();

      this.renderContext(htmlContent);
    } catch (error) {
      console.error("Fallo al cargar componente:", error);
    }
  }
  /**
   * Registra el componente para utilizarlo en un archivo html.
   *
   * @param {String} componentName - Nombre del componente que se utilizará en el html
   * @param {Component} component - Clase a registrar
   *
   */
  static register = (componentName, component) =>
    window.customElements.define(componentName, component);
}
