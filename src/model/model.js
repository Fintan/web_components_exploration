import { decorate, observable, computed } from 'mobx';
import defaultConfig from './default-config';

export default class Model {

    id = Math.random();
    @observable title = "testing";
    finished = false;
    contentConfig = defaultConfig;

    @computed get theTitle() {
        return `the title is ${this.title} ${this.id}`;
    }

    @observable contentConfig = defaultConfig;

    constructor() {
        console.log('defaultConfig', defaultConfig);
    }
}


/*decorate(Model, {
    title: observable,
    finished: observable,
    contentConfig: observable
});*/