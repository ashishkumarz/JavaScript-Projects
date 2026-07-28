console.log("js connected"); 

let para =document.querySelector("#para");

let decrBtn = document.querySelector("#decr");
let incrBtn = document.querySelector("#incr");
let resetBtn = document.querySelector("#reset");

let count = 0;

incrBtn.addEventListener("click", () => {
    count++;
    para.innerText = count;
});

decrBtn.addEventListener("click", () => {
    count--;
    para.innerText = count;
});


resetBtn.addEventListener("click", () => {
    count = 0;
    para.innerText = "0";

});


