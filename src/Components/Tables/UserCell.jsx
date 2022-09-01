import React from "react";

/**
 * Display a cell containing information on users
 * @param {*} param0 
 * @returns Table cell component
 */
const UserCell = ({ user }) => {
  return (
    <tr>
      <td data-label='Pseudo'>{user.username}</td>
      <td data-label='E-mail'>{user.email}</td>
    </tr>
  );
};

export default UserCell;
