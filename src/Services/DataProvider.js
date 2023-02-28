import axios from "axios";
import firebase from "../Services/FireBase";

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

export async function getUserData() {

  const user = firebase.auth().currentUser;

  if (!user.uid) {
    console.log("No hay ningun usuario logueado");
  } else if (user.uid) {
    console.log("User uid (desde auth): ", user.uid);
    let datosUsuario = await firebase
      .firestore()
      .collection("users")
      .where("userId", "==", user.uid)
      .get()
      ;
    const currentUser =  datosUsuario.docs[0].data();
    

    let usuarioData = {
      nombre: currentUser.nombre,
      apellido: currentUser.apellido,
      email: currentUser.email,
      uid: user.uid,
    };
    console.log("Usuario Actual: ", usuarioData);
    return usuarioData;
  }
}

export async function getFavData() {
    const user = firebase.auth().currentUser;

         const querySnapshot = await firebase
          .firestore()
           .collection("favs")
          .where("userId", "==", user.uid)
           .get();
  return querySnapshot.docs
}