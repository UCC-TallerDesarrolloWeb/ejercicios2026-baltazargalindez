/**
 * Convierte el valor ingresado en uno de los campos a las demás unidades
 * de longitud (metro, pulgada, pie y yarda) y actualiza los inputs
 * mostrando el resultado con 2 decimales.
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
        met = Number(valor).toFixed(2);
        pul = (valor * 39.3701).toFixed(2);
        pie = (valor * 3.28084).toFixed(2);
        yar = (valor * 1.09361).toFixed(2);
    } else if (id === "pulgada") {
        met = (valor / 39.3701).toFixed(2);
        pul = Number(valor).toFixed(2);
        pie = (valor / 12).toFixed(2);
        yar = (valor / 36).toFixed(2);
    } else if (id === "pie") {
        met = (valor / 3.28084).toFixed(2);
        pul = (valor * 12).toFixed(2);
        pie = Number(valor).toFixed(2);
        yar = (valor / 3).toFixed(2);
    } else if (id === "yarda") {
        met = (valor / 1.09361).toFixed(2);
        pul = (valor * 36).toFixed(2);
        pie = (valor * 3).toFixed(2);
        yar = Number(valor).toFixed(2);
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

/**
 * Suma los dos valores ingresados y muestra el resultado.
 *
 * @method sumar
 * @return {void} No retorna ningún valor; asigna el total al span correspondiente.
 */
sumar = () => {
    let num1 = Number(document.getElementById("nums1").value);
    let num2 = Number(document.getElementById("nums2").value);
    let total = num1 + num2;

    document.getElementById("totalS").innerHTML = total;
}

/**
 * Resta los dos valores ingresados y muestra el resultado.
 *
 * @method restar
 * @return {void} No retorna ningún valor; asigna el total al span correspondiente.
 */
restar = () => {
    let num1 = Number(document.getElementById("numr1").value);
    let num2 = Number(document.getElementById("numr2").value);
    let total = num1 - num2;

    document.getElementById("totalR").innerHTML = total;
}

/**
 * Multiplica los dos valores ingresados y muestra el resultado.
 *
 * @method multiplicar
 * @return {void} No retorna ningún valor; asigna el total al span correspondiente.
 */
multiplicar = () => {
    let num1 = Number(document.getElementById("numm1").value);
    let num2 = Number(document.getElementById("numm2").value);
    let total = num1 * num2;

    document.getElementById("totalM").innerHTML = total;
}

/**
 * Divide los dos valores ingresados y muestra el resultado.
 *
 * @method dividir
 * @return {void} No retorna ningún valor; asigna el total al span correspondiente.
 */
dividir = () => {
    let num1 = Number(document.getElementById("numd1").value);
    let num2 = Number(document.getElementById("numd2").value);
    let total = num1 / num2;

    document.getElementById("totalD").innerHTML = total;
}

/**
 * URL base donde se encuentran las imágenes de los productos.
 */
const RUTA_IMAGENES = "https://ucc-tallerdesarrolloweb.github.io/filminas/images/ejercicios/";

/**
 * Recorre el array de productos y crea una tarjeta div por cada uno,
 * mostrando su imagen, nombre y precio dentro del contenedor principal.
 *
 * @method renderizarProductos
 * @return {void} No retorna ningún valor; escribe las tarjetas en el DOM.
 */
renderizarProductos = () => {
    let contenedor = document.getElementById("contenedorProductos");
    let tarjetas = "";

    for (let i = 0; i < productos.length; i++) {
        tarjetas = tarjetas +
            '<div class="tarjeta">' +
                '<img src="' + RUTA_IMAGENES + productos[i].imagen + '" alt="' + productos[i].nombre + '">' +
                '<h3>' + productos[i].nombre + '</h3>' +
                '<p class="precio">$' + productos[i].precio + '</p>' +
                '<button class="btn-detalle" onclick="abrirDialog(' + i + ')">Ver detalle de Producto</button>' +
            '</div>';
    }

    contenedor.innerHTML = tarjetas;
}

/**
 * Abre el dialog mostrando la información del producto seleccionado.
 *
 * @method abrirDialog
 * @param {number} indice - Posición del producto dentro del array productos.
 * @return {void} No retorna ningún valor; completa y muestra el dialog.
 */
abrirDialog = (indice) => {
    let miDialog = document.getElementById("dialogDetalle");
    let contenido = document.getElementById("contenidoDialog");
    let prod = productos[indice];

    contenido.innerHTML =
        '<h2>' + prod.nombre + '</h2>' +
        '<img src="' + RUTA_IMAGENES + prod.imagen + '" alt="' + prod.nombre + '">' +
        '<p>' + prod.description + '</p>' +
        '<p><strong>Categoría:</strong> ' + prod.categoria + '</p>' +
        '<p><strong>Marca:</strong> ' + prod.marca + '</p>' +
        '<p><strong>Talles:</strong> ' + prod.talle + '</p>' +
        '<p class="precio">$' + prod.precio + '</p>';

    miDialog.showModal();
}

/**
 * Cierra el dialog con el detalle del producto.
 *
 * @method cerrarDialog
 * @return {void} No retorna ningún valor; oculta el dialog.
 */
cerrarDialog = () => {
    let miDialog = document.getElementById("dialogDetalle");
    miDialog.close();
}