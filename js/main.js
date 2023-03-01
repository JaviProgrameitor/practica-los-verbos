//Variables

//Variable Generales
let html = document.documentElement;
let body = document.body;

//Variable Templates
const contenedorBurbujasContenido = document.querySelector(".contenedor-burbujas__contenido"),
  template = document.getElementById("template-burbujas").content,
  fragmento = document.createDocumentFragment();

let contador = 1;

//Variable Burbujas
const botonEliminarBurbujas = document.querySelector(".boton-eliminar"),
  botonComenzarBurbujas = document.querySelector(".boton-comenzar"),
  contenedorTiempos = document.querySelector(".contenedor-burbujas__contenido-tiempos"),
  tarjetasTiempos = document.querySelectorAll(".burbujas-tiempos");

let tarjetasBurbujas;
let burbujasSeleccionadas = [];
let indexBurbujasSeleccionadas = [];
let indexTiemposSeleccionadas = [];
let tiemposVerbales = ["Español", "Infinitivo", "Pasado Simple", "Pasado Participio"];
let burbujas = [
  [
    [
      "Soplar",
      "Blow",
      "Blew",
      "Blown"
    ],
    [
      "Crecer",
      "Grow",
      "Grew",
      "Grown"
    ],
    [
      "Saber",
      "Know",
      "Knew",
      "Known"
    ],
    [
      "Lanzar",
      "Throw",
      "Threw",
      "Thrown"
    ],
    [
      "Dibujar",
      "Draw",
      "Drew",
      "Drawn"
    ],
    [
      "Volar",
      "Fly",
      "Flew",
      "Flown"
    ],
  ],
  [
    [
      "Mantener",
      "Keep",
      "Kept",
      "Kept"
    ],
    [
      "Dormir", 
      "Sleep",
      "Slept",
      "Slept"
    ],
    [
      "Barrer",
      "Sweep",
      "Swept",
      "Swept"
    ],
    [
      "Dejar",
      "Leave",
      "Left",
      "Left"
    ],
    [
      "Sentir",
      "Feel",
      "Felt",
      "Felt"
    ],
  ],
  [
    [
      "Permitir",
      "Let",
      "Let",
      "Let"
    ],
    [
      "Poner",
      "Put",
      "Put",
      "Put"
    ],
    [
      "Leer",
      "Read",
      "Read",
      "Read"
    ],
    [
      "Cerrar",
      "Shut",
      "Shut",
      "Shut"
    ],
    [
      "Cortar",
      "Cut",
      "Cut",
      "Cut"
    ],
    [
      "Golpear",
      "Hit",
      "Hit",
      "Hit"
    ],
    [
      "Lastimar",
      "Hurt",
      "Hurt",
      "Hurt"
    ],
  ],
  [
    [
      "Beber",
      "Drink",
      "Drank",
      "Drunk"
    ],
    [
      "Comenzar",
      "Begin",
      "Began",
      "Begun"
    ],
    [
      "Sonar",
      "Ring",
      "Rang",
      "Rung"
    ],
    [
      "Hundir",
      "Sink",
      "Sank",
      "Sunk"
    ],
    [
      "Cantar",
      "Sing",
      "Sang",
      "Sung"
    ],
    [
      "Nadar",
      "Swim",
      "Swam",
      "Swum"
    ],
  ],
  [
    [
      "Vender",
      "Sell",
      "Sold",
      "Sold"
    ],
    [
      "Contar",
      "Tell",
      "Told",
      "Told"
    ],
  ],
  [
    [
      "Pagar",
      "Pay",
      "Paid",
      "Paid"
    ],
    [
      "Decir",
      "Say",
      "Said",
      "Said"
    ],
    [
      "Acomodar",
      "Lay",
      "Laid",
      "Laid"
    ],
  ],
  [
    [
      "Romper",
      "Break",
      "Broke",
      "Broken"
    ],
    [
      "Hablar",
      "Speak",
      "Spoke",
      "Spoken"
    ],
    [
      "Robar",
      "Steal",
      "Stole",
      "Stolen"
    ],
    [
      "Elegir",
      "Choose",
      "Chosen",
      "Chosen"
    ],
    [
      "Congelar",
      "Freeze",
      "Frozen",
      "Frozen"
    ],
    [
      "Despertar",
      "Wake",
      "Woke",
      "Woken"
    ],
  ],
  [
    [
      "Traer",
      "Bring",
      "Brought",
      "Brought"
    ],
    [
      "Comprar",
      "Buy",
      "Bought",
      "Bought"
    ],
    [
      "Pelear",
      "Fight",
      "Fought",
      "Fought"
    ],
    [
      "Pensar",
      "Think",
      "Thought",
      "Thought"
    ],
    [
      "Atrapar",
      "Catch",
      "Caught",
      "Caught"
    ],
    [
      "Enseñar",
      "Teach",
      "Taught",
      "Taught"
    ]
  ],
  [
    [
      "Conducir",
      "Drive",
      "Drove",
      "Driven"
    ],
    [
      "Montar",
      "Ride",
      "Rode",
      "Ridden"
    ],
    [
      "Elevar",
      "Rise",
      "Rose",
      "Rosen"
    ],
    [
      "Escribir",
      "Write",
      "Wrote",
      "Written"
    ],
  ],
  [
    [
      "Ser o Estar",
      "Be",
      "Was / Were",
      "Been"
    ],
    [
      "Hacer",
      "Do",
      "Did",
      "Done"
    ],
    [
      "Comer",
      "Eat",
      "Ate",
      "Eaten"
    ],
    [
      "Ver",
      "See",
      "Saw",
      "Seen"
    ],
    [
      "Ir",
      "Go",
      "Went",
      "Gone"
    ],
    [
      "Correr",
      "Run",
      "Ran",
      "Run"
    ],
    [
      "Dar",
      "Give",
      "Gave",
      "Given"
    ],
    [
      "Caer",
      "Fall",
      "Fell",
      "Fallen"
    ],
  ],
  [
    [
      "Conseguir",
      "Get",
      "Got",
      "Got"
    ],
    [
      "Olvidar",
      "Forget",
      "Forgot",
      "Forgotten"
    ],
    [
      "Permanecer",
      "Stand",
      "Stood",
      "Stood"
    ],
    [
      "Entender",
      "Understand",
      "Understood",
      "Understood"
    ],
    [
      "Venir",
      "Come",
      "Came",
      "Come"
    ],
    [
      "Convertirse",
      "Become",
      "Became",
      "Become"
    ],
  ],
  [
    [
      "Aprender",
      "Learn",
      "Learnt",
      "Learnt"
    ],
    [
      "Significar",
      "Mean",
      "Meant",
      "Meant"
    ],
    [
      "Quemar",
      "Burn",
      "Burnt",
      "Burnt"
    ],
    [
      "Soñar",
      "Dream",
      "Dreamt",
      "Dreamt"
    ],
    [
      "Deletrear",
      "Spell",
      "Spelt",
      "Spelt"
    ],
    [
      "Oler",
      "Smell",
      "Smelt",
      "Smelt"
    ],
  ],
  [
    [
      "Gastar / Pasar",
      "Spend",
      "Spent",
      "Spent"
    ],
    [
      "Enviar",
      "Send",
      "Sent",
      "Sent"
    ],
    [
      "Construir",
      "Build",
      "Built",
      "Built"
    ],
    [
      "Prestar",
      "Lend",
      "Lent",
      "Lent"
    ],
    [
      "Doblar / Curvear",
      "Bend",
      "Bent",
      "Bent"
    ]
  ],
  [
    [
      "Tener",
      "Have",
      "Had",
      "Had"
    ],
    [
      "Perder",
      "Lose",
      "Lost",
      "Lost"
    ],
    [
      "Ganar",
      "Win",
      "Won",
      "Won"
    ],
    [
      "Cavar",
      "Dig",
      "Dug",
      "Dug"
    ],
    [
      "Sentar",
      "Sit",
      "Sat",
      "Sat"
    ],
    [
      "Brillar",
      "Shine",
      "Shone",
      "Shone"
    ],
    [
      "Mantener",
      "Hold",
      "Held",
      "Held"
    ],
    [
      "Crear",
      "Make",
      "Made",
      "Made"
    ],
    [
      "Encontar",
      "Find",
      "Found",
      "Found"
    ],
    [
      "Oír",
      "Hear",
      "Heard",
      "Heard"
    ],
  ],
  [
    [
      "Jurar",
      "Swear",
      "Swore",
      "Sworn"
    ],
    [
      "Vestir",
      "Wear",
      "Wore",
      "Worn"
    ],
    [
      "Rasgar",
      "Tear",
      "Tore",
      "Torn"
    ],
  ],
  [
    [
      "Alimentar",
      "Feed",
      "Fed",
      "Fed"
    ],
    [
      "Reunir",
      "Meet",
      "Met",
      "Met"
    ],
  ],
  [
    [
      "Agitar",
      "Shake",
      "Shook",
      "Shaken"
    ],
    [
      "Tomar",
      "Take",
      "Took",
      "Taken"
    ],
  ],
];

