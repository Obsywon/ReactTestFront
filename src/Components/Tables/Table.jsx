import React from "react";
import Spinner from "../Spinner";
import "../../styles/Components/Table.css";



/**
 * Component to show a table (with thead elements) and rows as children element
 * @param {*} param0 
 * @returns 
 */
const Table = ({ head, caption, children }) => {

  return (
    <>
      {(children.length === 0) ? (
        <div className="loading">
          <Spinner />
          <p>Récupération des données...</p>
        </div>
      ) : (
        <>
          <table className="table">
            <caption>{caption}</caption>

            <thead>
              <tr>
                {head.map((elem) => {
                  return (
                    <th key={elem} scope="column">
                      {elem}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
                { children }
            </tbody>
          </table>
        </>
      )}
    </>
  );
};

export default Table;
