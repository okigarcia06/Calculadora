// FUNCIONALIDAD CALCULADORA
window.addEventListener('load', ()=>{ // Escuchamos cuando se carga el doc
    const display = document.querySelector('.calculator-display');
    const keypaddButtons = document.getElementsByClassName('keypad-buttons'); // nos hace un html collection para iterar posteriormente.

    const keypaddButtonsArray = Array.from(keypaddButtons); //convertimos el HTML collection a Array

    //Iteramos por nuestro array de botones y le agregamos un listener 
    keypaddButtonsArray.forEach( (button) => {
        button.addEventListener('click', ()=> {
            calculadora(button, display);
        })
    })
});

//Funcion calculadora, recibe como parámetros el display y el boton
function calculadora(button, display) {
    switch(button.innerHTML) {
        //si recibe boton 'C'
        case 'C':
            borrar(display);
            break;
        //si recibe boton '='
        case '=':
            calcular(display)
            break;
        //si recibe otro boton
        default:
            actualizar(display,button);
            break;
    }
}

//Funcion calcular, recibe como parametro el display guardando el resultado obtenido.
function calcular(display) {
    display.innerHTML = eval(display.innerHTML) // Toma el string, lo resuelve y lo guarda en el innerHTML del display
}

function actualizar(display, button){
    if(display.innerHTML == 0) {
        display.innerHTML = '';
    }
    display.innerHTML += button.innerHTML
}

function borrar(display) {
    display.innerHTML = 0;
}