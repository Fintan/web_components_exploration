import { LitElement, html } from '@polymer/lit-element';

export default class Questions extends LitElement {

    render() {
        
        return html`
                <section class="anatomy-feedback-area" style="margin-top: 30px;">
                    <div class="button-panel" style="margin-top: 30px;">
                          <button @click="${(e) => this._clickHandler('./q1.json')}">Question 1</button>
                          <button @click="${(e) => this._clickHandler('./q2.json')}">Question 2</button>
                          <button @click="${(e) => this._clickHandler('./q3.json')}">Question 3</button>
                    </div>
                </section>
        `;
    }

    _clickHandler(buttonType) {
        this.dispatchEvent(new CustomEvent('load_question', { bubbles: true, composed: true, detail: buttonType }));
    }

}

customElements.define('cpl-questions', Questions);