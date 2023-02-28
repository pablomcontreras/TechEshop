import React, { useEffect } from "react";
import { Container, Spinner } from "react-bootstrap";
import firebase from "../Services/FireBase";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { getUserData } from "../Services/DataProvider";

function EditProfilePage() {

  const [cargando, setCargando] = useState(true);

  const [datosUsuario, setDatosUsuario] = useState({});

  useEffect(() => {
    setCargando(true);

    const request = async () => {
      try {
        setDatosUsuario(await getUserData());
      } catch (e) {
        console.log(e);
      } finally {
        setCargando(false);
      }
    };
    request();
    console.log("Estado datos usuario", datosUsuario);
  }, []);

  const handleEdit = (event) => {

  };
  

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const navigate = useNavigate();
  const onSubmit = async (data) => {
    console.log(data);
    try {
         firebase
      .firestore()
      .collection("users")
      .add({
        nombre: event.nombre.value,
        apellido: event.apellido.value,

      });
    console.log("Se actualizó en la base de datos el Perfil");
    }

         catch (e) {
      console.log(e);
    }
  };
}

  if (!datosUsuario) {
    return (
      <Spinner />
    )
  }

  else if (datosUsuario.nombre) {

    return (
      <Container className="marginBottom">
        <section className="vh-100 py-5">
          <div className="container-fluid h-custom">
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                  <p className="lead fw-normal mb-5 me-3">Tu Perfil</p>
                </div>

                {/*NOMBRE*/}
                <div className="form-outline mb-4">
                  <input
                    className="form-control form-control-lg"
                    {...register("nombre", { required: true })}
                    defaultValue={datosUsuario.nombre}
                  
                  />
                  <label className="form-label">Nombre</label>
                </div>

                {/*APELLIDO*/}

                <div className="form-outline mb-3">
                  <input
                    className="form-control form-control-lg"
                    {...register("apellido", { required: true })}
                    defaultValue={datosUsuario.apellido}
                  />
                  {errors.exampleRequired && (
                    <span>Este campo es obligatorio</span>
                  )}
                  <label className="form-label">Apellido</label>
                </div>
                <div className="form-outline mb-3">
                  <input
                    className="form-control form-control-lg"
                    disabled={true}
                    defaultValue={datosUsuario.email}
                  />
           
                  <label className="form-label">Email     *sólo consulta.</label>
                </div>

                {/*BOTON DE ENVIO*/}
                <div className="text-center text-lg-start mt-4 pt-2">
                  <input
                    type="submit"
                    value="Guardar"
                    className="btn btn-primary btn-lg"
                    style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                  />
                </div>
              </form>
            </div>
          </div>
        </section>
      </Container>
    );
  }
}


export default EditProfilePage;