//Variables Contenedor Respuestas
let contenedorRespuestas = document.querySelector(".contenedor-respuestas");
let padreRespuestas = document.querySelector(".padre-respuestas");
let divRespuesta = document.createElement("div");

//Variables Modal Trabajo
const modalTrabajo = document.querySelector(".modal"),
  modalContenido = document.querySelector(".modal__contenido"),
  modalPregunta = document.querySelector("[data-pregunta]"),
  modalContenidoOpciones = document.querySelector("[data-contenido-opciones]"),
  modalOpciones = Array.from(document.querySelectorAll("[data-opciones]")),
  modalBoton = document.querySelector(".modal__boton");

const divSalir = document.createElement("div"),
  modalSalirBoton = document.createElement("i");

divSalir.classList.add("modal__salir");
modalSalirBoton.classList.add("fa-solid","fa-trash", "modal__icon-salir");

divSalir.appendChild(modalSalirBoton);

let n2 = 0;
let n1 = 0;
let numeroPregunta = 1;
let ordenCajas = [
  [
    0,
    1,
    2,
    3
  ],
  [
    1,
    0,
    2,
    3
  ],
  [
    2,
    1,
    0,
    3
  ],
  [
    3,
    1,
    2,
    0
  ],
];
let respuestaUsuario = "";
let indexOpcion = [];

