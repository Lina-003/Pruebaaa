import * as components from './components/index.js';
import data from './components/data.js';

console.log(data);

class AppContainer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    data.forEach((element) => {
      this.shadowRoot.innerHTML += `
      <my-profile uuid="${element.id}" name="${element.name}" age="${element.age}" miles="${element.miles}"></my-profile>
      `;
    });
    this.shadowRoot.innerHTML += `<my-counter></my-counter>`;
  }
}

customElements.define('app-container', AppContainer);
