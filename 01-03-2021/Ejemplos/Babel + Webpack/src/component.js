import { join } from "lodash-es"


export function component() {
    const element = document.createElement('div');

    element.innerHTML = join(["hello", "webpack"], " ");
    //element.innerHTML = _.join(["hello", "webpack"], " ");
    //element.innerHTML = `helo webpack`

    return element;
}