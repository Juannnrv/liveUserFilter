
export const profiles = async (info) => {
    let plantilla = "";

    for (let i = 0; i < info.length; i++) {
        plantilla += `
        <div class="profile">
            <img src="${info[i].avatar}" alt="img">
            <div class="profile_info">
                <h2>${info[i].name_full}</h2>
                <p>${info[i].description}</p>
            </div>
        </div> 
        <hr> 
        `;
    }
    return plantilla;
};
