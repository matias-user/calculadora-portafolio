import { agregarAlArray } from "./app.js";
//variables
const divBotones = document.querySelector('#grupo-botones');
const operadores = ['back','C','+','-','*','/','='];

//Eventos
document.addEventListener('DOMContentLoaded', ()=> {

    crearBotones(16);
})

//Funciones
const crearBotones = ( cuantos ) =>{//Creacion de los botones dinamicamente
    
    let i = 0, j = 0;
    while( i < cuantos ){

        i++;
        const btn = document.createElement('button');
        btn.classList = 'btn btn-success m-3 p-3';
        if( i > 9 ){
            btn.textContent = operadores[j];
            btn.value = operadores[j];
            j++;
        }else {
            btn.textContent = i;
            btn.value = i;
        }
        btn.onclick = agregarAlArray;//Esta funcion viene del archivo app.js
        divBotones.appendChild(btn);
    }
}
