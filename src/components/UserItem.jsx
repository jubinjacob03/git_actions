import React from "react";

/**
 * Display individual user information.
 * @param {Object} user - The user object data
 */
const UserItem = ({ user }) => {
  return (
    <li>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
    </li>
  );
};

export default UserItem;
