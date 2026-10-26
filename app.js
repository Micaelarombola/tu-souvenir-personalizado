
"use strict";

/* ==========================================
   CONFIGURACIÓN DE LA TIENDA
========================================== */

// IMPORTANTE:
// Reemplazá por el WhatsApp real de la tienda.
// Formato: código de país + número, sin + ni espacios.
// Ejemplo ilustrativo: 54911XXXXXXXX
const WHATSAPP_TIENDA = "";

// Precios en pesos argentinos.
// Los que dicen provisorio se deben confirmar.
const PRECIOS = {
  remeraUnisex: 19990,
  remeraInfantil: 12990,
  puperaOversize: 15900,
  buzoNino: 24990,
  buzoUnisex: 34990,
  pantalonUnisex: 27990,
  tazaPersonalizada: 9990,
  bolsaFriselina: 6990
};

const formatoPrecio = (valor) =>
  new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0
  }).format(valor);

/* ==========================================
   CATÁLOGO
========================================== */

const productos = [
  {
    id: "remera-unisex",
    nombre: "Remera Unisex Personalizada",
    categoria: "Remeras",
    precio: PRECIOS.remeraUnisex,
    imagen: "img/imagen1.png",
    descripcion: "Remera unisex de manga corta con estampa personalizada.",
    colores: ["Blanco", "Negro", "Gris"],
    talles: ["1", "2", "3", "4"],
    ubicaciones: ["Frente", "Espalda", "Frente y espalda"],
    disenos: ["Catálogo", "Diseño propio"],
    provisional: false
  },
  {
    id: "remera-infantil",
    nombre: "Remera Infantil Personalizada",
    categoria: "Remeras",
    precio: PRECIOS.remeraInfantil,
    imagen: "img/imagen 2.png",
    descripcion: "Remera infantil de manga corta con diseños personalizados.",
    colores: ["Blanco", "Negro", "Gris"],
    talles: ["4", "6", "8", "10", "12", "14", "16"],
    ubicaciones: ["Frente", "Espalda", "Frente y espalda"],
    disenos: ["Catálogo", "Diseño propio"],
    provisional: false
  },
  {
    id: "pupera-beige",
    nombre: "Pupera Oversize Mujer Beige",
    categoria: "Remeras",
    precio: PRECIOS.puperaOversize,
    imagen: "img/imagen 3.png",
    descripcion: "Pupera oversize personalizada, estampa delantera.",
    colores: ["Beige"],
    talles: ["Único"],
    ubicaciones: ["Frente", "Espalda", "Frente y espalda"],
    disenos: ["Catálogo", "Diseño propio"],
    provisional: false
  },
  {
    id: "pupera-azul",
    nombre: "Pupera Oversize Mujer Azul",
    categoria: "Remeras",
    precio: PRECIOS.puperaOversize,
    imagen: "img/imagen4.png",
    descripcion: "Pupera oversize azul con diseño personalizado.",
    colores: ["Azul"],
    talles: ["Único"],
    ubicaciones: ["Frente", "Espalda", "Frente y espalda"],
    disenos: ["Catálogo", "Diseño propio"],
    provisional: false
  },
  {
    id: "remera-pastillas-blanca",
    nombre: "Remera Las Pastillas del Abuelo Blanca",
    categoria: "Remeras",
    precio: PRECIOS.remeraUnisex,
    imagen: "img/imagen5.png",
    descripcion: "Remera personalizada con diseño inspirado en Las Pastillas del Abuelo.",
    colores: ["Blanco"],
    talles: ["1", "2", "3", "4"],
    ubicaciones: ["Frente", "Espalda", "Frente y espalda"],
    disenos: ["Diseño de la foto", "Catálogo", "Diseño propio"],
    provisional: false
  },
  {
    id: "remera-pastillas-negra",
    nombre: "Remera Las Pastillas del Abuelo Negra",
    categoria: "Remeras",
    precio: PRECIOS.remeraUnisex,
    imagen: "img/imagen6.png",
    descripcion: "Remera negra de manga corta con diseño musical.",
    colores: ["Negro"],
    talles: ["1", "2", "3", "4"],
    ubicaciones: ["Frente", "Espalda", "Frente y espalda"],
    disenos: ["Diseño de la foto", "Catálogo", "Diseño propio"],
    provisional: false
  },
  {
    id: "buzo-nino",
    nombre: "Buzo Canguro Niño Personalizado",
    categoria: "Buzos",
    precio: PRECIOS.buzoNino,
    imagen: "img/imagen7.png",
    descripcion: "Buzo canguro infantil con estampa personalizada.",
    colores: ["Gris"],
    talles: ["4", "6", "8", "10", "12", "14"],
    ubicaciones: ["Frente", "Espalda", "Frente y espalda"],
    disenos: ["Diseño de la foto", "Catálogo", "Diseño propio"],
    provisional: true
  },
  {
    id: "buzo-unisex",
    nombre: "Buzo Unisex Personalizado",
    categoria: "Buzos",
    precio: PRECIOS.buzoUnisex,
    imagen: "img/imagen8 (2).png",
    descripcion: "Buzo unisex personalizado con diseño a elección.",
    colores: ["Gris", "Negro", "Blanco"],
    talles: ["1", "2", "3", "4"],
    ubicaciones: ["Frente", "Espalda", "Frente y espalda"],
    disenos: ["Diseño de la foto", "Catálogo", "Diseño propio"],
    provisional: true
  },
  {
    id: "pantalon-unisex",
    nombre: "Pantalón Unisex Personalizado",
    categoria: "Pantalones",
    precio: PRECIOS.pantalonUnisex,
    imagen: "img/imagen9.png",
    descripcion: "Pantalón unisex con estampa personalizada.",
    colores: ["Gris", "Negro", "Beige", "Azul"],
    talles: ["1", "2", "3", "4"],
    ubicaciones: ["Lateral", "Frente"],
    disenos: ["Diseño de la foto", "Catálogo", "Diseño propio"],
    provisional: true
  },
  {
    id: "pupera-estampada",
    nombre: "Pupera Oversize Estampada",
    categoria: "Remeras",
    precio: PRECIOS.puperaOversize,
    imagen: "img/imagen10.png",
    descripcion: "Pupera oversize personalizada con diseño divertido.",
    colores: ["Blanco"],
    talles: ["Único"],
    ubicaciones: ["Frente", "Espalda", "Frente y espalda"],
    disenos: ["Diseño de la foto", "Catálogo", "Diseño propio"],
    provisional: false
  },
  {
    id: "taza",
    nombre: "Taza Personalizada",
    categoria: "Tazas",
    precio: PRECIOS.tazaPersonalizada,
    imagen: "img/e3603c25-0338-4bf6-a9e6-41eec61b10a6.png",
    descripcion: "Taza personalizada con nombre, frase o diseño.",
    colores: ["Blanco"],
    talles: [],
    ubicaciones: ["Una cara", "Ambas caras"],
    disenos: ["Catálogo", "Diseño propio"],
    provisional: true
  },
  {
    id: "bolsa",
    nombre: "Bolsa de Friselina Personalizada",
    categoria: "Bolsas",
    precio: PRECIOS.bolsaFriselina,
    imagen: "img/bolsa-friselina.jpg",
    descripcion: "Bolsa de friselina personalizada para regalos y eventos.",
    colores: ["Blanco", "Negro"],
    talles: [],
    ubicaciones: ["Una cara", "Ambas caras"],
    disenos: ["Catálogo", "Diseño propio"],
    provisional: true
  }
];

