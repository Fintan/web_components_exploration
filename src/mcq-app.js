import {LitElement, html} from '@polymer/lit-element';
import Header from './components/cpl-header';
import ActivityArea from './components/cpl-activity-area';
import FeedbackArea from './components/cpl-feedback-area';
import Model from './model/model';
import { autorun } from 'mobx';

export default class McqApp extends LitElement {

    static get properties() {
        return {
            config: Object,
            options: { type: Array },
            appState: { type: Object }
        };
    }

    constructor() {
        super();
        this.model = new Model();
        this.updateProps();
        autorun(() => this.updateProps());
        window.mcq = this;
    }

    updateProps() {
        //update props with a copy of the relevant state
        this.config = { ...this.model.contentConfig };
        this.options = this.model.contentConfig.options.map(op => {
            return { 
                AnswerText: op.AnswerText,
                CorrectAnswer: op.CorrectAnswer,
                Feedback: op.Feedback,
                CannedResponse: op.CannedResponse
            };
        });
        this.appState = { ...this.model.appState };
    }

    render(){
        return html`
        <cpl-header activitytitle="${this.config.ActivityTitle}" questionstem="${this.config.QuestionStem}"></cpl-header>
        <cpl-activity-area .options="${this.options}" .state="${this.appState}"></cpl-activity-area>
        <cpl-feedback-area .state="${this.appState}"></cpl-feedback-area>
        `;
    }

    connectedCallback() {
        this.renderRoot.addEventListener('title_change', (e) => this.model.contentConfig.ActivityTitle = e.detail);
        this.renderRoot.addEventListener('feedback', (e) => {
            if(e.detail === 'check_answer') {
                this.model.checkAnswer();
            }
        });
        this.renderRoot.addEventListener('radio_click', (e) => {
            this.model.setSelectedOption(e.detail);
        });
    }

    disconnectedCallback() {

    }

}

customElements.define('mcq-app', McqApp);