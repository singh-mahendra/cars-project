//http://localhost:3001/cars?manufacturer=Fiiii&color=white&sort=asc&page=2

const API_URL = "http://localhost:3001";

const fetchCarsFromAPI = async (manufaturerName, color, pageNumber, isAscending) => {
    let url = `${API_URL}/cars`;
    url += "&" + createSortCriteria(isAscending);
    url += "&" + createFilterCriteria(manufaturerName, color);
    url += `&page=${pageNumber}`;
    return await fetch(`${API_URL}/cars`);
}

const createSortCriteria = (isAscending) =>{
    return "sort=" + (isAscending ? "asc" : "desc");
}

const createFilterCriteria = (manufaturerName, color) =>{
    let filterCriteria = "";
    filterCriteria += manufaturerName ?  `manufacturer=${manufaturerName}` : "";
    filterCriteria += color ? `color=${color}` : "";
    return filterCriteria;
}

export default fetchCarsFromAPI;
