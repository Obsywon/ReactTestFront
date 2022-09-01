import React from "react";
import "../styles/Components/Spinner.css";


/**
 * 
 * @returns Spinner Component
 */
function Spinner() {
  return (
    <div className="lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default Spinner;
