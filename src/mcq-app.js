import {LitElement, html} from '@polymer/lit-element';
import MyElement from './components/my-element';
import Header from './components/cpl-header';
import ActivityArea from './components/cpl-activity-area';
import Model from './model/model';
// import { store } from './model/model';
import { autorun } from 'mobx';
import {Radio} from "@material/mwc-radio"

const m = new Model();
window.m = m;


export default class McqApp extends LitElement {

    static get properties() {
        return {
            config: Object,
            options: { type: Array }
        };
    }

    constructor() {
        super();
        this.model = m;
        window.mcq = this;
        this.config = { ...m.contentConfig };
        this.options = m.contentConfig.options.map(op => {
            return { AnswerText: op.AnswerText }
        });
        autorun(() => {
            console.log('any change??');
            //update copy of config
            this.config = { ...m.contentConfig };
            //update copy of options
            this.options = m.contentConfig.options.map(op => {
                return { 
                    AnswerText: op.AnswerText 
                };
            });
        });

    }

    render(){
        return html`
        <cpl-header activitytitle="${this.config.ActivityTitle}" questionstem="${this.config.QuestionStem}"></cpl-header>
        <cpl-activity-area .options="${this.options}"></cpl-activity-area>

        <mwc-radio id="s.1" name="tmp"></mwc-radio>
        <mwc-radio id="s.2" name="tmp" checked></mwc-radio>
        <mwc-radio id="s.3" name="tmp"></mwc-radio>
        `;
    }

    connectedCallback() {
        this.renderRoot.addEventListener('title_change', (e) => this.model.contentConfig.ActivityTitle = e.detail);
        this.renderRoot.addEventListener('radio_click', (e) => {
            console.log('clicked', e.detail, this.model.contentConfig.options[e.detail]);
        });
    }

    disconnectedCallback() {

    }

}

customElements.define('mcq-app', McqApp);