//Variable Cambio theme
const botonTheme = document.querySelector(".boton-theme"),
  toggle = document.querySelector(".toggle"),
  toggleHandler = document.querySelector(".toggle__handler"),
  star = document.querySelectorAll(".star"),
  textos = document.querySelectorAll("[data-theme-texto]");

var storageTheme;

//Templates
burbujas.forEach(el => {
  template.querySelector(".burbuja-span").textContent = `Burbuja ${contador}`;
  contador++;

  let clone = document.importNode(template, true);
  fragmento.appendChild(clone);
});

contenedorBurbujasContenido.appendChild(fragmento);

//Tarjetas Burbujas
tarjetasBurbujas = document.querySelectorAll(".burbujas");

contenedorBurbujasContenido.addEventListener("click", (e) => {
  let padre = e.target.offsetParent;
  let elementoIndex;

  //Se agregan estos estilos al dar clicka cada uno de las burbujas
  if(e.target && e.target.tagName === "DIV" && detectarIndex(contenedorBurbujasContenido, e.target) >= 0) {
    e.target.classList.add("seleccionada");

    elementoIndex = detectarIndex(contenedorBurbujasContenido, e.target);
  }

  if(e.target && e.target.tagName === "SPAN" && e.target.className) {
    padre.classList.add("seleccionada");

    elementoIndex = detectarIndex(contenedorBurbujasContenido, padre);
  }

  //Detectar si ya se dió click al elemento para agregarlo al array
  if(detectarElemento(indexBurbujasSeleccionadas, elementoIndex)) {
    indexBurbujasSeleccionadas.push(elementoIndex);
    burbujasSeleccionadas.push(burbujas[elementoIndex]);
  }
});

