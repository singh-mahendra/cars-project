//http://localhost:3001/cars?manufacturer=Fiiii&color=white&sort=asc&page=2

const API_URL = "http://localhost:3001";

const fetchCarsFromAPI = async ({manufaturerName, color, currentPage, isAscending}) => {
    let url = `${API_URL}/cars?`;
    url += isAscending !== undefined ? `${createSortCriteria(isAscending)}`: "";
    url += manufaturerName || color ? `&${createFilterCriteria(manufaturerName, color)}`: "";
    url += currentPage ? `&page=${currentPage}` : "";
    return await fetch(url);
}

const createSortCriteria = (isAscending) =>{
    return "sort=" + (isAscending ? "asc" : "desc");
}

const createFilterCriteria = (manufaturerName, color) =>{
    let filterCriteria = "";
    filterCriteria += manufaturerName ?  `manufacturer=${manufaturerName}` : "";
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
