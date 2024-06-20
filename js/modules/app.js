
export const getAllInfoPeople = async () => {

    const url = ("https://6674179975872d0e0a950e53.mockapi.io/user");
    const custom = { method: "GET" };

    let res = await fetch(url, custom);
    let data = await res.json();
    return data;
}