/* ==========================================
   UTILIDADES
========================================== */

const $ = (selector) => document.querySelector(selector);

function crearElemento(tag, clase = "", texto = "") {
  const elemento = document.createElement(tag);
  if (clase) elemento.className = clase;
  if (texto) elemento.textContent = texto;
  return elemento;
}

function escaparHTML(texto) {
  return String(texto).replace(/[&<>"']/g, (caracter) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[caracter]);
}

function mostrarToast(mensaje) {
  const toast = $("#toast");
  toast.textContent = mensaje;
  toast.classList.add("show");

  clearTimeout(mostrarToast.temporizador);
  mostrarToast.temporizador = setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

function abrirDialogo(dialogo) {
  if (!dialogo.open) dialogo.showModal();
}

function cerrarDialogo(dialogo) {
  if (dialogo.open) dialogo.close();
}

/* ==========================================
   CARRUSEL
========================================== */

const slides = [...document.querySelectorAll(".slide")];
let slideActual = 0;
let intervaloSlider;

function mostrarSlide(indice) {
  slideActual = (indice + slides.length) % slides.length;

  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === slideActual);
  });

  document.querySelectorAll("#sliderDots button").forEach((dot, i) => {
    dot.classList.toggle("active", i === slideActual);
    dot.setAttribute("aria-current", i === slideActual ? "true" : "false");
  });
}

