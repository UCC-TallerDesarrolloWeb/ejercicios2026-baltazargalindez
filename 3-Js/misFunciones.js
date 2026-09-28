/**
 * Convierte el valor ingresado en uno de los campos del formulario a las
 * demás unidades de longitud (metro, pulgada, pie y yarda) y actualiza
 * todos los inputs de la página con el resultado.
 *
 * @method convertir
 * @param {string} valor - Número ingresado por el usuario en el campo modificado.
 * @param {string} campo - Id del campo modificado: "metro", "pulgada", "pie" o "yarda".
 * @return {void} No retorna ningún valor; asigna los resultados a los inputs.
 */
function convertir(valor, campo) {
    var numero = Number(valor);
    var metros;

    // Primero se lleva el valor ingresado a metros
    if (campo == "metro") {
        metros = numero;
    } else if (campo == "pulgada") {
        metros = numero / 39.3701;
    } else if (campo == "pie") {
        metros = numero / 3.28084;
    } else if (campo == "yarda") {
        metros = numero / 1.09361;
    }

    // Luego se convierten los metros a todas las unidades
    document.getElementById("metro").value = metros;
    document.getElementById("pulgada").value = metros * 39.3701;
    document.getElementById("pie").value = metros * 3.28084;
    document.getElementById("yarda").value = metros * 1.09361;
}