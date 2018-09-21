import { LitElement, html } from '@polymer/lit-element';

export default class FooterArea extends LitElement {

    static get properties() {
        return {
            options: { type: Array },
            state: { type: Object }
        };
    }

    render() {
        const { 
            feedbackText,
            maxAttemptsReached,
            stage
        } = this.state;

        return html`
                <section class="anatomy-feedback-area" style="margin-top: 30px;">
                    <span class="feedback">
                        ${this.state.feedbackText}
                    </span>
                    <div class="button-panel" style="margin-top: 30px;">
                          <button @click="${(e) => this._clickHandler('show_answer')}">Show</button>
                          <button @click="${(e) => this._clickHandler('try_again')}" ?disabled=${!maxAttemptsReached && stage !== 'give_up'}>Try Again</button>
                          <button @click="${(e) => this._clickHandler('check_answer')}" ?disabled=${maxAttemptsReached || stage === 'give_up'}>Check</button>
                    </div>
                </section>
        `;
    }

    _clickHandler(buttonType) {
        this.dispatchEvent(new CustomEvent('feedback', { bubbles: true, composed: true, detail: buttonType }));
    }

}

customElements.define('cpl-footer', FooterArea);