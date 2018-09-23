import { LitElement, html } from '@polymer/lit-element';
import Radio from './cpl-radio-answer';

export default class ActivityArea extends LitElement {

    static get properties() {
        return {
            options: { type: Array },
            state: { type: Object }
        };
    }

    constructor() {
        super();
        this.options = [];
    }

    render() {
        return html`
            <section class="form-container">
                    ${
                        this.options.map((item, i) => {
                            return html`<cpl-radio-answer 
                                            .index="${i}"
                                            .isCorrect=${item.CorrectAnswer}
                                            .revealCorrectness=${this.state.stage === 'give_up'}
                                            .text="${item.AnswerText}" 
                                            .checked="${this.state.selectedIndex === i}"
                                            .enable="false"
                                        ></cpl-radio-answer>` 
                        })
                    }
            </section>
        `;
    }

}

customElements.define('cpl-activity-area', ActivityArea);
