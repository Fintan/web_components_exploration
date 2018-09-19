import {LitElement, html} from '@polymer/lit-element';
// import {repeat} from 'lit-html/lib/repeat';

export default class MyElement extends LitElement {

    static get properties() {
        return {
            mood: { type: String },
            title: { type: String },
            config: { type: Object }
        };
    }

    constructor() {
        super();
        this.config = { };
        this.mood = 'happy';
        this.title = 'plain title';
        
        setTimeout(()=> this.mood = 'sad', 3000);
    }

    render() {
        console.log('this.config.ActivityTitle', this.config.ActivityTitle, 'this.title', this.title);
        return html`<style> .mood { color: green; } </style>

        Web Components are <span class="mood">${this.mood.repeat(3)}</span>! 
        ${'ninja '.repeat(3)}
        <br>mood:${this.mood}
        <br>
        <slot name="header"></slot>
        <ul>
        </ul>
        <slot name="content"></slot>

        <div>testing</div>
        ${this.title}

        contentConfig:<br>
        config.ActivityTitle:${this.config.ActivityTitle}<br>
        <button value="testing" @click="${(e) => this._clickHandler(e)}">Click me</button>
        `;
        
    }
        // ${ repeat([{name: 'fintan'}, {name: 'james'}, {name: 'john'}], item => html`<li>${item.name}</li>` )}

    _clickHandler(e) {
        console.log('clicked!', e);
        this.dispatchEvent(new CustomEvent('title_change', { bubbles: true, detail: 'updated title.!.!'}));
    }

    _render() {
        return this.render();
    }

}

customElements.define('my-element', MyElement);