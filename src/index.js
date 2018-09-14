// import '@webcomponents/webcomponentsjs/webcomponents-bundle';
import MyElement from './components/my-element';
import Square from './components/cpl-square';
import Model from './model/model';
import { autorun } from 'mobx';

console.log('hello world!');

const m = new Model();

console.log('m.title', m.title);

autorun(() => {
    console.log('title', m.title);
    console.log('contentConfig.ActivityTitle', m.contentConfig.ActivityTitle);
});

m.title = 'hey';
m.title = 'this';
m.title = 'worked';

window.m = m;