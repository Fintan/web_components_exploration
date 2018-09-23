import { HyperBase, html } from './hyper-base';

export class HelloWorld extends HyperBase {

    static get properties() {
        return {
            hello: 'bonjour',
            world: 'globe'
        };
    }

    render(props, actions) {
    	const { hello, world } = props;
        return html`
        <div>
            <h1>${hello} ${world}</h1>
        </div>
        `;
    }

}

customElements.define('hello-world', HelloWorld);