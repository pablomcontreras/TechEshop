import axios from "axios";

const baseUrl = "https://api.mercadolibre.com/sites/MLA/";

export function getAll() {
  return axios.get(`${baseUrl}/search?q=iphone`);
}

export function getBySearchTerm(props) {
  return axios.get(`${baseUrl}/search?q=${props.searchTerm}`);
}