function iniciarSlider() {
  if (!slides.length) return;

  const dots = $("#sliderDots");

  slides.forEach((_, i) => {
    const boton = crearElemento("button");
    boton.type = "button";
    boton.setAttribute("aria-label", `Ir a portada ${i + 1}`);
    boton.addEventListener("click", () => {
      mostrarSlide(i);
      reiniciarSlider();
    });
    dots.appendChild(boton);
  });

  $("#prevSlide").addEventListener("click", () => {
    mostrarSlide(slideActual - 1);
    reiniciarSlider();
  });

  $("#nextSlide").addEventListener("click", () => {
    mostrarSlide(slideActual + 1);
    reiniciarSlider();
  });

  mostrarSlide(0);
  reiniciarSlider();
}

function reiniciarSlider() {
  clearInterval(intervaloSlider);
  if (slides.length > 1) {
    intervaloSlider = setInterval(() => {
      mostrarSlide(slideActual + 1);
    }, 5500);
  }
}

/* ==========================================
   FILTROS Y CATÁLOGO
========================================== */

const categorias = ["Todos", "Remeras", "Buzos", "Pantalones", "Tazas", "Bolsas"];

let categoriaActual = "Todos";
let busquedaActual = "";

function seleccionarCategoria(categoria) {
  categoriaActual = categorias.includes(categoria) ? categoria : "Todos";
  renderizarFiltros();
  renderizarProductos();
}

function renderizarFiltros() {
  const contenedor = $("#filters");
  contenedor.innerHTML = "";

  categorias.forEach((categoria) => {
    const boton = crearElemento("button", categoria === categoriaActual ? "active" : "", categoria);
    boton.type = "button";
    boton.addEventListener("click", () => seleccionarCategoria(categoria));
    contenedor.appendChild(boton);
  });
}

function renderizarProductos() {
  const contenedor = $("#products");
  contenedor.innerHTML = "";

  const encontrados = productos.filter((producto) => {
    const coincideCategoria =
      categoriaActual === "Todos" || producto.categoria === categoriaActual;

    const texto = `${producto.nombre} ${producto.descripcion} ${producto.categoria}`.toLowerCase();
    const coincideBusqueda = texto.includes(busquedaActual.toLowerCase());

    return coincideCategoria && coincideBusqueda;
  });

  if (!encontrados.length) {
    contenedor.innerHTML = '<p class="empty-results">No encontramos productos con esa búsqueda ♡</p>';
    return;
  }

  encontrados.forEach((producto) => {
    const tarjeta = crearElemento("article", "product-card");

    tarjeta.innerHTML = `
      <div class="product-image">
        <img src="${escaparHTML(producto.imagen)}" alt="${escaparHTML(producto.nombre)}" loading="lazy">
        ${producto.provisional ? '<span class="product-badge">Precio provisorio</span>' : ""}
      </div>
      <div class="product-info">
        <h3>${escaparHTML(producto.nombre)}</h3>
        <p>${escaparHTML(producto.descripcion)}</p>
        <strong class="price">${formatoPrecio(producto.precio)}</strong>
        <button class="buy-button" type="button">Elegir opciones</button>
      </div>
    `;

    tarjeta.querySelector(".buy-button").addEventListener("click", () => {
      abrirProducto(producto.id);
    });

    contenedor.appendChild(tarjeta);
  });
}

