import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../Contexts/AuthContext";
import Basic from "../Layouts/Basic";


/**
 * Auth check route
 */
const RequireAuth = () => {
  const { user } = AuthContext;
  const navigate = useNavigate()

  useEffect(()=>{
    if (user === undefined){
        navigate({to: "/connexion"})
    }
  }, [navigate, user]);

  // Vérifie si utilisateur est connecté
  return  <Basic />
};

export default RequireAuth;
