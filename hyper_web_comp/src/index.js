import GreetingView from './components/greeting';
import HyperGreetingView from './components/hyper-greeting';
import HyperBase from './components/hyper-base';
import HelloWorld from './components/hello-world';
/*import { h, app } from 'hyperapp';

var hyperx = require('hyperx');
var hx = hyperx(h);

const state = {
  count: 0
}

const actions = {
  down: value => state => ({ count: state.count - value }),
  up: value => state => ({ count: state.count + value })
}

const view = (state, actions) => (
  <div>
    <h1>{state.count}</h1>
    <button onclick={() => actions.down(1)}>-</button>
    <button onclick={() => actions.up(1)}>+</button>
  </div>
)



function view2 (state, actions) {
  return hx`<div>
    <h1>will it work? ${state.count}</h1>
    <button onclick=${() => actions.down(1)}>-</button>
    <button onclick=${() => actions.up(1)}>+</button>
  </div>`
}

app(state, actions, view2, document.body.querySelector('#container'));*/