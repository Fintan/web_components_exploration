import { LitElement, html, property } from '@polymer/lit-element';


export default class Header extends LitElement {

    /*static get properties() {
        return {
            activityTitle: { type: String },
            questionStem: { type: String }
        };
    }*/

    @property({ type: String })
    activityTitle = '';

    @property({ type: String })
    questionStem = '';

    render() {
        return html`
            <div className="style-scope explib-widget-title-block">
                <section className="row style-scope explib-widget-title-block">
                    <div className="anatomy-title col col-xs-12 hmhwidget-activity-title-bg-color fullscreen-capture style-scope explib-widget-title-block">
                        <h6 className="style-scope explib-widget-title-block">
                            <p className="explib-generic-padding style-scope explib-widget-title-block">
                                ${this.activityTitle}
                            </p>
                        </h6>
                    </div>
                </section>

                <section className="row style-scope explib-widget-title-block">
                    <div className="anatomy-stem col col-xs-12 hmhwidget-activity-stem-area-bg-color fullscreen-capture style-scope explib-widget-title-block">
                        <div className="style-scope explib-widget-title-block">
                            <p className="explib-generic-padding style-scope explib-widget-title-block">
                                ${this.questionStem}
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        `;
    }

}

customElements.define('cpl-header', Header);