contenedorTiempos.addEventListener("click", (e) => {
  let elementoIndex;

  //Se agregan estos estilos al dar click a cada una de las burbujas
  if(e.target && e.target.tagName === "DIV" && detectarIndex(contenedorTiempos, e.target) >= 0) {
    if(indexTiemposSeleccionadas.length == 0) {
      e.target.classList.add("seleccionada");
    }

    else if(!indexTiemposSeleccionadas.length == 0) {
      contenedorTiempos.children[indexTiemposSeleccionadas[0]].classList.remove("seleccionada");
      e.target.classList.add("seleccionada");
    }

    elementoIndex = detectarIndex(contenedorTiempos, e.target);
  }

  //Detectar si ya se dió click al elemento para agregarlo al array
  if(indexTiemposSeleccionadas.length == 0) {
    indexTiemposSeleccionadas.push(elementoIndex);
  }

  else if(detectarElemento(indexTiemposSeleccionadas, elementoIndex)) {
    indexTiemposSeleccionadas.splice(0, 1, elementoIndex);
  }
});

botonEliminarBurbujas.addEventListener("click", () => {
  eliminarEstilosBurgujas(indexBurbujasSeleccionadas, contenedorBurbujasContenido, "seleccionada");
  eliminarEstilosBurgujas(indexTiemposSeleccionadas, contenedorTiempos, "seleccionada");
  indexBurbujasSeleccionadas = [];
  burbujasSeleccionadas = [];
  indexTiemposSeleccionadas = [];
});

botonComenzarBurbujas.addEventListener("click", () => {
  if(!indexBurbujasSeleccionadas.length == 0 && !indexTiemposSeleccionadas.length == 0) {
    modalTrabajo.style.setProperty("display", "block");
    body.classList.add("body-modal");
  
    juegoVerbos();
    asignandoVerbos();
    modalBoton.textContent = "Continuar";
    modalContenido.appendChild(divSalir);
  };
});

//Modal trabajo 
modalBoton.addEventListener("click", ()=> {
  if(indexOpcion.length >= 0 && !respuestaUsuario == "") {
    validarRespuesta(respuestaUsuario, divRespuesta);
    eliminarEstilosBurgujas(indexOpcion, modalContenidoOpciones, "opcion-seleccionada");
    indexOpcion = [];
    respuestaUsuario = "";
    
    if(n2 < (burbujasSeleccionadas[n1].length - 1)) {
      n2 = n2 + 1;
    }

    else if(n2 == (burbujasSeleccionadas[n1].length) - 1 && n1 < (burbujasSeleccionadas.length - 1)) {
      n1 = n1 + 1;
      n2 = 0;
    }

    if(n2 == (burbujasSeleccionadas[n1].length) - 1 && n1 == (burbujasSeleccionadas.length - 1) && modalBoton.textContent == "Terminar") {
      modalTrabajo.style.setProperty("display", "none");
      body.classList.remove("body-modal");
      n2 = 0;
      n1 = 0;
      numeroPregunta = 1;

      let separador = document.createElement("div");
      separador.classList.add("separador");

      divRespuesta.appendChild(separador);
      divRespuesta.classList.add("contenedor-respuestas__respuesta");
      contenedorRespuestas.appendChild(divRespuesta);
      padreRespuestas.classList.add("contenedor-activo");
    }

    if(n2 == (burbujasSeleccionadas[n1].length) - 1 && n1 == (burbujasSeleccionadas.length - 1)) {
      modalBoton.textContent = "Terminar";
    }

    juegoVerbos();
    asignandoVerbos();
  };
});

modalContenidoOpciones.addEventListener("click", (e) => {
  if(e.target && e.target.tagName === "DIV" && detectarIndex(modalContenidoOpciones, e.target) >= 0) {
      respuestaUsuario = e.target.textContent;

      if(indexOpcion.length == 0) {
        indexOpcion.push(detectarIndex(modalContenidoOpciones, e.target));
      }
      
      else if(indexOpcion.length >= 0) {
        eliminarEstilosBurgujas(indexOpcion, modalContenidoOpciones, "opcion-seleccionada");
        indexOpcion.splice(0, 1, detectarIndex(modalContenidoOpciones, e.target));
      }

      
      e.target.classList.add("opcion-seleccionada");
  };
});

