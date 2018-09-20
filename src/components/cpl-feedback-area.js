import { LitElement, html } from '@polymer/lit-element';


export default class FeedbackArea extends LitElement {

    static get properties() {
        return {
            options: { type: Array },
            state: { type: Object }
        };
    }

    constructor() {
        super();
        this.state = {};
    }

    render() {
        const { 
            feedbackText,
            maxAttemptsReached
        } = this.state;

        return html`
            <div className="style-scope explib-interaction-anatomy">
              <div className="style-scope explib-widget-feedback-block">
                <section className="anatomy-feedback-area row style-scope explib-widget-feedback-block">

                    <span className="anatomy-feedback-canned-response feedbackYesNo style-scope explib-widget-feedback-block">
                        ${this.state.feedbackText}
                    </span>
                    <div className="button-panel show-button style-scope explib-widget-feedback-block">
                      <div className="style-scope explib-widget-feedback-block">
                          <button @click="${(e) => this._checkHandler('show_answer')}">Show</button>
                          <button @click="${(e) => this._checkHandler('try_again')}">Try Again</button>
                          <button @click="${(e) => this._checkHandler('check_answer')} ?disabled=${maxAttemptsReached}">Check</button>
                      </div>
                    </div>

                </section>
              </div>
            </div>
        `;
    }

    _checkHandler(buttonType) {
        this.dispatchEvent(new CustomEvent('feedback', { bubbles: true, composed: true, detail: buttonType }));
    }

}

customElements.define('cpl-feedback-area', FeedbackArea);


/*return html`
            <div
              id="explib-widget-feedback-block"
              className="style-scope explib-interaction-anatomy"
            >
              <div
                id="explib-widget-feedback-block-wrapper"
                className="style-scope explib-widget-feedback-block"
              >
                <section className="anatomy-feedback-area row style-scope explib-widget-feedback-block">
                  ${props.feedbackStatus === "show" ||
                  (props.feedbackStatus === "check" && props.correct === true) ? (
                    <span
                      id="feedbackYesNoData"
                      className="anatomy-feedback-canned-response feedbackYesNo style-scope explib-widget-feedback-block"
                    >
                      ${props.finalCannedResponse}
                    </span>
                  ) : (
                    <span
                      id="feedbackYesNoData"
                      className="anatomy-feedback-canned-response feedbackYesNo style-scope explib-widget-feedback-block"
                    >
                      ${props.feedbackStatus === "default" ? "" : props.feedbackText}
                    </span>
                  )}

                  ${attemptsLeft > 0 ? html`
                    <div className="button-panel show-button style-scope explib-widget-feedback-block">
                      <div
                        id="explib-widget-button"
                        className="style-scope explib-widget-feedback-block"
                      >
                        {(props.feedbackStatus === "default" ||
                          props.feedbackStatus === "tryAgain") && (
                          <Button
                            buttonLabel="Check"
                            enabled={props.enabled}
                            clickHandler={props.checkAnswer}
                          />
                        )}

                        {props.feedbackStatus === "check" &&
                          props.correct !== true && (
                            <Button
                              buttonLabel="Try Again"
                              enabled={props.enabled}
                              clickHandler={props.checkAnswer}
                            />
                          )}
                      </div>
                    </div>
                    `
                  ) : (
                    ""
                  )}
                  {props.showAnswerOption &&
                    props.feedbackStatus !== "default" &&
                    props.feedbackStatus !== "show" &&
                    !props.correct && (
                      <div className="button-panel show-button style-scope explib-widget-feedback-block">
                        <div
                          id="explib-widget-button"
                          className="style-scope explib-widget-feedback-block"
                        >
                          <Button
                            buttonLabel="Show"
                            enabled={props.enabled}
                            clickHandler={props.checkAnswer}
                          />
                        </div>
                      </div>
                    )}
                </section>
              </div>
            </div>
        `;*/