/*Variables */
let numeroSecretoGeneral= 0;
let numIntentos=0;
let listaNumerosSorteados=[];
let numeroMaximo=10;

//funciones
function asignarTexto(elemento,texto){
    let elementoHTML= document.querySelector(elemento);
    elementoHTML.innerHTML=texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario=parseInt(document.getElementById('valorUsuario').value);
    if (numeroDeUsuario===numeroSecretoGeneral){
        asignarTexto('p',`Acertaste el numero en ${numIntentos} ${(numIntentos===1)? 'intento':'intentos'}!`);
        //habilito el boton de reiniciar
        document.getElementById('reiniciar').removeAttribute('disabled');
        limpiarCaja();
    } else{
        /*El usuario no acertó*/
        if(numeroDeUsuario> numeroSecretoGeneral){
            asignarTexto('p','El numero secreto es menor...');
        }else{
            asignarTexto('p','El numero secreto es mayor...');
        }
        numIntentos++;
        limpiarCaja();
    }
    return;
}

function condicionesIniciales(){
    asignarTexto('h1','Juego del numero secreto!');
    asignarTexto('p',`Indica un numero del 1 al ${numeroMaximo}!`);
    numeroSecretoGeneral=generarNumeroSecreto();
    numIntentos=1;
}
function limpiarCaja(){
    document.querySelector('#valorUsuario').value='';   
}

function generarNumeroSecreto(){
    let numeroSecreto= Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroSecreto);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length==numeroMaximo){
        asignarTexto('p','Ya se sortearon todos los numeros posibles... ')
    }else{
        //compruebo si el nuero esta en la lista
        if(listaNumerosSorteados.includes(numeroSecreto)){
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroSecreto);  
            return numeroSecreto;
        }
    }
}

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de inicio
    //generar nuevo num aleatorio
    //inicializar el num de intentos
    condicionesIniciales();
    //deshabilitar el boton reinicio
    document.querySelector('#reiniciar').setAttribute('disabled',true);
}

//asignaciones funciones
condicionesIniciales();
