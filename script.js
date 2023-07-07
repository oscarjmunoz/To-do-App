import checkComplete from "./components/checkComplete.js";
import deleteIcon from "./components/deleteIcon.js";

const btn = document.querySelector("[data-form-btn]")

const createtask = (evento) => {
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]")
    const value = input.value;
    const list = document.querySelector("[data-list]")
    const task = document.createElement("li");
    task.classList.add("card");
    input.value = '';
    //backstiks
    
    const taskContent = document.createElement("div")

    const titleTask = document.createElement("span")
    titleTask.classList.add("task");
    titleTask.innerText = value;
    taskContent.appendChild(checkComplete());
    taskContent.appendChild(titleTask);
    
        //task.innerHTML = content ; 
    task.appendChild(taskContent);
    task.appendChild(deleteIcon());
    list.appendChild(task);
    
};

//arrow function-funcion flecha o funciones anonimas
btn.addEventListener("click", createtask)




