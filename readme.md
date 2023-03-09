# Declarative UI Example in JavaScript

This repo contains an example on how to implement a declarative UI with JavaScript.
Entry point is `src/js/app.js`, which just get loaded into the HTML file.

For running the development server, `parcel` is used.

## Get Started

Open a terminal an run:
```bash
# will install parcel
npm install 

# will start app on http://localhost:1234
npm start
```

## How To Extend

Everything is based on the `Component` class in `src/core/util/Component.js`.
If you want to extend and write your own components, just extend this class.
