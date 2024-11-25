import { Leon, Lobo, Oso, Serpiente, Aguila } from "./animal.js";

export const animalesRegistrados = [];

// Función para obtener la imagen del animal
export const obtenerImagen = async (nombreAnimal) => {
    const extensiones = ["jpg", "png"];
    for (const ext of extensiones) {
        const ruta = `./assets/imgs/${nombreAnimal}.${ext}`;
        const response = await fetch(ruta);
        if (response.ok) {
            return ruta;
        }
    }
    throw new Error("Imagen no encontrada");
};

// Función para mostrar los animales registrados
export const mostrarAnimales = () => {
    const contenedor = document.getElementById("Animales");
    contenedor.innerHTML = "";

    animalesRegistrados.forEach((animal, index) => {
        const card = document.createElement("div");
        card.className = "card m-2 p-2 bg-light";
        card.style.width = "200px";

        card.innerHTML = `
            <img src="${animal.img}" alt="${animal.nombre}" class="card-img-top img-fluid" style="height: 150px; object-fit: contain;" />
            <div class="card-body">
                <button class="btn btn-dark btn-sm" id="reproducir-${index}">Reproducir</button>
            </div>
        `;

        // Asignar el evento de clic al botón
        const botonReproducir = card.querySelector(`#reproducir-${index}`);
        botonReproducir.addEventListener("click", () => {
            animalesRegistrados[index].reproducirSonido(); // Llamamos a la función de reproducir sonido del animal
        });

        contenedor.appendChild(card);
    });
};

// Función para limpiar el formulario
export const limpiarFormulario = () => {
    document.getElementById("animal").value = "";
    document.getElementById("edad").value = "";
    document.getElementById("comentarios").value = "";
    document.getElementById("preview").innerHTML = "";
};
