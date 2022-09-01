import { useState, useEffect } from "react";
import Table from "../Components/Tables/Table";
import "../styles/Components/Table.css";
import UserCell from "../Components/Tables/UserCell";
import useAxios from "../Hooks/useAxios";

const ALL_USERS_URL = "/users";

/**
 * Display a table of users, hidden from logged out users
 * @returns Page component
 */
const Utilisateurs = () => {
  const network = useAxios();
  const [data, setData] = useState([]);

  const headTable = ["Pseudo", "E-mail"];

  /**
   * Load users into the state
   */
  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getAllUsers = async () => {
      try {
        const response = await network.get(ALL_USERS_URL, {
          signal: controller.signal,
        });
        isMounted && setData(response.data);
      } catch (error) {
      }
    };

    getAllUsers();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);


  /**
   * Display a table of users or an error message if not data has been found
   */
  return (
    <div>
      {(data.length === 0) ? (
        <>
          <p>
            Une erreur a été rencontrée lors du chargement des données. Vous
            n'avez pas le droit d'accéder à cette ressource.
          </p>
        </>
      ) : (
        <>
          <Table
            caption="Table des utilisateurs"
            loaded={data.length > 0}
            head={headTable}
            children={
              (data.length > 0) &&
              data.map((user) => {
                return <UserCell user={user} key={user._id} />;
              })
            }
          />
        </>
      )}
    </div>
  );
};

export default Utilisateurs;
