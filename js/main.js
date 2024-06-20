import { getAllInfoPeople } from "./modules/app.js";
import { profiles } from "./components/profile.js";

let search = document.querySelector("#search");
let main_section = document.querySelector(".main_section");

addEventListener("DOMContentLoaded", async () => {
    let info = await getAllInfoPeople();

    main_section.innerHTML = await profiles(info);
    
    const names = () => {
        let array = [];
        for (let i = 0; i < info.length; i++) {
            array.push(info[i].name_full);
        }
        return array;
    };

    search.addEventListener("input", async e => {
        // let namePerson = names()

        // namePerson.filter(letra => {
        //     if (e.target.value === namePerson) {
        //         console.log(namePerson[i])
        //     }
        // })


    });
})