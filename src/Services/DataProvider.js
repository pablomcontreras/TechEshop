import axios from "axios";

const baseUrl = "https://api.mercadolibre.com";
const limiteResultados = 12;

export function getAll() {
  return axios.get(
    `${baseUrl}/sites/MLA/search?q=iphone&limit=${limiteResultados.toString()}`
  );
}

export function getBySearchTerm(term) {
  return axios.get(
    `${baseUrl}/sites/MLA/search?q=${term}&limit=${limiteResultados.toString()}`
  );
}

export function getById(id) {
  return axios.get(`${baseUrl}/items/${id}`);
}

export function getItemDescription(id) {

  return axios.get(`${baseUrl}/items/${id}/description`);


}
