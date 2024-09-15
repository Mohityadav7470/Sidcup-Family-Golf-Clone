const task = document.getElementById("inputBox");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(task.value === ''){
        alert("You must write something");
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = task.value;
        listContainer.appendChild(li);
        let span = document.createElement('span')
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        saveData();
    }
    task.value = '';
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle('checked');
        saveData();
    }
    if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false)

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

(function() {
    listContainer.innerHTML = localStorage.getItem("data");
}())

task.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      addTask();
    }
});