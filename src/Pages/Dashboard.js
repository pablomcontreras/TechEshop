import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import Spinner from "../Components/Spinner";
import TarjetaProducto from "../Components/TarjetaProducto";
import { getAll, getBySearchTerm } from "../Services/DataProvider";

function Dashboard({ searchTerm, traerIdProducto }) {
  const [productos, setProductos] = useState({});
  const [cargando, setCargando] = useState(true);






  useEffect(() => {
              setCargando(true);

    if (searchTerm !== "") {
      const requestST = async () => {
        try {
          console.log(
            "Menu <- Dashboard: ",
            searchTerm,
            ". getBySearchTerm..."
          );
          const response = await getBySearchTerm(searchTerm);
          const data = response?.data;
          setProductos(data?.results);
        } catch (e) {
          console.log(e);
        } finally {
          setCargando(false);
        }
      };
      requestST();
    } else {
      const request = async () => {
        try {
          const response = await getAll();
          const data = response?.data;
          setProductos(data?.results);
        } catch (e) {
          console.log(e);
        } finally {
          setCargando(false);
        }
      };
      request();
    }
  }, [searchTerm]);

  //

  //Mientras el estado Cargando no se resuelva muestra el Spinner.
  if (cargando) {
    return (
      <>
        <Header />
        <Spinner />
      </>
    );
  }
  //Vista cuando se cargan los datos genericos
  else {
    return (
      <>
        <Header />
        <section className="m-5">
          <h1>¡Bienvenido a nuestra tienda!</h1>
          <h3>Descubrí nuestros productos o usá nuestro buscador</h3>
          <div className="container px-4 px-lg-5">
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
              {productos.map((producto) => (
                <TarjetaProducto
                  key={producto.id}
                  id={producto.id}
                  img={producto.thumbnail}
                  title={producto.title}
                  price={producto.price}
                />
              ))}
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Dashboard;
