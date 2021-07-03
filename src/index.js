import './style.css';
import {createStore} from "redux";
import {rootReducer} from "./redux/rootReducer";
import {decrement, increment, init} from "./redux/actions";

let counter = document.querySelector(".counter");
let subBtn = document.querySelector(".sub");
let addBtn = document.querySelector(".add");
let asyncBtn = document.querySelector(".async");
let themeButton = document.querySelector(".theme_change_btn");


const store = createStore(rootReducer, 0);

addBtn.addEventListener('click', ()=> {
        store.dispatch( increment() )
    }
)

subBtn.addEventListener('click',() => {
    store.dispatch( decrement() )
})


asyncBtn.addEventListener( 'click', () => {

    }
)

themeButton.addEventListener('click',() => {
    document.body.classList.toggle('dark');

})

store.subscribe(() =>  {
    let state = store.getState();
    counter.textContent = state;
})

store.dispatch( init() );