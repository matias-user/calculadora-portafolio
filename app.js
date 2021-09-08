//Variables
let arrayBotones = [];
let cantidadOperadores = 0;
const parejasNumeros    = [];
const arrayOperadores =  [];

//En agregar-boton.js le agrega el evento agregarAlArray a los botones.
const agregarAlArray = ( e )=>{

    let valor =  e.target.value;    //Captar valor del evento click.
    if( valor != '=' ){             //Si es un igual tiene que realizar la operacion.
        arrayBotones.push(valor);
        // separarParejasNums();
    }else{
        // operacionesPorRealizar();
        // cuantosOperadores( arrayBotones );
        separarParejasNums( arrayBotones);
        realizarOperacion( parejasNumeros );
    }
    console.log(arrayBotones);
    
}
/*TODO En esta funcion puedo comprobar cuantos operadores hay
para saber cuantos parejas de numeros hay en el array */
const cuantosOperadores = ( array = [] ) =>{
    let contador = 0;                                       
    array.forEach( item => {
        if( item > 0 || item < 10){}//Para saber si es del 1 al 9, no se hace nada en true.
        else{
            contador++;
        }
    } ) 
    console.log(contador);
    return contador;
}
/*Aqui procuro separar el array de numeros y operadores apretados en la calculadora
con un foraech y un if se filtra en dos arrays a los numeros y los operadores
*/
const separarParejasNums = ( array = [] ) => {

    let valor = 0;
    array.forEach( item => {
        if( item > 0 || item < 10){//No entiendo por que se agrega el 0 cuando se presiona
            valor += item;          //un operador.
            parejasNumeros.push(valor);
        }                              
        else{
            arrayOperadores.push(item);
            valor = 0;
        }
    } )
    console.log(parejasNumeros);
    console.log(arrayOperadores);     
}

//Aun no me funciona este metodo, el array que vienme de parejaNumeros solo esta guardando un valor
const realizarOperacion = ( array = [] ) => {//Aqui quiero realizar la operaciones matematicas
       
    const cantidadOperadores = cuantosOperadores();
    let suma ;
    // if( cantidadOperadores === 1 ){
        const operador = arrayOperadores[0];

        switch( operador ){
            case '+': 
            array.forEach( item => {
                suma += Number(item);
            } )
        }
        console.log( suma);
}

export {
    agregarAlArray
}