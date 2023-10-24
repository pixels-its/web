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
   * @param {ComponentOptions} options - Configuraciones del componente
   * @param {string} base - ruta absoluta del archivo
  
   */
  constructor(base, options) {
    super();
    this.htmlPath = this.resolveUrl(options.html, base);
    this.cssPath = this.resolveUrl(options.css, base) ?? "";
    this.jsPath = this.resolveUrl(options.js, base) ?? "";
  }
  connectedCallback() {
    this.render(this.html, this.base);
  }
  async renderContext(htmlContent) {
    this.innerHTML = htmlContent;
    if (this.options && this.options.css) await this.linkCss();

    if (this.options && this.options.js) await this.linkJs();
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
  async linkJs() {
    try {
      const script = document.createElement("script");
      script.src = this.jsPath;
      script.type = "module";
      this.appendChild(script);
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
