( () =>{ 
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
    taskContent.appendChild(checkComplete());
    const titleTask = document.createElement("span")
    titleTask.classList.add("task");
    titleTask.innerText = value;
    taskContent.appendChild(titleTask);

    const content = `<i class="fas fa-trash-alt trashIcon icon"></i>`;
    //task.innerHTML = content ; 
    task.appendChild(taskContent);
    list.appendChild(task);
        
};

//arrow function-funcion flecha o funciones anonimas
btn.addEventListener("click", createtask)

const checkComplete = () =>{
    const i = document.createElement("i")
    i.classList.add("far","fa-check-square","icon");
    i.addEventListener("click", completeTask);

    return i;
};
//Immediately Invoked fucntion expression - IIFE

const completeTask = (event) => {
    const element = event.target;
    element.classList.toggle("fas");
    element.classList.toggle("completeIcon");
    element.classList.toggle("far");
};
}
)();