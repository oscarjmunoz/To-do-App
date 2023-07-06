const btn = document.querySelector("[data-form-btn]")




const createtask = (evento) => {
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]")
    console.log(input.value)
    
};
console.log(btn)

//arrow function-funcion flecha o funciones anonimas
btn.addEventListener("click", createtask)
