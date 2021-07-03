import {DECREMENT, INCREMENT, INIT} from "./types";

export function increment() {
    return {
        type: INCREMENT
    }
}

export function decrement() {
    return {
        type: DECREMENT
    }
}
export function init() {
    return {
        type: INIT
    }
}