import axios from "axios";

const baseUrl = "https://api.mercadolibre.com/sites/MLA/";
const limiteResultados = 12;

export function getAll() {
  return axios.get(`${baseUrl}/search?q=iphone&limit=${limiteResultados.toString()}`);
}

export function getBySearchTerm(term) {
  console.log("Se llamo a search by term con termino:", term);
  return axios.get(`${baseUrl}/search?q=${term}&limit=${limiteResultados.toString()}`);
}

export function getById(id) {
  return axios.get(`https://api.mercadolibre.com/items/${id}`);

}
