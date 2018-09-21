
# Lit Element and Mobx demo app

A simple multiple choice activity to explore the feasibility of using Lit Element and Mobx. 

## Installation and Run

```
npm install
npm start
```

## Technologies

1. View Layer: Use of Lit Element as a Web Component base class.
2. State Management: Mobx.
3. Language: ES6
4. Build chain: Webpack/Babel


## Summary

### Lit Element Pros

1. Easy to learn
2. Ability to setup binded properties that automatically updates the DOM when something changes
3. Ability to render markup using a templating solution (Lit Html)
4. Removes the need to manually manage setup and remove DOM event listeners
5. A lightweight base class for building web components

### Lit Element Cons

1. Lit Element current version is only 0.6.0 (LitHtml is 0.11.4) and subject to API changes
2. Early adopter bugs to contend with
3. Documentation may not be up to date with the most recent release

### Mobx Pros

1. A state management solution with very little boilerplate
2. objects, arrays and class instances can be made automatically observable and changes can be observed in several ways
3. Promotes unidirectional data-flow that helps reduce code complexity
4. Helps to facilitate keeping view components dumb and stateless

### Mobx Cons

1. The observer side to the solution caters more for a React audience
2. The documentation is directed towards React users
3. Learning curve is moderate



