function act1() {
    const url = window.location.href;
    const nombreNav = window.navigator.userAgent;
    const alto = screen.availHeight;
    const ancho = screen.availWidth;
    const idioma = window.navigator.language;

    document.getElementById("url").textContent = url;
    document.getElementById("info").textContent = nombreNav;
    document.getElementById("tam").textContent = `Alto disponible: ${alto} px, Ancho disponible: ${ancho} px`;
    document.getElementById("idioma").textContent = idioma;
}

act1();

function act2() {
    const anchoVentana = window.screen.width;
    const altoVentana = window.screen.height;
    const anchoVisible = window.innerWidth;
    const altoVisible = window.innerHeight;

    window.alert(`Ancho de la ventana del navegador: ${anchoVentana} px \n`
        + `Alto de la ventana del navegador: ${altoVentana} px \n`
        + `Ancho de la zona visible de la pagina: ${anchoVisible} px \n`
        + `Alto de la zona visible de la pagina ${altoVisible} px`);
}

// ACT 3
function volver() {
    window.history.back();
}

function recargar() {
    window.location.reload();
}

//ACT 4
let intervalo;
function iniciarContador() {
    let segs = 30;
    let cont = segs;
    intervalo = window.setInterval(() => {
        document.getElementById("contador").textContent = cont;
        cont--;
        if (cont == -1) {
            window.clearInterval(intervalo);
        }
    }, 1000);
}

function detenerIntervalo() {
    window.clearInterval(intervalo);
}

//ACT 5
function ventanaEmergente() {
    window.open("https://www.google.com/?hl=es");
}

function cerrarEmergente() {
    window.close();
}

//ACT 6
function cambiarFondo() {

    const confirmacion = window.confirm("Desea cambiar el color?")

    if (confirmacion) {
        let entra = true;
        do {
            color = window.prompt("Dame el color");
            if (color) {
                document.body.style.backgroundColor = color;
                entra = false;
            }
        } while (entra);
    }
}

//ACT 7
function muestraInfo() {
    let nombre = window.prompt("Muestra tu nombre");
    if (!nombre) {
        window.alert("No se ha introducido nada o se ha cancelado");
    }
    else {
        window.alert(`Bienvenido, ${nombre}`);
    }
}

//ACT 8
function compruebaTamanyo(){
    let anchoVentana = window.innerWidth;

    if (anchoVentana >= 768) {
        window.alert("Tu ventana es grande");
    }
    else {
        window.alert("Tu ventana es pequeña");
    }
}