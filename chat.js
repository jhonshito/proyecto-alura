
// aqui estan las etiquetas HTML que necesito para hacer mis funciones con javascript
const botonEncriptar = document.querySelector('.boton-encriptar');
const input = document.querySelector('.ingresa-texto');
const botonDesencriptar = document.querySelector('.boton-desencriptar');
const recipiente = document.querySelector('.recipiente');
const botonCopiar = document.querySelector('.boton-copiar')
const contenedor = document.querySelector('.contenedor');


// aqui va el codigo de encriptar el texto
input.focus();

botonEncriptar.addEventListener(('click'), () => {
    input.focus();
    recipiente.textContent = input.value;
    contenedor.classList.add('ocultar');
    recipiente.classList.remove('ocultar')
    botonCopiar.classList.remove('ocultar')

});


// aqui va el codigo de desencriptar el texto

botonDesencriptar.addEventListener('click', () => {
    recipiente.textContent = '';
    recipiente.classList.add('ocultar');
    contenedor.classList.remove('ocultar');
    botonCopiar.classList.add('ocultar')
})


// aqui va el evento de copiar texto

botonCopiar.addEventListener(('click'), () => {
    recipiente.select();
    recipiente = document.execCommand('copy');
})

