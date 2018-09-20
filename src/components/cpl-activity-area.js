import { LitElement, html } from '@polymer/lit-element';
import Radio from './cpl-radio';

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
            <div className="row fill style-scope explib-mcq-mrq">
            <section className="form-container col-xs-12 has-text-options style-scope multiple-choice">
                <div className="explib-widget-multiple-choice style-scope multiple-choice">
                    <div id="answer-bank" className="row main style-scope multiple-choice">
                        <div className="multiple-choice-text-options style-scope multiple-choice">
                            ${
                                this.options.map((item, i) => {
                                    return html`<cpl-radio .index="${i}" name="testing" text="${item.AnswerText}" .checked="${this.state.selectedIndex === i}"></cpl-radio>` 
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
        </div>
        `;
    }
}

customElements.define('cpl-activity-area', ActivityArea);
