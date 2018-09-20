import { LitElement, html } from '@polymer/lit-element';

export default class Radio extends LitElement {

    static get properties() {
        return {
            name: { type: String },
            text: { type: String },
            index: { type: Number },
            enable: {type: Boolean },
            checked: {type: Boolean }
        };
    }

    constructor() {
        super();
        this.enable = true;
        this.checked = false;
    }

    render() {
        // console.log('this.text', this.text, 'index', this.index, this.enable, 'this.checked', this.checked);
        const { name, text, index, enable, checked } = this;
        if(this.checked === true) {
            return html`
                <div key=${this.index} @click="${(e) => this._handleClick(e)}">
                    <input
                        name="${name}"
                        className="answer answer-input"
                        type="radio"
                        value="item-${index}"
                        checked
                        />
                    <label for="${index}">${text}</label>
                </div>
            `;
        }
        return html`
            <div key=${this.index} @click="${(e) => this._handleClick(e)}">
                <input
                    name="${name}"
                    className="answer answer-input"
                    type="radio"
                    value="item-${index}"
                    />
                <label for="${index}">${text}</label>
            </div>
        `;
    }
                    // disabled="${!this.enable}"

    _handleClick(e) {
        this.dispatchEvent(new CustomEvent('radio_click', { bubbles: true, composed: true, detail: this.index }));
    }

}

customElements.define('cpl-radio', Radio);