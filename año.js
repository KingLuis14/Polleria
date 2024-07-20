/* variables y las constantes  */

/*  obtener el elemento mediante su id  */

const miSpan = document.getElementById("footer_año")

/* vamos a insertar un texto 
esto me devuelve el valor del año actual
*/

miSpan.innerText = new Date().getSeconds()