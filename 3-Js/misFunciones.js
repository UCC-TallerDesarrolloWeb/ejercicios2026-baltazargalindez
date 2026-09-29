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
 * Formatea un número como precio en pesos argentinos: $3.123,45
 *
 * @method formatearPrecio
 * @param {number} precio - Valor numérico a formatear.
 * @return {string} El precio formateado con separador de miles y decimales.
 */
formatearPrecio = (precio) => {
    let formato = new Intl.NumberFormat("es-AR", {
        style: "currency",
        currency: "ARS",
        minimumFractionDigits: 2
    });

    return formato.format(precio);
}

/**
 * Crea una tarjeta div por cada producto de la lista recibida, mostrando
 * su imagen, nombre y precio dentro del contenedor principal.
 *
 * @method renderizarProductos
 * @param {Array} lista - Productos a mostrar. Si no se envía, muestra todos.
 * @return {void} No retorna ningún valor; escribe las tarjetas en el DOM.
 */
renderizarProductos = (lista) => {
    let contenedor = document.getElementById("contenedorProductos");
    let tarjetas = "";

    if (lista === undefined) {
        lista = productos;
    }

    if (lista.length === 0) {
        contenedor.innerHTML = "<p>No se encontraron productos.</p>";
        return;
    }

    for (let i = 0; i < lista.length; i++) {
        let indiceReal = productos.indexOf(lista[i]);

        tarjetas = tarjetas +
            '<div class="tarjeta">' +
                '<img src="' + RUTA_IMAGENES + lista[i].imagen + '" alt="' + lista[i].nombre + '">' +
                '<h3>' + lista[i].nombre + '</h3>' +
                '<p class="precio">' + formatearPrecio(lista[i].precio) + '</p>' +
                '<button class="btn-detalle" onclick="abrirDialog(' + indiceReal + ')">Ver detalle de Producto</button>' +
                '<button class="btn-agregar" onclick="agregarAlCarrito(' + indiceReal + ')">Agregar al carrito</button>' +
            '</div>';
    }

    contenedor.innerHTML = tarjetas;
}

/**
 * Ordena una lista de productos según el criterio seleccionado por el usuario.
 *
 * @method ordenarCatalogo
 * @param {Array} lista - Productos a ordenar.
 * @param {string} criterio - "precioAsc", "precioDesc", "nombreAsc" o "nombreDesc".
 * @return {Array} La misma lista, ya ordenada.
 */
ordenarCatalogo = (lista, criterio) => {
    if (criterio === "precioAsc") {
        lista.sort((a, b) => a.precio - b.precio);
    } else if (criterio === "precioDesc") {
        lista.sort((a, b) => b.precio - a.precio);
    } else if (criterio === "nombreAsc") {
        lista.sort((a, b) => a.nombre.localeCompare(b.nombre));
    } else if (criterio === "nombreDesc") {
        lista.sort((a, b) => b.nombre.localeCompare(a.nombre));
    }

    return lista;
}

/**
 * Lee los valores de los filtros del formulario, muestra únicamente los
 * productos que cumplen con todas las condiciones y los ordena según
 * el criterio elegido.
 *
 * @method aplicarFiltros
 * @return {void} No retorna ningún valor; vuelve a renderizar el catálogo.
 */
