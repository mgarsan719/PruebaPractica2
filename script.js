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
function volver(){
    window.history.back();
}

function recargar(){
    window.location.reload();
}

//ACT 4