/* ==========================================
   FICHA DE PRODUCTO
========================================== */

let cantidadProducto = 1;

function opcionesSelect(lista) {
  return lista.map((opcion) =>
    `<option value="${escaparHTML(opcion)}">${escaparHTML(opcion)}</option>`
  ).join("");
}

function abrirProducto(id) {
  const producto = productos.find((item) => item.id === id);
  if (!producto) return;

  cantidadProducto = 1;

  const detalle = $("#productDetail");

  detalle.innerHTML = `
    <div class="product-detail-grid">
      <div class="detail-image">
        <img src="${escaparHTML(producto.imagen)}" alt="${escaparHTML(producto.nombre)}">
      </div>

      <div class="detail-info">
        <h2>${escaparHTML(producto.nombre)}</h2>
        <p>${escaparHTML(producto.descripcion)}</p>
        <div class="detail-price">${formatoPrecio(producto.precio)}</div>

        ${producto.provisional
          ? '<p class="note">Precio provisorio, sujeto a confirmación.</p>'
          : ""}

        <form id="productOptions" class="product-options">

          <div class="option-group">
            <label for="productColor">Color</label>
            <select id="productColor" required>
              ${opcionesSelect(producto.colores)}
            </select>
          </div>

          ${producto.talles.length ? `
          <div class="option-group">
            <label for="productSize">Talle</label>
            <select id="productSize" required>
              ${opcionesSelect(producto.talles)}
            </select>
          </div>` : ""}

          <div class="option-group">
            <label for="productPrint">Ubicación de la estampa</label>
            <select id="productPrint" required>
              ${opcionesSelect(producto.ubicaciones)}
            </select>
          </div>

          <div class="option-group">
            <label for="productDesign">Diseño</label>
            <select id="productDesign" required>
              ${opcionesSelect(producto.disenos)}
            </select>
          </div>

          <div class="option-group">
            <label for="productNotes">Detalles de personalización (opcional)</label>
            <textarea id="productNotes" maxlength="500"
              placeholder="Ej.: nombre, frase, referencia o idea de estampa..."></textarea>
          </div>

          <div class="option-group">
            <label>Cantidad</label>
            <div class="quantity-selector">
              <button id="minusProduct" type="button">−</button>
              <span id="productQuantity">1</span>
              <button id="plusProduct" type="button">+</button>
            </div>
          </div>

          <button class="add-cart-button" type="submit">
            Agregar al carrito
          </button>
        </form>
      </div>
    </div>
  `;

  $("#minusProduct").addEventListener("click", () => {
    cantidadProducto = Math.max(1, cantidadProducto - 1);
    $("#productQuantity").textContent = cantidadProducto;
  });

  $("#plusProduct").addEventListener("click", () => {
    cantidadProducto = Math.min(99, cantidadProducto + 1);
    $("#productQuantity").textContent = cantidadProducto;
  });

  $("#productOptions").addEventListener("submit", (evento) => {
    evento.preventDefault();

    agregarAlCarrito({
      id: producto.id,
      nombre: producto.nombre,
      imagen: producto.imagen,
      precio: producto.precio,
      provisional: producto.provisional,
      color: $("#productColor").value,
      talle: $("#productSize")?.value || "No aplica",
      estampa: $("#productPrint").value,
      diseno: $("#productDesign").value,
      notas: $("#productNotes").value.trim(),
      cantidad: cantidadProducto
    });

    cerrarDialogo($("#productDialog"));
    mostrarToast("¡Producto agregado al carrito! ♡");
  });

  abrirDialogo($("#productDialog"));
}

/* ==========================================
   CARRITO CON LOCALSTORAGE
========================================== */

const STORAGE_KEY = "tuSouvenirCarritoV2";

