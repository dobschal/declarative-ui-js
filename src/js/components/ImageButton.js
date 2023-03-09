import {Button} from "../core/nativeComponents/Button.js";
import {Image} from "../core/nativeComponents/Image.js";
import {Component} from "../core/util/Component.js";

export class ImageButton extends Component {

    constructor(parent, buttonText, imageUrl, onClick) {
        super(parent);
        this.children = [
            new Button(buttonText, onClick),
            new Image(imageUrl)
        ];
    }
}