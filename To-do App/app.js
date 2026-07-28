let input = document.querySelector("input");
let btn = document.querySelector("button");
let list = document.querySelector("ul");

btn.addEventListener("click", () => {
     if(input.value === "") {
        alert("enter the task");
        return;
    }

    let task = document.createElement("li");
    task.innerText = input.value;
    list.appendChild(task);

    let delBtn = document.createElement("button");
    delBtn.classList.add("delete-btn");
    
    delBtn.innerText = "delete"
    task.appendChild(delBtn);

    delTask(delBtn, task);

    input.value = "";

});

function delTask(delBtn, task) {
    delBtn.addEventListener("click", () => {
        task.remove();
    });
}