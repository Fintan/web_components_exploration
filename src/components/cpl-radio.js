import { LitElement, html } from '@polymer/lit-element';

export default class Radio extends LitElement {

    static get properties() {
        return {
            name: { type: String },
            text: { type: String },
            index: { type: Number },
            enable: {type: Boolean }
        };
    }

    constructor() {
        super();
        this.enable = true;
    }

    render() {
        console.log('this.text', this.text, 'index', this.index, this.enable, this.name);
        const { name, text, index, enable } = this;
        return html`
            <div key=${this.index}>
                <input
                    name="${name}"
                    className="answer answer-input"
                    type="radio"
                    value="item-${index}"
                    @onClick=${() => this._handleClick({ index })}
                />
                <label for="${index}">${text}</label>
            </div>
        `;
    }
                    // disabled="${!this.enable}"

    _handleClick() {
        this.dispatchEvent(new CustomEvent('radio_click', { bubbles: true, detail: this.index }));
    }

}

customElements.define('cpl-radio', Radio);