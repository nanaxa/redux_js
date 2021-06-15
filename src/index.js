let counter = document.querySelector(".counter");
let subBtn = document.querySelector(".sub");
let addBtn = document.querySelector(".add");
let asyncBtn = document.querySelector(".async");

let state = 0;

const render = () => {
    counter.textContent = state.toString();
}

function handleSub() {
    state--;
    render();

}

addBtn.addEventListener('click',() => {
    state++
    render();
})



render();