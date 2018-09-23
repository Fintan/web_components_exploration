import { HyperBase, html, jsx as h } from './hyper-base';

export class HelloWorld extends HyperBase {

    static get properties() {
        return {
            hello: { type: 'String', default: 'bonjour' },
            world: { type: 'String', default: 'globe' }
        };
    }

    constructor() {
    	super();
    	window.tmp = this;
    	this.hello = 'will also work??';
    }

   /* render() {
    	const { hello, world } = this;
        return html`
        <div>
            <h1>${hello} ${world}</h1>
            <button onclick=${() => console.log(`${hello} ${world}`)}>Say Hello</button>
        </div>
        `;
    }*/

    /*render2() {
    	const { hello, world } = this;
        return (
        <div>
            <h1>{hello} {world}</h1>
            <button onclick={() => console.log(`${hello} ${world}`)}>Say Hello jsx</button>
        </div>
        );
    }*/

}

customElements.define('hello-world', HelloWorld);