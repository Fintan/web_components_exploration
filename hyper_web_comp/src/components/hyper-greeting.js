import { h, app } from 'hyperapp';
import hyperx from 'hyperx';

const html = hyperx(h);

export class HyperGreetingView extends HTMLElement {

    //private
    props = {
        count: 0,
        hello: 'world',
        name: 'success'
    };

    testing = '??';

    //private
    get actions() {
        return {
            down: value => state => ({ count: state.count - value }),
            up: value => state => ({ count: state.count + value }),
            count: value => state => ({ count: value })
        }
    }

    constructor() {
        super();

        window._acts = Object.keys(this.props).map(key => {
            return { [key]: value => state => ({ [key]: value }) };
        }).reduce((cur, prev) => {
            console.log('cur[0]', cur);
            return { ...prev, ...cur };
        }, {});

        const shadowRoot = this.attachShadow({mode: 'open'});
        this.hypeState = app(this.props, this.actions, this.render.bind(this), shadowRoot);
        window.comp = this;
    }

    render(state, actions) {
        return html`
        <div>
            <h1>hyper greeting: ${state.count} ${this.testing}</h1>
            <button onclick=${() => actions.down(1)}>-</button>
            <button onclick=${() => actions.up(1)}>+</button>
        </div>
        `;
    }

    static get observedAttributes() { return ['testing', 'title', 'count']; }

    attributeChangedCallback(name, oldValue, newValue) {
        console.log('attributeChangedCallback', name, oldValue, newValue);
        if(this[name]) { //tmp, don't leverage this
            this[name] = newValue;
        }else if(this.hypeState[name]) {  //reflect state method names to attributes
            this.hypeState[name](newValue);
        }
        
    }
}

customElements.define('hyper-greeting-view', HyperGreetingView);