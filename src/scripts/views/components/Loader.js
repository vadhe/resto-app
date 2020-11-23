class Loader extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  showHide(show) {}
  render() {
    this.innerHTML = `
    <div class="loader">
      <div class="lds-dual-ring"></div>
    </div>
    `;
  }
}

customElements.define('load-der', Loader);