divSalir.addEventListener("click", () => {
  modalTrabajo.style.setProperty("display", "none");
  body.classList.remove("body-modal");
  eliminarEstilosBurgujas(indexOpcion, modalContenidoOpciones, "opcion-seleccionada");

  indexOpcion = [];
  respuestaUsuario = "";
  n1 = 0;
  n2 = 0;
  numeroPregunta = 1;

  let separador = document.createElement("div");
  let informar = document.createElement("span");

  informar.textContent = "--- JUEGO INTERRUMPIDO ---";
  informar.classList.add("respuesta-incorrecta");
  separador.classList.add("separador");

  divRespuesta.appendChild(informar);
  divRespuesta.appendChild(separador);
  divRespuesta.classList.add("contenedor-respuestas__respuesta");
  contenedorRespuestas.appendChild(divRespuesta);
  padreRespuestas.classList.add("contenedor-activo");
});

//--cambio theme
botonTheme.addEventListener("click", () => {
  cambioTheme("toggle", toggle, "toggle-theme-dark", true);
  cambioTheme("toggle", toggleHandler, "toggle__handler-theme-dark", false);
  cambioTheme("toggle", html, "theme-dark", false);
  textos.forEach(tex => {
    cambioTheme("toggle", tex, "theme-dark-texto", false);
  });
    tarjetasBurbujas.forEach(tb => {
      cambioTheme("toggle", tb, "theme-dark-burbujas", false);
    });
  tarjetasTiempos.forEach(tbt => {
    cambioTheme("toggle", tbt, "theme-dark-burbujas", false);
  });
});

//windows
window.addEventListener("DOMContentLoaded", () => {
  //cambio theme
  if(localStorage.getItem("theme") == "desactivado") {
    cambioTheme("remove", toggle, "toggle-theme-dark", false);
    cambioTheme("remove", toggleHandler, "toggle__handler-theme-dark", false);
    cambioTheme("remove", html, "theme-dark", false);
    textos.forEach(tex => {
      cambioTheme("remove", tex, "theme-dark-texto", false);
    });
    tarjetasBurbujas.forEach(tb => {
      cambioTheme("remove", tb, "theme-dark-burbujas", false);
    });
    tarjetasTiempos.forEach(tbt => {
      cambioTheme("remove", tbt, "theme-dark-burbujas", false);
    });
  }

  else if(localStorage.getItem("theme") == "activado") {
    cambioTheme("add", toggle, "toggle-theme-dark", false);
    cambioTheme("add", toggleHandler, "toggle__handler-theme-dark", false);
    cambioTheme("add", html, "theme-dark", false);
    textos.forEach(tex => {
      cambioTheme("add", tex, "theme-dark-texto", false);
    });
    tarjetasBurbujas.forEach(tb => {
      cambioTheme("add", tb, "theme-dark-burbujas", false);
    });
    tarjetasTiempos.forEach(tbt => {
      cambioTheme("add", tbt, "theme-dark-burbujas", false);
    });
  }
});

//Funciones

//--cambio theme
function cambioTheme(tipo, elemento, clase, theme) {
  if(tipo == "add") {
    elemento.classList.add(clase);
  }

  else if(tipo == "toggle") {
    elemento.classList.toggle(clase);
  }

  else if(tipo == "remove") {
    elemento.classList.remove(clase);
  }

  //localstorage
  if(theme) {
    if(localStorage.getItem("theme") == "") {
      localStorage.setItem("theme", "desactivado");
      storageTheme = localStorage.getItem("theme");
    }

    if(localStorage.getItem("theme") == "desactivado") {
      localStorage.setItem("theme", "activado");
      storageTheme = localStorage.getItem("theme");
    }
  
    else if(localStorage.getItem("theme") == "activado") {
      localStorage.setItem("theme", "desactivado");
      storageTheme = localStorage.getItem("theme");
    }
  }
};

function detectarIndex(array, elemento) {
  let hijos = array.children;
  let newHIjos = Array.from(hijos);
  let indexhijo = newHIjos.indexOf(elemento);

  return indexhijo;
};

function detectarElemento(variable, posicion) {
  let comprobarIndex = variable.indexOf(posicion);

  if(posicion == undefined) {
    return false
  }

  else if(comprobarIndex == -1) {
    return true;
  }

  else if(comprobarIndex => 0) {
    return false;
  }
};

