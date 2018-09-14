import {LitElement, html} from '@polymer/lit-element';
// import {repeat} from 'lit-html/lib/repeat';

export default class MyElement extends LitElement {

    static get properties() {
        return {
            mood: { type: String }
        };
    }

    constructor() {
        super();
        this.mood = 'happy';
    }

    render() {
        return html`<style> .mood { color: green; } </style>

        Web Components are <span class="mood">${this.mood.repeat(3)}</span>! 
        ${'ninja '.repeat(3)}
        <slot name="header"></slot>
        <ul>
        </ul>
        <slot name="content"></slot>

        <div>testing</div>

         `;
        
    }
        // ${ repeat([{name: 'fintan'}, {name: 'james'}, {name: 'john'}], item => html`<li>${item.name}</li>` )}

    _render() {
        return this.render();
    }

}

customElements.define('my-element', MyElement);