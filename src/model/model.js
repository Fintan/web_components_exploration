import { observable, computed, action } from 'mobx';
import defaultConfig from './default-config';

export default class Model {

    @observable contentConfig = defaultConfig;

    @observable appState = {
        selectedIndex: undefined,
        result: undefined
    };

    /*@action
    modifyItem() {
        this.contentConfig.options[0].AnswerText = 'will this one work?'
    }*/

    @action
    setSelectedOption(index) {
        this.appState.selectedIndex = Number(index);
    }

    @action
    checkAnswer() {
        let result = false;
        if(this.appState.selectedIndex && this.contentConfig.options.length > this.appState.selectedIndex) {
            result = this.contentConfig.options[this.appState.selectedIndex].CorrectAnswer;
        }
        this.appState.result = result;
        console.log(`you chose ${result?'wisely':'poorly'}`);
    }

    @action
    showAnswer() {

    }

    @action
    tryAgain() {
        this.appState.selectedIndex = undefined;
        this.appState.result = undefined;
    }

}
