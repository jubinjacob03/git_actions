import React from "react";
import UserItem from "./UserItem";
import useFetchUsers from "../hooks/useFetchUsers";

/**
 * Fetch and displays a list of users.
 * @param {boolean} simulateError - Flag to simulate an error.
 */
const UserList = ({ simulateError }) => {
  const { users, loading, error } = useFetchUsers(simulateError);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching users: {error.message}</p>;

  return (
    <ul>
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </ul>
  );
};

export default UserList;
