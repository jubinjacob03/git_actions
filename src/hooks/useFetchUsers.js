import { useEffect, useState } from "react";
import { fetchUsers } from "../utils/api";
import createUser  from "../utils/UserFactory"; // Import the User Factory

/**
 * Hook to fetch users from an API.
 * @param {boolean} simulateError - Flag to simulate an error.
 * @returns {Object} - Contains users, loading state, and error information.
 */
const useFetchUsers = (simulateError = false) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getUsers = async () => {
      try {
        if (simulateError) {
          throw new Error("Simulated error: Unable to fetch users.");
        }
        const data = await fetchUsers();
        console.log("Data fetched !!", data); // Log fetched data

        // Use the factory to create user objects
        const userObjects = data.map(createUser );
        setUsers(userObjects);
      } catch (err) {
        console.error("Error fetching users:", err); // Log the error
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    getUsers();
  }, [simulateError]);

  return { users, loading, error };
};

export default useFetchUsers;