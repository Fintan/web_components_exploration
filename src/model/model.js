import { decorate, observable } from 'mobx';
import defaultConfig from './default-config';

export default class Model {

    /*id = Math.random();
    title = "";
    finished = false;
    contentConfig = defaultConfig;*/

    // @observable contentConfig = defaultConfig;

    constructor() {
        console.log('defaultConfig', defaultConfig);
    }
}


/*decorate(Model, {
    title: observable,
    finished: observable,
    contentConfig: observable
});*/