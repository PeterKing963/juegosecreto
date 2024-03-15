
/*let parrafo = document.querySelector('p'); //codigo que es util pero puede ser aficientado
parrafo.innerHTML = 'Indica un numero del 1 al 10';*/ //se puede observar en las funciones
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 4;

function asignarTextoElemento(elemento, texto){
    let elemtoHTML = document.querySelector(elemento);
    elemtoHTML.innerHTML = texto;
    return;
}
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    //console.log(numeroDeUsuario);
    //console.log(typeof(numeroDeUsuario));
    console.log(numeroSecreto);
    //console.log(typeof(numeroSecreto));
    //console.log(numeroSecreto === numeroDeUsuario);

    if(numeroDeUsuario===numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos===1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');

    }else{
        //el usuario no acerto
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El numero secreto es menor');
        }else{
            asignarTextoElemento('p','El numero secreto es Mayor');
        }
        intentos++;
        limpiarCaja();
    }
    //mensajeConNombre('Hola');//llamada de funcion de las actividades
    return;
}
function condicionesIniciales(){
    asignarTextoElemento('h1','¡Juguemos! Adivina el numero secreto');
    asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}
function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //indicar intervalo de numeros
    condicionesIniciales();
    //generar numero aleatorio de nuevo
    //numeroSecreto = generarNumeroSecreto();
    //inicializar el numero de intentos
    //intentos = 1;
    //desabilitar boton juego nuevo
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

function limpiarCaja(){
    let valorCaja = document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto(){
    //let numeroSecreto = Math.floor(Math.random()*10)+1; se puede colocar de esta forma
    //return numeroSecreto; sin embargo se puede acortar como se muestra abajo
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //si el numero generado esta incluido en la lista, hacemos la operacion
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles :/');
    }else{
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
        //de esta forma solo retornamos valor dado que se declara como variable global
    }
}
//funciones que se ejecutan primero
condicionesIniciales();

//practicas-------------------------------------
//*practica1
/*function mensajeBienvenida(mensaje){
    console.log(mensaje);
}
mensajeBienvenida('Hola Mundo, con funcion');
//practica2
function mensajeConNombre(name){
    let nombre1 = prompt('Ingresa tu nombre');
    let numeroDoble = parseInt(prompt('Ingresa un numero'));
    console.log(name + ' '+ nombre1);
    dobleNumero(numeroDoble);//despues de ejecutar la funcion, se ejecuta la siguiente, como se muestra
}
//practica3
function dobleNumero(numeroDoble){
    console.log(numeroDoble+numeroDoble);
}*/
//-----------------------------------------------
/*
//practicas generales del tema Arrays
//punto1
let listaGenerica = [];
console.log(listaGenerica);
//punto2
let lenguajesProgramacion = ['JavaScript','C','C++','Kotlin','Pyton'];
console.log(lenguajesProgramacion);
//punto3
lenguajesProgramacion.push('Java','Ruby','GoLang');
console.log(lenguajesProgramacion);
//punto4
function mostrarLenguajes(){
    for (i=0;i<lenguajesProgramacion.length;i++){
        console.log(lenguajesProgramacion[i]+'\n'+'');
    }
}
mostrarLenguajes();
//punto5
function lenguajesInverso(){
    for(i=(lenguajesProgramacion.length-1);i>=0;i--){
        console.log(lenguajesProgramacion[i]+'\n'+'');
    }
}
lenguajesInverso();
//punto6
function calcularPromedio(){
    let suma =0;
    let valoresPromedio = [5,4,6,7,9,3,4];
    for(i=0;i<valoresPromedio.length;i++){
       suma+=valoresPromedio[i];
    }
    console.log('la media es:'+suma/i);
}
calcularPromedio();
//punto7
function numeroMaximo1(){
    let numerosIngresados = [6,3,4,5,6,10,78,1,65];
    console.log(`El numero mas grande es: ${Math.max(...numerosIngresados)}\nEl numero mas pequeño es:${Math.min(...numerosIngresados)}`);
}
numeroMaximo1();
//punto8
function sumaDatos(){
    let sumanum =0;
    let valoresaSumar = [5,4,6,7,9,3,4];
    for(i=0;i<valoresaSumar.length;i++){
       sumanum+=valoresaSumar[i];
    }
    console.log('la suma total es:'+sumanum);
}
sumaDatos();
function pasameValor(cualquiere){
    let materias = ['Español','Matematicas','Historia','Programacion','Emprendimiento'];
    //console.log(cualquiere);
    for (i=0;i<materias.length;i++){
        //console.log(materias.length);
        if((cualquiere-1)==i){
            //console.log(i);
            console.log(`El dato que requieres es:${materias[i]}`);
        }else{
            console.log(`${cualquiere>i ? 'Dato no encontrado, supera tamaño: -1' : 'Dato debe ser diferente a'} ${cualquiere}`);
            break;
        }
    }
}
pasameValor(5);
*/
