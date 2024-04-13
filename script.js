const inputBox = document.getElementById("task");
const listContainer = document.getElementById("taskList");

function addTask() {
    if(inputBox.value === ""){
        alert("Please Enter A Task"); 
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00D7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.style.display = "none";
        saveData();
    }
});

function saveData() {
    localStorage.setItem("taskList", listContainer.innerHTML);
}

function showTasks() {
    listContainer.innerHTML = localStorage.getItem("taskList");
}

showTasks();