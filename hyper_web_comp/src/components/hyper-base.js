import { h, app } from 'hyperapp';
import hyperx from 'hyperx';

export const html = hyperx(h);

export class HyperBase extends HTMLElement {

    //private (props)
    static get properties() {
        return {
            count: 0,
            title: 'This is the title',
            description: 'A descriptions sdgsdg'
        };
    }

    //private (action methods map to prop names)
    get actions() { return this._actions }

    _actions = {
        count: value => state => ({ count: value })
    }

    constructor() {
        super();
        this._createActions();
        this.hypeState = app(this.constructor.properties, this.actions, this.render.bind(this), this.attachShadow({mode: 'open'}));
    }

    render(props, actions) {
        const { title, description } = props;
        return html`
        <div>
            <h1>${title}</h1>
            <p>${description}</p>
        </div>
        `;
    }

    _createActions() {
        this._actions = Object.keys(this.constructor.properties)
            .map(key => {
                return { [key]: value => state => ({ [key]: value }) };
            }).reduce((cur, prev) => {
                return { ...prev, ...cur };
            }, {});
    }

    static get observedAttributes() { 
        return Object.keys(this.properties || []); 
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if(this.hypeState[name]) {  //invoke state methods so that properties reflect attributes
            this.hypeState[name](newValue);
        }
    }
}

customElements.define('hyper-base', HyperBase);