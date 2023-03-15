class ButtonCount extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.times_clicked = 0;
    this.update();
  }

  addOne() {
    this.times_clicked += 1;
    this.update();
  }

  update() {
    this.shadowRoot.innerHTML = `<button>Times Clicked: ${this.times_clicked}</button>`;
  }
}

window.customElements.define("button-count", ButtonCount);

export default ButtonCount;
