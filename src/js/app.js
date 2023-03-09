import {HomePage} from "./components/HomePage.js";
import {Root} from "./core/nativeComponents/Root.js";

new Root({
    children: [new HomePage]
}).build();
