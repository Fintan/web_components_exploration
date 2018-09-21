export class GreetingView extends HTMLElement {
    getName() {
        return 'world';
    }
    connectedCallback() {
        const shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.innerHTML = `
        <style>
            :root {
              box-shadow: 1px 1px 1px gray;
            }
            h1 {
              color: red;
            }
        </style>
        <h1>Hello, ${this.getName()}</h1>
        `;
    }
}

customElements.define('greeting-view', GreetingView);