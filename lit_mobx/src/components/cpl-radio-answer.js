import { LitElement, html } from '@polymer/lit-element';

export default class RadioAnswer extends LitElement {

    static get properties() {
        return {
            text: { type: String },
            index: { type: Number },
            enable: {type: Boolean },
            checked: {type: Boolean },
            revealCorrectness: {type: Boolean },
            isCorrect: {type: Boolean }
        };
    }

    constructor() {
        super();
        this.enable = true;
        this.checked = false;
    }

    get styles() {
        return html`
            .correct { color: green; }
            .incorrect { color: red; }
        `;
    }

    render() {
        const { text, index, enable, checked } = this;
        
        if(checked === true) {
            return html`
                ${html`<style>${this.styles}</style>`}
                <div 
                    class="${this._addCssClass()}" 
                    @click="${(e) => this._handleClick(e)}"
                    >
                    <input
                        class="answer answer-input"
                        type="radio"
                        value="${index}"
                        ?checked=${this.checked}
                        />
                    <label for="${index}">${text}</label>
                </div>
            `;
        }else {
            //bug with boolean attributes
            // ?checked=${this.checked}
            // ?disabled=${!this.enable}
            return html`
                ${html`<style>.correct { color: green; }
                            .incorrect { color: red; }</style>`}
                <div 
                    class="${this._addCssClass()}"     
                    @click="${(e) => this._handleClick(e)}"
                    >
                    <input
                        class="answer answer-input"
                        type="radio"
                        value="${index}"
                        ?checked=${this.checked}
                        />
                    <label for="${index}">${text}</label>
                </div>
            `;
        }
    }

    _addCssClass() {
        const { revealCorrectness, isCorrect } = this;
        if(revealCorrectness && isCorrect) {
            return 'correct';
        }else if(revealCorrectness && !isCorrect) {
            return 'incorrect';
        }
    }

    _handleClick(e) {
        this.dispatchEvent(new CustomEvent('radio_click', { bubbles: true, composed: true, detail: this.index }));
    }

}

customElements.define('cpl-radio-answer', RadioAnswer);