import { LitElement, html, property } from '@polymer/lit-element';


export default class FeedbackArea extends LitElement {

    @property({ type: String })
    feedbackStatus = 'default';

    @property({ type: String })
    finalCannedResponse = '';

    @property({ type: String })
    feedbackText = '';

    @property({ type: Number })
    attemptsLeft = 1;

    @property({ type: Boolean })
    correct;

    render() {
        const { 
            feedbackStatus, 
            finalCannedResponse, 
            feedbackText, 
            attemptsLeft,
            correct
        } = this;
        //todo: logic here needs tobe added to model as actions

        return html`
            <div
              id="explib-widget-feedback-block"
              className="style-scope explib-interaction-anatomy"
            >
              <div
                id="explib-widget-feedback-block-wrapper"
                className="style-scope explib-widget-feedback-block"
              >
                <section className="anatomy-feedback-area row style-scope explib-widget-feedback-block">
                  
                    <span
                      id="feedbackYesNoData"
                      className="anatomy-feedback-canned-response feedbackYesNo style-scope explib-widget-feedback-block"
                    >
                        <!-- finalCannedResponse or feedbackText -->
                        feedback text..
                    </span>

                    <div className="button-panel show-button style-scope explib-widget-feedback-block">
                      <div
                        id="explib-widget-button"
                        className="style-scope explib-widget-feedback-block"
                      >
                      <!-- checkAnswer button, 'Check' or 'Try Again' label -->
                      <!-- checkAnswer button, 'Show' label -->
                      try again button..
                      <button value="testing" @click="${(e) => this._checkHandler('check_answer')}">Check</button>
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