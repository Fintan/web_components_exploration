import { LitElement, html } from '@polymer/lit-element';
import { repeat } from 'lit-html/directives/repeat'; //todo: transpile
import Radio from './cpl-radio';
import {Radio as Radio2} from "@material/mwc-radio"

export default class ActivityArea extends LitElement {

    static get properties() {
        return {
            options: { type: Array }
        };
    }

    constructor() {
        super();
        this.options = [];
    }

    render() {
        console.log('this.options', this.options.length);
        return html`
            <div className="row fill style-scope explib-mcq-mrq">
            
                            ${ 
                                repeat(this.options, (item, i) => {
                                    // console.log('item', item, i);
                                    // return html`<mwc-radio id="opt-${i}" name="ans">${item.AnswerText}</mwc-radio>`
                                    return html`<cpl-radio .index="${i}" name="testing" .text="${item.AnswerText}"></cpl-radio>` 
                                })
                            }

        </div>
        `;
        /*return html`
            <div className="row fill style-scope explib-mcq-mrq">
            <section className="form-container col-xs-12 has-text-options style-scope multiple-choice">
                <div className="explib-widget-multiple-choice style-scope multiple-choice">
                    <div id="answer-bank" className="row main style-scope multiple-choice">
                        <div className="multiple-choice-text-options style-scope multiple-choice">
                            ${ 
                                repeat(this.options, (item, i) => {
                                    return html`<cpl-radio index="${i}" text="${item.AnswerText}"></cpl-radio>` 
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
        </div>
        `;*/
    }


}

customElements.define('cpl-activity-area', ActivityArea);
