import {LitElement, html} from '@polymer/lit-element';

export default class Square extends LitElement {

    static get properties() {
        return {
            colour: { type: String }
        };
    }

    constructor() {
        super();
        this.colour = 'blue';
    }

    render() {
        return html`<style> .colour { color: ${this.colour}; } </style>
        I'm a ${this.colour} square <span class="colour">square</span>!`;
    }

    //??
    _render() {
        return this.render();
    }

}

customElements.define('cpl-square', Square);