import { obtenerImagen, mostrarAnimales, limpiarFormulario, animalesRegistrados } from "./funciones.js";
import { Leon, Lobo, Oso, Serpiente, Aguila } from "./animal.js";

(()=>{
document.getElementById("btnRegistrar").addEventListener("click", async () => {
    const nombreAnimal = document.getElementById("animal").value;
    const edadAnimal = document.getElementById("edad").value;
    const comentarios = document.getElementById("comentarios").value;

    // Validación de campos
    if (!nombreAnimal || !edadAnimal || !comentarios.trim()) {
        alert("Por favor, completa todos los campos antes de agregar el animal.");
        return;
    }

    try {
        const rutaImagen = await obtenerImagen(nombreAnimal);
        let audio = "";
        if (nombreAnimal === "Aguila") {
           audio = "Chillido";            
        }if (nombreAnimal === "Leon") {
            audio = "Rugido";
        }if (nombreAnimal === "Lobo") {
            audio = "Aullido";
        }if (nombreAnimal === "Oso") {
            audio = "Grunido";
        }if (nombreAnimal === "Serpiente") {
            audio = "Siseo";
        }
        const sonido = `./assets/sounds/${audio}.mp3`;

        let animal;
        switch (nombreAnimal) {
            case "Leon": animal = new Leon(nombreAnimal, edadAnimal, rutaImagen, comentarios, sonido); break;
            case "Lobo": animal = new Lobo(nombreAnimal, edadAnimal, rutaImagen, comentarios, sonido); break;
            case "Oso": animal = new Oso(nombreAnimal, edadAnimal, rutaImagen, comentarios, sonido); break;
            case "Serpiente": animal = new Serpiente(nombreAnimal, edadAnimal, rutaImagen, comentarios, sonido); break;
            case "Aguila": animal = new Aguila(nombreAnimal, edadAnimal, rutaImagen, comentarios, sonido); break;
        }

        animalesRegistrados.push(animal);
        mostrarAnimales();
        limpiarFormulario();
    } catch (error) {
        console.error("Error al registrar el animal:", error);
    }
});

document.getElementById("animal").addEventListener("change", async (event) => {
    const nombreAnimal = event.target.value;
    const preview = document.getElementById("preview");

    try {
        // Obtener la imagen del animal seleccionado
        const rutaImagen = await obtenerImagen(nombreAnimal);

        // Mostrar la imagen en el preview
        preview.innerHTML = `<img src="${rutaImagen}" alt="${nombreAnimal}" class="img-fluid" />`;
    } catch (error) {
        preview.innerHTML = "<p>Imagen no disponible</p>";
        console.log("Error al cargar la imagen: ", error);
    }
});
})();
