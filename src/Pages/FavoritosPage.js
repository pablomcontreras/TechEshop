import Spinner from "../Components/Spinner";
import { React, useState, useEffect } from "react";
import Header from "../Components/Header";
import { Container } from "react-bootstrap";
import TarjetaFavorito from "../Components/TarjetaFavorito";
import { getUserData } from "../Services/DataProvider";
import { getFavData } from "../Services/DataProvider";

function FavoritosPage(props) {
  const [favoritos, setFavoritos] = useState({});
  const [cargando, setCargando] = useState(true);
  const [datosUsuario, setDatosUsuario] = useState({})

  useEffect(() => {
    setCargando(true);
    const request = async () => {
      
 try {
        setDatosUsuario(await getUserData())
        const favoritosLista = await getFavData()
        setFavoritos(favoritosLista);
      } catch (e) {
        console.log(e);
      } finally {
        setCargando(false);
      }
    };
    request();
  }, []);
  let i = 0;
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
            <h1>{datosUsuario.nombre}, estos son tus favoritos</h1>
            <h3>
              Desde acá podés editarlos, consultar sus detalles, o comprarlos!
            </h3>
            {
               favoritos.map((producto) => (
              <>
                <TarjetaFavorito key={i++} producto={producto.data()} />
              </>
               ))
            }
          </section>
        </Container>
      </>
    );
  }
}

export default FavoritosPage;
