import firebase from "../Services/FireBase";
import Spinner from "../Components/Spinner";
import { React, useState, useEffect } from "react";
import Header from "../Components/Header";
import { Container } from "react-bootstrap";
import TarjetaFavorito from "../Components/TarjetaFavorito";

function FavoritosPage(props) {
  const [favoritos, setFavoritos] = useState({});
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    setCargando(true);

    // const getUser = async () => {
    //   const user = await firebase.auth().currentUser;
    //   console.log("user tiene:", user);
    //   const getUserData = firebase.firestore().collection("users");

    //   const q = query(getUserData, where("userId", "==", user.uid));

    //   console.log("Informacion del usuario actual: ", q);
    // };

    const request = async () => {
      try {
        const querySnapshot = await firebase
          .firestore()
          .collection("favs")
          .get();
        setFavoritos(querySnapshot.docs);
      } catch (e) {
        console.log(e);
      } finally {
        setCargando(false);
      }
    };
    request();
  }, []);

  //Mientras el estado Cargando no se resuelva muestra el Spinner.
  if (cargando) {
    return (
      <>
        <Spinner />
      </>
    );
  }
  //Vista cuando se cargan los favoritos
  else {
    return (
      <>
        <Header />
        <Container className="marginBottom mt-5">
          <section>
            <h1>NOMBRE, Estos son tus favoritos</h1>
            <h3>
              Desde aqui podras editarlos, consultar sus detalles, o comprarlos!
            </h3>

            {favoritos.map((producto) => (
              <>
                <TarjetaFavorito key={producto.id} producto={producto.data()} />
              </>
            ))}
          </section>
        </Container>
      </>
    );
  }
}

export default FavoritosPage;
