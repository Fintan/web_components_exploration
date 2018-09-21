import { observable, computed, action } from 'mobx';
import defaultConfig from './default-config';

export default class Model {

    @observable contentConfig = defaultConfig;

    @observable appState = {
        selectedIndex: undefined,
        feedbackText: '',
        attempts: 0,
        maxAttemptsReached: false,
        stage: 'activity_init'
    };

    @action
    selectOption(index) {
        this.appState.selectedIndex = Number(index);
        this.appState.feedbackText = '';
        this.appState.stage = 'activity_started';
        if(this.appState.attempts === this.contentConfig.MaxAttempts) {
            this.appState.maxAttemptsReached = true;
        }
    }

    @action
    checkAnswer() {
        if(this.appState.selectedIndex !== undefined && !this.appState.maxAttemptsReached) {
            if(this.appState.attempts < this.contentConfig.MaxAttempts) {
                this.appState.attempts++;
            }else {
                this.appState.maxAttemptsReached = true;
            }
            if(this.contentConfig.options.length > this.appState.selectedIndex && !this.appState.maxAttemptsReached) {
                const selectedOption = this.contentConfig.options[this.appState.selectedIndex];
                this.appState.feedbackText = selectedOption.CorrectAnswer ? this.contentConfig.FinalCannedResponse : selectedOption.Feedback;
            }
            this.appState.stage = 'submit_answer';
        }
    }

    @action
    revealAnswer() {
        this.appState.feedbackText = this.contentConfig.FinalIncorrectFeedback;
        this.contentConfig.options.forEach(({ CorrectAnswer }, i ) => {
            if(CorrectAnswer === true) {
                this.appState.selectedIndex = i;
            }
        });
        this.appState.stage = 'give_up';
    }

    @action
    tryAgain() {
        this.resetAppState();
    }

    resetAppState() {
        this.appState = {
            selectedIndex: undefined,
            feedbackText: '',
            attempts: 0,
            maxAttemptsReached: false,
            stage: 'activity_init'
        };
    }

}
