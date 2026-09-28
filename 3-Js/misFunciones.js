/**
 * Convierte el valor ingresado en uno de los campos a las demás unidades
 * de longitud (metro, pulgada, pie y yarda) y actualiza los inputs.
 *
 * @method convertirUnidades
 * @param {string} id - Id del campo modificado: "metro", "pulgada", "pie" o "yarda".
 * @param {string} valor - Número ingresado por el usuario en ese campo.
 * @return {void} No retorna ningún valor; asigna los resultados a los inputs.
 */
convertirUnidades = (id, valor) => {
    
    let met, pul, pie, yar;

    if (valor.includes(",")) {
        valor = valor.replace(",", ".");
    }

    if (isNaN(valor)) {
        alert("El valor ingresado es incorrecto");
        met = "";
        pul = "";
        pie = "";
        yar = "";
    } else if (id === "metro") {
        met = valor;
        pul = valor * 39.3701;
        pie = valor * 3.28084;
        yar = valor * 1.09361;
    } else if (id === "pulgada") {
        met = valor / 39.3701;
        pul = valor;
        pie = valor / 12;
        yar = valor / 36;
    } else if (id === "pie") {
        met = valor / 3.28084;
        pul = valor * 12;
        pie = valor;
        yar = valor / 3;
    } else if (id === "yarda") {
        met = valor / 1.09361;
        pul = valor * 36;
        pie = valor * 3;
        yar = valor;
    }

    
    document.getElementById("metro").value = met;
    document.getElementById("pulgada").value = pul;
    document.getElementById("pie").value = pie;
    document.getElementById("yarda").value = yar;
}

/**
 * Convierte entre grados y radianes según el campo que haya modificado
 * el usuario, y actualiza ambos inputs de la página.
 *
 * @method convertirAngulo
 * @param {string} valor - Número ingresado por el usuario en el campo modificado.
 * @param {string} campo - Id del campo modificado: "grados" o "radianes".
 * @return {void} No retorna ningún valor; asigna los resultados a los inputs.
 */
function convertirAngulo(valor, campo) {
    var numero = Number(valor);
    var grados;
    var radianes;

    if (campo == "grados") {
        grados = numero;
        radianes = numero * Math.PI / 180;
    } else if (campo == "radianes") {
        radianes = numero;
        grados = numero * 180 / Math.PI;
    }

    document.getElementById("grados").value = grados;
    document.getElementById("radianes").value = radianes;
}

/**
 * Muestra u oculta el div de información según el radio button seleccionado,
 * modificando su propiedad display.
 *
 * @method mostrarOcultar
 * @param {string} valor - Value del radio seleccionado: "val_mostrar" o "val_ocultar".
 * @return {void} No retorna ningún valor; cambia el estilo del div.
 */
mostrarOcultar = (valor) => {
    let miDiv = document.getElementById("unDiv");

    if (valor === "val_mostrar") {
        miDiv.style.display = "block";
    } else {
        miDiv.style.display = "none";
    }
}