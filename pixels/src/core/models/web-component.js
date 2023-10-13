export class WebComponent extends HTMLElement {
  htmlPath = "";
  cssPath = "";
  constructor(html, css = "", base = import.meta.url) {
    super();
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

      // Inserta el contenido del archivo CSS en el shadow DOM como una etiqueta <style>
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
  static register = (componentName, component) =>
    window.customElements.define(componentName, component);
}
