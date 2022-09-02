class MyCounter extends HTMLElement {
    static get observedAttributes() {
      return ["count"];
    }
  
    attributeChangedCallback(propName, oldValue, newValue) {
      console.log("changed");
      this[propName] = newValue;
      this.mount();
    }
  
    connectedCallback() {
      console.log("mounted");
      this.mount();
    }
  
    dissconnectedCallback() {
      console.log("unmounted");
      this.removeEventListeners();
    }
  
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.onButtonClicked = this.onButtonClicked.bind(this);
    }
  
    mount() {
      this.render();
      this.addEventListeners();
    }
  
    addEventListeners() {
      this.shadowRoot
        .querySelector("button")
        .addEventListener("click", this.onButtonClicked);
    }
  
    render() {
      console.log("render");
      this.shadowRoot.innerHTML = `
          <section1>
            ${this.count || 1}
            <button> 🧡 </button>
          </section1>
      `;
    }
  
    removeEventListeners() {
      this.shadowRoot
        .querySelector("button")
        .removeEventListener("click", this.onButtonClicked);
    }
  
    onButtonClicked() {
      console.log("clicked");
      const currentValue = Number(this.getAttribute("count")) || 0;
      this.setAttribute("count", currentValue + 1);
    }
}
  
customElements.define("my-counter", MyCounter);
export default MyCounter;
  