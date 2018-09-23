import { h, app } from 'hyperapp';
import hyperx from 'hyperx';

export const html = hyperx(h);
export const jsx = h;

export class HyperBase extends HTMLElement {

    static get properties() {
        return {};
    }

    //private (action methods map to prop names)
    get actions() { return this._actions }

    _actions = {}

    constructor() {
        super();
        this._createActions();
        this.hypeState = app(this._createProps(), this.actions, this.render.bind(this), this.attachShadow({mode: 'open'}));
    }

    render(props, actions) {
        return html`<p>${this.constructor.name} needs a render method that returns a template literal.</p>`;
    }

    _createProps() {
        const properties = this.constructor.properties;
        const ___props = Object.keys(properties)
            .map(key => {
                //aligns with lit element convention of props directly on 'this'
                this[key] = properties[key].default || undefined; 
                return { [key]: properties[key].default || undefined }
            })
            .reduce((cur, prev) => ({ ...prev, ...cur }), {});
        return ___props;
    }

    _createActions() {
        this._actions = Object.keys(this.constructor.properties)
            .map(key => ({ [key]: value => state => {
                    //aligns with lit element convention of props directly on 'this'
                    this[key] = value; 
                    return { [key]: value };
                }
            }))
            .reduce((cur, prev) => ({ ...prev, ...cur }), {});
    }

    static get observedAttributes() { 
        return Object.keys(this.properties || []); 
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if(this.hypeState[name]) {  
            //invoke state methods so that properties reflect attributes
            //this effectively makes properties mutable (unlike hyperapp)
            this.hypeState[name](newValue);
        }
    }
}

customElements.define('hyper-base', HyperBase);