let btn = document.querySelector("button");
let para = document.querySelector("#result");


btn.addEventListener("click", () => {
  
    let randomColor = getRandomColor();

    para.innerText = randomColor;

    document.body.style.background = randomColor;
    
});

function getRandomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    let color = `rgb(${r},  ${g}, ${b})`;
    return color;
}
 