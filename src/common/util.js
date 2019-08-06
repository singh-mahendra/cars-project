//http://localhost:3001/cars?manufacturer=Fiiii&color=white&sort=asc&page=2

const API_URL = "http://localhost:3001";

const fetchCarsFromAPI = async ({manufacturerName, color, currentPage, sortOrder}) => {
    let url = `${API_URL}/cars?`;
    url += sortOrder !== undefined ? createSortCriteria(sortOrder) : "";
    url += manufacturerName || color ? `&${createFilterCriteria(manufacturerName, color)}`: "";
    url += currentPage ? `&page=${currentPage}` : "";
    return await fetch(url);
}

const createSortCriteria = (sortOrder) =>{
    return `&sort=${sortOrder}`;
}

const createFilterCriteria = (manufacturerName, color) =>{
    let filterCriteria = "";
    filterCriteria += manufacturerName ?  `manufacturer=${manufacturerName}` : "";
    filterCriteria += color ? `&color=${color}` : "";
    return filterCriteria;
}

const fetchManufacturersFromAPI = async () => {
    let url = `${API_URL}/manufacturers`;
    return await fetch(url);
}


const fetchColorsFromAPI = async () => {
    let url = `${API_URL}/colors`;
    return await fetch(url);
}

export {fetchCarsFromAPI, fetchManufacturersFromAPI, fetchColorsFromAPI};
