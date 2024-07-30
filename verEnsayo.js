const enviarRespuesta = require('./manejarClick');

enviarRespuesta().then((valor) => {
    console.log("El valor obtenido es:", valor);

    // Puedes hacer algo más con el valor aquí, por ejemplo, mostrarlo en la página
    document.getElementById("resultado").textContent = valor;
}).catch((error) => {
    console.error("Error al obtener la respuesta:", error);
});