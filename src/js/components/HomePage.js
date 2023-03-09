import {NativeComponent} from "../core/util/NativeComponent.js";
import {Button} from "../core/nativeComponents/Button.js";
import {Paragraph} from "../core/nativeComponents/Paragraph.js";
import {Input} from "../core/nativeComponents/Input.js";
import {ImageButton} from "./ImageButton.js";
import {Component} from "../core/util/Component.js";

export class HomePage extends Component {

    count = 0

    children = [
        new NativeComponent({
            text: () => "Yeah Uuuh, Count is: " + this.count
        }),
        new Paragraph("More than 5 :O!!!???", {
            if: () => this.count >= 5
        }),
        new Button(
            "Count Up",
            () => this.set("count", this.count + 1)
        ),
        new Button(
            "Count Down",
            () => this.set("count", this.count - 1)
        ),
        new Input(
            () => this.count,
            "Reset Count",
            (value) => this.set("count", value),
            "number"
        ),
        new ImageButton(
            this,
            "Click Me",
            "https://cdn3.iconfinder.com/data/icons/feather-5/24/check-circle-1024.png",
            () => {
                console.log("Clicked the button");
            }
        ),
    ];
}