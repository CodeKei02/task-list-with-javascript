let btnAgregarTarea = document.querySelector('#añadir-tarea');
let input = document.querySelector('input');
let contenedorLista = document.querySelector('ul');
let empty = document.querySelector('.empty');


btnAgregarTarea.addEventListener('click', (e) =>{
    e.preventDefault();

    const text = input.value;

    if(text !== "" || text.length >= 1){
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = text;
        
        li.appendChild(p);
        li.appendChild(btnBorrarTarea());   
        contenedorLista.appendChild(li);

        input.value = "";
        empty.classList.add("disabled");
        
    }
});

function btnBorrarTarea(){
    let botonBorrar = document.createElement('button');

    botonBorrar.textContent = "X";
    botonBorrar.className = "borrar-tarea";

    botonBorrar.addEventListener('click', (e) =>{
        const item = e.target.parentElement;
        contenedorLista.removeChild(item);

        let items = document.querySelectorAll("li");
        if(items.length === 0){
            empty.classList.remove("disabled");
        }

        if(items.length >= 1){
            contenedorLista.forEach((el) => {
                console.log(el);
            });
        }
    });

    return botonBorrar;
    
}

function eliminarTarea(){
    contenedorLista.innerHTML = localStorage.removeItem("data");
}

for(let index in localStorage){
    console.log(localStorage[index]);
}