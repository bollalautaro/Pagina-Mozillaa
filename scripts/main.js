let miImage = document.querySelector('img');
miImage.onclick = function () {
    let miSrc = miImage.getAttribute('src');
    if (miSrc === 'imagenes/1.png') {
      miImage.setAttribute('src','imagenes/2.png');
    } else {
      miImage.setAttribute('src', 'imagenes/1.png');
    }
}
let miBoton = document.querySelector('button');
let miTitulo = document.querySelector('h1'); 
function estableceNombreUsuario (){ 
let miNombre = prompt('Por favor, ingresa tu nombre.');
    localStorage.setItem('nombre', miNomre);
    miTitulo.textContent = 'Mozilla es genial,' + miNombre;
}

if (!localStorage.getItem('nombre') ) {
estableceNombreUsuario();    
}
else {
let nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'Mozilla es genial,' + nombreAlmacenado;
    }
miBoton.onclick = function() {
    estableceNombreUsuario();
}
function estableceNombreUsuario() {
  let miNombre = prompt('Introduzca su nombre.');
  if(!miNombre) {
    estableceNombreUsuario();
  } else {
    localStorage.setItem('nombre', miNombre);
    miTitulo.innerHTML = 'Mozilla is genial, ' + miNombre;
  }
}