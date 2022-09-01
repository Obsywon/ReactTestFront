import React from "react";
import "../../styles/Components/Forms.css";

const ConnexionDisplay = ({ email, password, handleUpdate, handlePressUp }) => {
  return (
    <>
      <div className="input">
        <label htmlFor="email" className="labelForm">E-mail:</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => handleUpdate(e)}
          onKeyUp={() => handlePressUp()}
          required
        />
      </div>
      <div className="input">
        <label htmlFor="password" className="labelForm">Mot de passe:</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => handleUpdate(e)}
          onKeyUp={() => handlePressUp()}
          required
        />
      </div>
    </>
  );
};

export default ConnexionDisplay;