function cargarCarrito() {
  try {
    const guardado = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!Array.isArray(guardado)) return [];

    // Reconstruimos desde el catálogo actual para
    // evitar utilizar precios viejos guardados.
    return guardado.flatMap((item) => {
      const producto = productos.find((p) => p.id === item.id);
      if (!producto) return [];

      const cantidad = Math.max(1, Math.min(99, Number(item.cantidad) || 1));

      return [{
        id: producto.id,
        nombre: producto.nombre,
        imagen: producto.imagen,
        precio: producto.precio,
        provisional: producto.provisional,
        color: String(item.color || ""),
        talle: String(item.talle || "No aplica"),
        estampa: String(item.estampa || ""),
        diseno: String(item.diseno || ""),
        notas: String(item.notas || "").slice(0, 500),
        cantidad
      }];
    });
  } catch {
    return [];
  }
}

let carrito = cargarCarrito();

function guardarCarrito() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(carrito));
  } catch {
    mostrarToast("No se pudo guardar el carrito en este navegador.");
  }
}

function claveProducto(item) {
  return JSON.stringify([
    item.id,
    item.color,
    item.talle,
    item.estampa,
    item.diseno,
    item.notas
  ]);
}

function agregarAlCarrito(item) {
  const clave = claveProducto(item);
  const existente = carrito.find((producto) => claveProducto(producto) === clave);

  if (existente) {
    existente.cantidad = Math.min(99, existente.cantidad + item.cantidad);
  } else {
    carrito.push(item);
  }

  actualizarCarrito();
}

function cambiarCantidad(indice, diferencia) {
  if (!carrito[indice]) return;

  const nuevaCantidad = carrito[indice].cantidad + diferencia;

  if (nuevaCantidad <= 0) {
    carrito.splice(indice, 1);
  } else {
    carrito[indice].cantidad = Math.min(99, nuevaCantidad);
  }

  actualizarCarrito();
}

function eliminarProducto(indice) {
  carrito.splice(indice, 1);
  actualizarCarrito();
}

function calcularTotal() {
  return carrito.reduce((total, item) =>
    total + item.precio * item.cantidad, 0);
}

function actualizarCarrito() {
  guardarCarrito();

  const cantidadTotal = carrito.reduce((suma, item) => suma + item.cantidad, 0);
  $("#count").textContent = cantidadTotal;

  $("#total").textContent = formatoPrecio(calcularTotal());
  $("#checkoutButton").disabled = carrito.length === 0;

  renderizarCarrito();
}

function renderizarCarrito() {
  const contenedor = $("#cartItems");
  contenedor.innerHTML = "";

  if (!carrito.length) {
    contenedor.innerHTML = `
      <div class="empty-cart">
        <p style="font-size:35px">🛍️</p>
        <h3>Tu carrito está vacío</h3>
        <p>¡Elegí tus productos favoritos!</p>
      </div>
    `;
    return;
  }

  carrito.forEach((item, indice) => {
    const elemento = crearElemento("article", "cart-item");

    elemento.innerHTML = `
      <img src="${escaparHTML(item.imagen)}" alt="${escaparHTML(item.nombre)}">

      <div>
        <h3>${escaparHTML(item.nombre)}</h3>

        <p>Color: ${escaparHTML(item.color)}</p>
        <p>Talle: ${escaparHTML(item.talle)}</p>
        <p>Estampa: ${escaparHTML(item.estampa)}</p>
        <p>Diseño: ${escaparHTML(item.diseno)}</p>

        ${item.notas
          ? `<p>Detalle: ${escaparHTML(item.notas)}</p>`
          : ""}

        <div class="cart-item-price">
          ${formatoPrecio(item.precio * item.cantidad)}
        </div>

        <p>${formatoPrecio(item.precio)} c/u
          ${item.provisional ? " · Provisorio" : ""}
        </p>

        <div class="cart-item-actions">
          <div class="cart-qty">
            <button class="qty-minus" type="button" aria-label="Restar unidad">−</button>
            <strong>${item.cantidad}</strong>
            <button class="qty-plus" type="button" aria-label="Sumar unidad">+</button>
          </div>

          <button class="remove-item" type="button">
            Eliminar
          </button>
        </div>
      </div>
    `;

    elemento.querySelector(".qty-minus").addEventListener("click", () => {
      cambiarCantidad(indice, -1);
    });

    elemento.querySelector(".qty-plus").addEventListener("click", () => {
      cambiarCantidad(indice, 1);
    });

    elemento.querySelector(".remove-item").addEventListener("click", () => {
      eliminarProducto(indice);
    });

    contenedor.appendChild(elemento);
  });
}

