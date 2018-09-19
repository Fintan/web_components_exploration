import { decorate, observable, computed, action } from 'mobx';
import defaultConfig from './default-config';

export default class Model {

    @observable contentConfig = defaultConfig;

    @action.bound
    modifyItem() {
        this.contentConfig.options[0].AnswerText = 'will this one work?'
    }

}
