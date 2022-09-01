import { useState, useContext } from "react";
import ConnexionDisplay from "../Components/Forms/ConnexionDisplay";
import { NavLink } from "react-router-dom";
import ErrorMessage from "../Components/Forms/ErrorMessage";
import AuthContext from "../Contexts/AuthContext";
import { loginAccount } from "../Utilities/accounts";
import RedirectEvent from "../Components/RedirectEvent";

const Connexion = () => {
  const { setAuth, auth } = useContext(AuthContext);
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [unsendable, setUnsendable] = useState(true);
  const [error, setError] = useState("");

  /**
   * Handle the logic and update AuthContext
   */
  const loginHandler = () => {
    const rep = loginAccount(values);
    rep
      .then((data) => {
        setAuth(data.data);
      })
      .catch((error) => {
        setError(error?.response?.data?.error);
      });
  };

  /**
   * Update values of the form below
   * @param {*} e
   */
  const updateValue = (e) => {
    const val = e.target.value;
    const name = e.target.name;
    const updatedForm = {
      ...values,
      [name]: val,
    };
    setValues(updatedForm);
  };

  /**
   * fast check
   */
  const cannotSendForm = () => {
    if (values["email"] === "") return setUnsendable(true);
    if (values["password"] === "") return setUnsendable(true);
    return setUnsendable(false);
  };

  return (
    <>
      <h1>Connexion</h1>

      {!auth ? (
        <form
          action=""
          className="form"
          onSubmit={(e) => {
            e.preventDefault();
            loginHandler();
          }}
        >
          <ConnexionDisplay
            email={values.email}
            password={values.password}
            handleUpdate={updateValue}
            handlePressUp={cannotSendForm}
          />

          {error && <ErrorMessage message={error} />}

          <span>
            <NavLink to="/inscription" className="navlink">
              Inscription
            </NavLink>
            <input type="submit" disabled={unsendable} className="navlink" />
          </span>
        </form>
      ) : (
        <>
          <RedirectEvent
            text={
              "Vous êtes connecté! Vous allez être redirigé vers la page d'accueil."
            }
            target="/"
          />
        </>
      )}
    </>
  );
};

export default Connexion;