function eliminarEstilosBurgujas (variable, array, clase) {
  variable.forEach(el => {
    array.children[el].classList.remove(clase);
  })
};

function numeroAleatorio(min, maxi) {
  let resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  
  return resultado;
};

function juegoVerbos() {
  let verbo;

  if(tiemposVerbales[indexTiemposSeleccionadas[0]] == "Español" || tiemposVerbales[indexTiemposSeleccionadas[0]] == "Pasado Simple" || tiemposVerbales[indexTiemposSeleccionadas[0]] == "Pasado Participio") {
    verbo = 1;
  }

  else if(tiemposVerbales[indexTiemposSeleccionadas[0]] == "Infinitivo") {
    verbo = 0;
  }

  modalPregunta.textContent = `${tiemposVerbales[indexTiemposSeleccionadas[0]]} de ${burbujasSeleccionadas[n1][n2][verbo]}`;
};

function asignandoVerbos() {
  let posVerbo = numeroAleatorio(0, 3);
  //1
  let burbujaAleatoria1 = numeroAleatorio(0, (burbujas.length -1) );
  let verboAleatorio1 = numeroAleatorio(0, (burbujas[burbujaAleatoria1].length - 1));

  //2
  let burbujaAleatoria2 = numeroAleatorio(0, (burbujas.length -1) );
  let verboAleatorio2 = numeroAleatorio(0, (burbujas[burbujaAleatoria2].length - 1));

  //3
  let burbujaAleatoria3 = numeroAleatorio(0, (burbujas.length -1) );
  let verboAleatorio3 = numeroAleatorio(0, (burbujas[burbujaAleatoria3].length - 1));

  modalOpciones[ordenCajas[posVerbo][0]].textContent = burbujasSeleccionadas[n1][n2][indexTiemposSeleccionadas[0]];
  modalOpciones[ordenCajas[posVerbo][1]].textContent = burbujas[burbujaAleatoria1][verboAleatorio1][indexTiemposSeleccionadas[0]];
  modalOpciones[ordenCajas[posVerbo][2]].textContent = burbujas[burbujaAleatoria2][verboAleatorio2][indexTiemposSeleccionadas[0]];
  modalOpciones[ordenCajas[posVerbo][3]].textContent = burbujas[burbujaAleatoria3][verboAleatorio3][indexTiemposSeleccionadas[0]];
};

function validarRespuesta(res, caja) {
  let respuesta = res;
  let spanRespuesta = document.createElement("span");
  let verbo;

  if(tiemposVerbales[indexTiemposSeleccionadas[0]] == "Español" || tiemposVerbales[indexTiemposSeleccionadas[0]] == "Pasado Simple" || tiemposVerbales[indexTiemposSeleccionadas[0]] == "Pasado Participio") {
    verbo = 1;
  }

  else if(tiemposVerbales[indexTiemposSeleccionadas[0]] == "Infinitivo") {
    verbo = 0;
  }

  if(respuesta == burbujasSeleccionadas[n1][n2][indexTiemposSeleccionadas[0]]) {
    spanRespuesta.textContent = `${numeroPregunta}. El ${tiemposVerbales[indexTiemposSeleccionadas[0]]} de ${burbujasSeleccionadas[n1][n2][verbo]} es ${burbujasSeleccionadas[n1][n2][indexTiemposSeleccionadas[0]]}.`;
    spanRespuesta.classList.add("respuesta-correcta")
  }

  else if(respuesta != burbujasSeleccionadas[n1][n2][indexTiemposSeleccionadas[0]]) {
    spanRespuesta.textContent = `${numeroPregunta}. El ${tiemposVerbales[indexTiemposSeleccionadas[0]]} de ${burbujasSeleccionadas[n1][n2][verbo]} no es ${respuestaUsuario}, es ${burbujasSeleccionadas[n1][n2][indexTiemposSeleccionadas[0]]}.`;
    spanRespuesta.classList.add("respuesta-incorrecta");
  }

  numeroPregunta = numeroPregunta + 1;
  caja.appendChild(spanRespuesta);
};