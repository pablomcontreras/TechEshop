import React from "react";
import { Container } from "react-bootstrap";
import firebase from "../Services/FireBase";
import { useForm } from "react-hook-form";

function RegisterPage(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => console.log(data);
  try {
    firebase.auth().createUserWithEmailAndPassword();
  } catch (e) {
    console.log("Error: ", e);
  }

  return (
    <Container className="marginBottom">
      <section className="vh-100 py-5">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                  <p className="lead fw-normal mb-5 me-3">Registrate</p>
                </div>

                {/*NOMBRE*/}
                <div className="form-outline mb-4">
                  <input
                    className="form-control form-control-lg"
                    {...register("nombre", { required: true })}
                  />
                  <label className="form-label">Nombre</label>
                </div>

                {/*APELLIDO*/}

                <div className="form-outline mb-3">
                  {/* include validation with required or other standard HTML validation rules */}
                  <input
                    className="form-control form-control-lg"
                    {...register("Apellido", { required: true })}
                  />
                  {/* errors will return when field validation fails  */}
                  {errors.exampleRequired && (
                    <span>Este campo es obligatorio</span>
                  )}
                  <label className="form-label">Apellido</label>
                </div>

                {/*EMAIL*/}

                <div className="form-outline mb-3">
                  <input
                    className="form-control form-control-lg"
                    {...register("Email", { required: true })}
                  />
                  {/* errors will return when field validation fails  */}
                  {errors.exampleRequired && (
                    <span>Este campo es obligatorio</span>
                  )}
                  <label className="form-label">Email</label>
                </div>

                {/*CONTRASEÑA*/}

                <div className="form-outline mb-3">
                  <input
                    type={"password"}
                    className="form-control form-control-lg"
                    {...register("Password", { required: true })}
                  />
                  {/* errors will return when field validation fails  */}
                  {errors.exampleRequired && (
                    <span>Este campo es obligatorio</span>
                  )}
                  <label className="form-label">Contraseña</label>
                </div>

                {/*REPETIR CONTRASEÑA*/}

                <div className="form-outline mb-3">
                  <input
                    type={"password"}
                    className="form-control form-control-lg"
                    {...register("RepetirContraseña", { required: true })}
                  />
                  {/* errors will return when field validation fails  */}
                  {errors.exampleRequired && (
                    <span>Este campo es obligatorio</span>
                  )}
                  <label className="form-label">Repetir Contraseña</label>
                </div>

                {/*BOTON DE ENVIO*/}
                <div className="text-center text-lg-start mt-4 pt-2">
                  <input
                    type="submit"
                    value="Registrarse"
                    className="btn btn-primary btn-lg"
                    style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                    defaultValue="Registrarse"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}

export default RegisterPage;
