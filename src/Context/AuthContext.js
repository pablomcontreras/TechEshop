import React, { useState } from "react";
import firebase from "../Services/FireBase";

export const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [login, setLogin] = useState(false);
  const [userData, setUserData] = useState({});

  const handleGetUsrData = async () => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        try {
          let datosUsuario = await firebase
            .firestore()
            .collection("users")
            .where("userId", "==", user.uid)
            .get();
          const currentUser = datosUsuario.docs[0].data();

          let usuarioData = {
            nombre: currentUser.nombre,
            apellido: currentUser.apellido,
            email: currentUser.email,
            uid: user.uid,
          };
          setUserData(usuarioData);
        } catch (e) {
          console.log("Error", e);
        }
      } else {
        let usuarioData = {
          nombre: "",
          apellido: "",
          email: "",
          uid: null,
        };
        setUserData(usuarioData);
      }
    });
  };

  handleGetUsrData();

  const handleLogin = () => {
    setLogin(true);
  };

  const handleLogout = () => {
    setLogin(false);
  };

  return (
    <AuthContext.Provider
      value={{ login, handleLogin, handleLogout, userData }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
