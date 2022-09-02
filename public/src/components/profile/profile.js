class MyProfile extends HTMLElement {
    // this is how you declare which props are you interested in
    static get observedAttributes() {
      return ['logo', 'uuid', 'name', 'age', 'miles', 'per1', 'per2', 'per3'];
    }
  
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.logo = './src/imagenes/logo.png'
      this.per1 = './src/imagenes/persona1.jpg'
      this.per2 = './src/imagenes/persona2.jpeg'
      this.per3 = './src/imagenes/persona3.jpg'
    }
  
    connectedCallback() {
      this.render();
    }
  
    attributeChangedCallback(propName, oldValue, newValue) {
      this[propName] = newValue;
      this.render();
    }
  
    render() {
      this.shadowRoot.innerHTML = `
          <link rel="stylesheet" href="/src/components/profile/styles.css">
          <section>
          <img src=${this.logo} class ="logo" alt=" "></img>
          <p></p>
          <img src=${this.per1} class ="img1" alt=" "></img>
          <img src=${this.per2} class ="img2" alt=" "></img>
          <img src=${this.per3} class ="img3" alt=" "></img>
          <h1>${this.name} ${this.age}</h1>
          <span><strong> ${this.miles}</strong><span>
          <p></p>
          </section>
        `;
    }

  }
  
  customElements.define('my-profile', MyProfile);
  export default MyProfile;
  