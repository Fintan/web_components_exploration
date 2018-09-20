import { observable, computed, action } from 'mobx';
import defaultConfig from './default-config';

export default class Model {

    @observable contentConfig = defaultConfig;

    @observable appState = {
        selectedIndex: undefined,
        result: undefined,
        giveup: undefined,
        feedbackText: '',
        attempts: 0,
        maxAttemptsReached: false
    };

    @action
    selectOption(index) {
        this.appState.selectedIndex = Number(index);
        this.appState.feedbackText = '';
    }

    @action
    checkAnswer() {
        if(this.appState.selectedIndex !== undefined) {
            if(this.contentConfig.options.length > this.appState.selectedIndex) {
                const selectedOption = this.contentConfig.options[this.appState.selectedIndex];
                this.appState.result = selectedOption.CorrectAnswer;
                this.appState.feedbackText = this.appState.result ? this.contentConfig.FinalCannedResponse : selectedOption.Feedback;
            }
            this.appState.attempts++;
            if(this.appState.attempts >= this.contentConfig.MaxAttempts) {
                this.appState.maxAttemptsReached = true;
                this.appState.feedbackText = this.contentConfig.FinalIncorrectFeedback;
            }
        }
    }

    @action
    showAnswer() {
        this.appState.giveup = true;
        this.appState.feedbackText = this.contentConfig.FinalIncorrectFeedback;
    }

    @action
    tryAgain() {
        console.log('tryAgain');
        this.appState = {
            selectedIndex: undefined,
            result: undefined,
            giveup: undefined,
            feedbackText: '',
            attempts: 0,
            maxAttemptsReached: false
        };
    }

}