/* ==========================================
   FINALIZAR PEDIDO POR WHATSAPP
========================================== */

function finalizarPedido() {
  if (!carrito.length) {
    mostrarToast("Agregá un producto antes de finalizar.");
    return;
  }

  if (!/^\d{10,15}$/.test(WHATSAPP_TIENDA)) {
    mostrarToast("Configurá el número de WhatsApp de la tienda en app.js.");
    return;
  }

  let mensaje = "¡Hola! ♡ Quiero realizar un pedido en Tu Souvenir Personalizado.\n\n";

  carrito.forEach((item, indice) => {
    mensaje += `${indice + 1}. ${item.nombre}\n`;
    mensaje += `Color: ${item.color}\n`;
    mensaje += `Talle: ${item.talle}\n`;
    mensaje += `Estampa: ${item.estampa}\n`;
    mensaje += `Diseño: ${item.diseno}\n`;

    if (item.notas) {
      mensaje += `Personalización: ${item.notas}\n`;
    }

    mensaje += `Cantidad: ${item.cantidad}\n`;
    mensaje += `Precio unitario: ${formatoPrecio(item.precio)}\n`;
    mensaje += `Subtotal: ${formatoPrecio(item.precio * item.cantidad)}\n`;

    if (item.provisional) {
      mensaje += "(Precio provisorio)\n";
    }

    mensaje += "\n";
  });

  mensaje += `TOTAL: ${formatoPrecio(calcularTotal())}\n`;
  mensaje += "Envío no incluido.\n\n";
  mensaje += "Quisiera confirmar disponibilidad, personalización y precio final. ¡Gracias!";

  const url = `https://wa.me/${WHATSAPP_TIENDA}?text=${encodeURIComponent(mensaje)}`;

  window.open(url, "_blank", "noopener,noreferrer");

  // No vaciamos el carrito hasta que el pedido
  // sea confirmado por la tienda.
}

/* ==========================================
   EVENTOS GENERALES
========================================== */

document.addEventListener("DOMContentLoaded", () => {

  $("#year").textContent = new Date().getFullYear();

  iniciarSlider();
  renderizarFiltros();
  renderizarProductos();
  actualizarCarrito();

  $("#cartButton").addEventListener("click", () => {
    actualizarCarrito();
    abrirDialogo($("#cartDialog"));
  });

  $("#closeCart").addEventListener("click", () => {
    cerrarDialogo($("#cartDialog"));
  });

  $("#closeProduct").addEventListener("click", () => {
    cerrarDialogo($("#productDialog"));
  });

  $("#clearCart").addEventListener("click", () => {
    if (!carrito.length) return;

    if (confirm("¿Querés vaciar todo el carrito?")) {
      carrito = [];
      actualizarCarrito();
      mostrarToast("Carrito vaciado.");
    }
  });

  $("#checkoutButton").addEventListener("click", finalizarPedido);

  $("#searchForm").addEventListener("submit", (evento) => {
    evento.preventDefault();

    busquedaActual = $("#search").value.trim();
    categoriaActual = "Todos";

    renderizarFiltros();
    renderizarProductos();

    $("#productos").scrollIntoView({ behavior: "smooth" });
  });

  $("#search").addEventListener("input", (evento) => {
    busquedaActual = evento.target.value.trim();
    renderizarProductos();
  });

  document.querySelectorAll("[data-nav-category], [data-category-link]").forEach((enlace) => {
    enlace.addEventListener("click", () => {
      const categoria =
        enlace.dataset.navCategory || enlace.dataset.categoryLink;

      busquedaActual = "";
      $("#search").value = "";
      seleccionarCategoria(categoria);
    });
  });

  // Cerrar diálogos al hacer clic fuera de su contenido.
  [$("#cartDialog"), $("#productDialog")].forEach((dialogo) => {
    dialogo.addEventListener("click", (evento) => {
      if (evento.target === dialogo) {
        cerrarDialogo(dialogo);
      }
    });
  });

});
