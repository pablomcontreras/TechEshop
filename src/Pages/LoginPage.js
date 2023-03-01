import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGoogle,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import React from "react";
import { Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import firebase from "../Services/FireBase";

function LoginPage(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const navigate = useNavigate();

  const alertPending = () => alert("Todavía no hice funcionar esto :)")

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const responseUser = await firebase
        .auth()
        .signInWithEmailAndPassword(data.email, data.password);
      console.log("Respuesta: ", responseUser);
      if (responseUser.user.uid) {
        navigate("/");
      }
    } catch (e) {
      console.log(e);
    }
  };

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
                  <p className="lead fw-normal mb-0 me-3">Ingresá con</p>
                  <button
                    type="button"
                    className="btn btn-primary btn-floating mx-1"
                    onClick={alertPending}>
                    <FontAwesomeIcon icon={faFacebook} />
                  </button>

                  <button
                    type="button"
                    className="btn btn-primary btn-floating mx-1"
                    onClick={alertPending}>
                    <FontAwesomeIcon icon={faTwitter} />
                  </button>

                  <button
                    type="button"
                    className="btn btn-primary btn-floating mx-1"
                    onClick={alertPending}>
                    <FontAwesomeIcon icon={faGoogle} />{" "}
                  </button>
                </div>
                <div className="divider d-flex align-items-center my-4">
                  <p className="lead fw-normal mb-0 me-3">
                    O con tu cuenta de Tech Eshop
                  </p>
                </div>
                <div className="form-outline mb-3">
                  <input
                    className="form-control form-control-lg"
                    type={"email"}
                    {...register("email", { required: true })}
                  />
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
                    {...register("password", { required: true })}
                  />
                  {errors.exampleRequired && (
                    <span>Este campo es obligatorio</span>
                  )}
                  <label className="form-label">Contraseña</label>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="form-check mb-0">
                    <input
                      className="form-check-input me-2"
                      type="checkbox"
                      value=""
                      id="form2Example3"
                    />
                    <label className="form-check-label" htmlFor="form2Example3">
                      Recordar mis datos
                    </label>
                  </div>
                  <a className="text-body" onClick={alertPending}>
                    Olvidaste tu contraseña?
                  </a>
                </div>{" "}
              
                <div className="text-center text-lg-start mt-4 pt-2">
                  {/*BOTON DE ENVIO*/}
                  <div className="text-center text-lg-start mt-4 pt-2">
                    <input
                      type="submit"
                      value="Ingresar"
                      className="btn btn-primary btn-lg"
                      style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                    />
                  </div>
                  <p className="small fw-bold mt-2 pt-1 mb-0">
                    No tenés una cuenta?
                    <Link to="/registro" className="link-danger">
                      Registrarse
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}

export default LoginPage;
