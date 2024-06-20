import { getAllInfoPeople } from "./modules/app.js";
import { profiles } from "./components/profile.js";

let search = document.querySelector("#search");
let main_section = document.querySelector(".main_section");

addEventListener("DOMContentLoaded", async () => {
    let info = await getAllInfoPeople();
    console.log(info);

    main_section.innerHTML = await profiles(info); // Cargue personas por default
    

    search.addEventListener("input", async e => {
        
        const searchTerm = e.target.value.toLowerCase().trim().normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // Obtener el valor del input y convertirlo a minusculas, sin espacios y sin tildes

        const filteredProfiles = info.filter(person => {  // Comparar si el nombre o descripción de la persona incluye el termino de busqueda
            return person.name_full.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(searchTerm) || person.description.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(searchTerm); 
        });

        if (filteredProfiles.length === 0) { // Si no se encuentran personas
            main_section.innerHTML = /*html*/ `<h2>No se encontraron resultados</h2>
                <style>.main_section{display: flex; justify-content: center; align-items: center; margin-top: 50px; color: rgb(13, 160, 106)}</style>`;
        } else {
            main_section.innerHTML = await profiles(filteredProfiles);
        }
    });
})