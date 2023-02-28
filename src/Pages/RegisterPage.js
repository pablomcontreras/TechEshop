import React from "react";
import { Container } from "react-bootstrap";
import firebase from "../Services/FireBase";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
  const {
    register, handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const navigate = useNavigate()
  
const onSubmit = async (data) => {
console.log (data) ;
try {
const responseUser = await firebase.auth ().createUserWithEmailAndPassword(data.email, data.password);
  console.log("Respuesta de firebase: ", responseUser);
  if (responseUser.user.uid) { 
 
    const document = await firebase.firestore().collection("users").add({
      userId: responseUser.user.uid,
      nombre: data.nombre,
      apellido: data.apellido,
      email: data.email,
    })
    console.log("documento: ", document);
    if (document) {
      navigate("/")
    }
  };
} catch (e) {
console.log (e);
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
                    {...register("apellido", { required: true })}
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
                    {...register("email", { required: true })}
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
                    {...register("password", { required: true, minLength:6})}
                  />
                  {/* errors will return when field validation fails  */}
                  {errors.exampleRequired && (
                    <span>Este campo es obligatorio</span>
                  )}
                  {errors.minLength && (
                    <span>La contraseña debe tener al menos 6 caracteres</span>
                  )
                  }
                  <label className="form-label">Contraseña</label>
                </div>

                {/*REPETIR CONTRASEÑA*/}

                <div className="form-outline mb-3">
                  <input
                    type={"password2"}
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
