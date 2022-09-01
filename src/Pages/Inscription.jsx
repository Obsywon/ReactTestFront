import { useState } from "react";
import InscriptionDisplay from "../Components/Forms/InscriptionDisplay";
import "../styles/Components/Forms.css";
import { NavLink } from "react-router-dom";
import ErrorMessage from "../Components/Forms/ErrorMessage";
import { registerNewAcccount } from "../Utilities/accounts";
import RedirectEvent from "../Components/RedirectEvent";

/**
 * Handle the logic of the registration form 
 * @returns Page component
 */
function Inscription() {

  const [values, setValues] = useState({
    email: "",
    name: "",
    password: "",
    passwordConfirmed: "",
  });

  const [unsendable, setUnsendable] = useState(true);
  const [registered, setRegistered] = useState(false);
  const [error, setError] = useState("");


  /**
   * Register a new account and update the state accordingly
   * @param {Event} e 
   */
  const register = async (e) => {
    e.preventDefault();
    const response = registerNewAcccount(values);
    response
      .then((resp) => {
        setRegistered(true);
        setError("");
      })
      .catch((error) => {
        if (error?.response) {
          setError("Pas de réponse de la part du serveur.");
          if (error.response?.status === 400) {
            console.log(error.response);
            setError(error.response.data);
          } else if (error.response?.status === 401) {
            setError("Non autorisé.");
          } else if (error.response?.status === 409) {
            setError(
              "Un utilisateur avec ces informations existe déjà."
            );
          } else {
            setError("Echec de l'inscription.");
          }
          setRegistered(false);
        }
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
   * Light & fast check
   */
  const cannotSendForm = () => {
    if (values["email"] === "") return setUnsendable(true);
    if (values["name"] === "") return setUnsendable(true);
    if (values["password"] === "") return setUnsendable(true);
    if (values["passwordConfirmed"] === "") return setUnsendable(true);
    if (values["passwordConfirmed"] !== values["password"]) return setUnsendable(true)
      return setUnsendable(false);
  };

  return (
    <>
      <h1>Rejoignez-nous {values.name + " "}!</h1>

      {!registered ? (
        <form
          action=""
          className="form"
          onSubmit={(e) => {
            register(e);
          }}
        >
          <InscriptionDisplay
            email={values.email}
            name={values.name}
            password={values.password}
            passwordConfirmed={values.passwordConfirmed}
            handleUpdate={updateValue}
            handlePressUp={cannotSendForm}
          />

          {error && <ErrorMessage message={error} />}

          <span>
            <NavLink to="/connexion" className="navlink">
              Connexion
            </NavLink>

            <input type="submit" className="navlink" disabled={unsendable} />
          </span>
        </form>
      ) : (
        <>
          <RedirectEvent
            text={
              "Vous êtes bien inscris! Vous allez être redirigé vers la page de connexion."
            }
            target="/connexion"
          />
        </>
      )}
    </>
  );
}

export default Inscription;