aplicarFiltros = () => {
    let palabra = document.getElementById("buscar").value.toLowerCase();
    let precioMin = Number(document.getElementById("precioMin").value);
    let precioMax = Number(document.getElementById("precioMax").value);
    let marca = document.getElementById("marca").value;
    let criterio = document.getElementById("orden").value;

    // Se arma un array con las categorías tildadas
    let checks = document.getElementsByName("chk_categoria");
    let categorias = [];

    for (let i = 0; i < checks.length; i++) {
        if (checks[i].checked) {
            categorias.push(checks[i].value);
        }
    }

    let filtrados = productos.filter((prod) => {
        let cumplePalabra = prod.nombre.toLowerCase().includes(palabra);
        let cumpleMin = precioMin === 0 || prod.precio >= precioMin;
        let cumpleMax = precioMax === 0 || prod.precio <= precioMax;
        let cumpleMarca = marca === "" || prod.marca === marca;
        let cumpleCategoria = categorias.length === 0 || categorias.includes(prod.categoria);

        return cumplePalabra && cumpleMin && cumpleMax && cumpleMarca && cumpleCategoria;
    });

    let ordenados = ordenarCatalogo(filtrados, criterio);

    renderizarProductos(ordenados);
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
        '<p class="precio">' + formatearPrecio(prod.precio) + '</p>';

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

/**
 * Devuelve el array de productos guardado en el localStorage.
 * Si todavía no existe, devuelve un array vacío.
 *
 * @method obtenerCarrito
 * @return {Array} Array de productos que hay en el carrito.
 */
obtenerCarrito = () => {
    let guardado = localStorage.getItem("carrito");

    if (guardado === null) {
        return [];
    }

    return JSON.parse(guardado);
}

/**
 * Actualiza el contador que muestra cuántos productos hay en el carrito.
 *
 * @method actualizarContador
 * @return {void} No retorna ningún valor; escribe la cantidad en el DOM.
 */
actualizarContador = () => {
    let contador = document.getElementById("contadorCarrito");
    let carrito = obtenerCarrito();

    contador.innerHTML = carrito.length;
}

/**
 * Agrega el producto seleccionado al carrito y lo guarda en el localStorage.
 *
 * @method agregarAlCarrito
 * @param {number} indice - Posición del producto dentro del array productos.
 * @return {void} No retorna ningún valor; actualiza el localStorage.
 */
agregarAlCarrito = (indice) => {
    let carrito = obtenerCarrito();

    carrito.push(productos[indice]);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    actualizarContador();

    alert(productos[indice].nombre + " se agregó al carrito");
}

/**
 * Agrupa los productos repetidos del carrito, contando cuántas veces
 * aparece cada uno.
 *
 * @method agruparCarrito
 * @param {Array} carrito - Array de productos tal como se guarda en el localStorage.
 * @return {Array} Array de objetos con la forma { producto, cantidad }.
 */
agruparCarrito = (carrito) => {
    let agrupados = [];

    for (let i = 0; i < carrito.length; i++) {
        let encontrado = false;

        for (let j = 0; j < agrupados.length; j++) {
            if (agrupados[j].producto.nombre === carrito[i].nombre) {
                agrupados[j].cantidad = agrupados[j].cantidad + 1;
                encontrado = true;
            }
        }

        if (encontrado === false) {
            agrupados.push({ producto: carrito[i], cantidad: 1 });
        }
    }

    return agrupados;
}

/**
 * Calcula el total a pagar sumando el precio de todos los productos
 * que hay en el carrito.
 *
 * @method calcularTotal
 * @param {Array} carrito - Array de productos del carrito.
 * @return {number} Suma de todos los precios.
 */
calcularTotal = (carrito) => {
    let total = 0;

    for (let i = 0; i < carrito.length; i++) {
        total = total + carrito[i].precio;
    }

    return total;
}

/**
 * Recorre el carrito guardado en el localStorage, agrupa los productos
 * repetidos y crea una tarjeta por cada uno con su cantidad, subtotal
 * y un botón para eliminarlo. También muestra el total a pagar.
 *
 * @method renderizarCarrito
 * @return {void} No retorna ningún valor; escribe las tarjetas en el DOM.
 */
renderizarCarrito = () => {
    let contenedor = document.getElementById("contenedorCarrito");
    let totalDiv = document.getElementById("totalCarrito");
    let carrito = obtenerCarrito();
    let tarjetas = "";

    if (carrito.length === 0) {
        contenedor.innerHTML = "<p>El carrito está vacío.</p>";
        totalDiv.innerHTML = "";
        return;
    }

    let agrupados = agruparCarrito(carrito);

    for (let i = 0; i < agrupados.length; i++) {
        let prod = agrupados[i].producto;
        let cant = agrupados[i].cantidad;
        let subtotal = prod.precio * cant;

        tarjetas = tarjetas +
            '<div class="tarjeta">' +
                '<img src="' + RUTA_IMAGENES + prod.imagen + '" alt="' + prod.nombre + '">' +
                '<h3>' + prod.nombre + '</h3>' +
                '<p>Precio unitario: ' + formatearPrecio(prod.precio) + '</p>' +
                '<p><strong>Cantidad:</strong> ' + cant + '</p>' +
                '<p class="precio">Subtotal: ' + formatearPrecio(subtotal) + '</p>' +
                '<button class="btn-eliminar" onclick="eliminarProducto(\'' + prod.nombre + '\')">Eliminar el producto</button>' +
            '</div>';
    }

    contenedor.innerHTML = tarjetas;
    totalDiv.innerHTML = "Total a pagar: " + formatearPrecio(calcularTotal(carrito));
}

/**
 * Elimina del carrito todas las unidades del producto indicado y
 * actualiza el localStorage y la vista.
 *
 * @method eliminarProducto
 * @param {string} nombre - Nombre del producto a eliminar.
 * @return {void} No retorna ningún valor; actualiza el localStorage y el DOM.
 */
eliminarProducto = (nombre) => {
    let carrito = obtenerCarrito();

    // Se recorre de atrás hacia adelante para que splice no altere los índices
    for (let i = carrito.length - 1; i >= 0; i--) {
        if (carrito[i].nombre === nombre) {
            carrito.splice(i, 1);
        }
    }

    localStorage.setItem("carrito", JSON.stringify(carrito));

    renderizarCarrito();
    actualizarContador();
}

/**
 * Vacía por completo el carrito, borrando la clave del localStorage.
 *
 * @method vaciarCarrito
 * @return {void} No retorna ningún valor; actualiza el localStorage y el DOM.
 */
vaciarCarrito = () => {
    localStorage.removeItem("carrito");

    renderizarCarrito();
    actualizarContador();
}