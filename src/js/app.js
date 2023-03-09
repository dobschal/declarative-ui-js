import {HomePage} from "./components/HomePage.js";
import {Root} from "./core/nativeComponents/Root.js";
import {DefaultLayout} from "./components/DefaultLayout.js";

const layout = new DefaultLayout;

new Root({
    children: [layout]
}).build();

// For testing add the HomePage with a delay to the layout
setTimeout(() => {
    layout.fillSlot("default", new HomePage());
}, 1000);
