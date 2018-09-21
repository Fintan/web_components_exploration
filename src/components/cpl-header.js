import { LitElement, html, property } from '@polymer/lit-element';


export default class Header extends LitElement {

    static get properties() {
        return {
            activityTitle: { type: String },
            questionStem: { type: String }
        };
    }

    /*@property({ type: String })
    activityTitle = '';

    @property({ type: String })
    questionStem = '';*/

    render() {
        return html`
            <section>
                <div class="anatomy-title">
                    <h6 class="style-scope explib-widget-title-block">
                        <p>${this.activityTitle}</p>
                    </h6>
                </div>
            </section>
            <section>
                <div class="anatomy-stem">
                    <p>${this.questionStem}</p>
                </div>
            </section>
        `;
    }

}

customElements.define('cpl-header', Header);
