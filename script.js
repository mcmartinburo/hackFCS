// Función para redirigir a otra página web
function irAotraWeb() {
    window.location.href = "https://mcmartinburo.github.io/hackRIF/"; // Cambia esta URL
}

// Función para descargar un archivo
function descargarArchivo() {
    // El archivo debe estar en tu repositorio de GitHub
    const urlArchivo = 'Hoja_de_respuestas.docx'; // Nombre del archivo en tu carpeta
    const nombreDescarga = 'Hoja_de_respuestas.docx'; // Como se llamará al bajar

    const link = document.createElement('a');
    link.href = urlArchivo;
    link.download = nombreDescarga;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}