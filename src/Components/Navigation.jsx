import React, { useContext } from "react";
import "../styles/Components/Navigation.css";
import { ThemeContext } from "../Contexts/ThemeContext";
import AuthContext from "../Contexts/AuthContext";
import MenuItem from "./MenuItem";

const Navigation = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);
  const { auth, logOutUser } = useContext(AuthContext);

  const handleThemeSwitch = () => {
    toggleTheme();
  };

  return (
    <nav>
      <MenuItem label="Accueil" link="/" />
      <MenuItem label="Utilisateurs" link="/utilisateurs" />
      {!auth ? (
        <MenuItem label="Connexion" link="/connexion" />
      ) : (
        <>
          <MenuItem label="Déconnexion" link="#" handleClick={logOutUser} />
        </>
      )}
      <MenuItem
        label={theme ? "Thème : Nuit" : "Thème : Jour"}
        link="#"
        handleClick={handleThemeSwitch}
      />
    </nav>
  );
};

export default Navigation;
