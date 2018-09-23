import {LitElement, html} from '@polymer/lit-element';
import Header from './components/cpl-header';
import ActivityArea from './components/cpl-activity-area';
import FooterArea from './components/cpl-footer';
import Questions from './components/cpl-questions';
// import Greeting from './components/greeting-view';
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
        //so that components can't directly mutate state
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
        <cpl-footer .state="${this.appState}"></cpl-footer>
        <cpl-questions></cpl-questions>
        `;
        // <greeting-view></greeting-view>
    }

    connectedCallback() {
        this.renderRoot.addEventListener('feedback', (e) => {
            if(e.detail === 'check_answer') {
                this.model.checkAnswer();
            }else if(e.detail === 'try_again') {
                this.model.tryAgain();
            }else if(e.detail === 'show_answer') {
                this.model.revealAnswer();
            }
        });
        this.renderRoot.addEventListener('radio_click', (e) => {
            this.model.selectOption(e.detail);
        });
        this.renderRoot.addEventListener('load_question', (e) => {
            this.model.loadConfig(e.detail);
        });
    }

    disconnectedCallback() {
        // this.renderRoot.removeEventListener('feedback', ...)
        // this.renderRoot.removeEventListener('radio_click', ...)
    }

}

customElements.define('mcq-app', McqApp);