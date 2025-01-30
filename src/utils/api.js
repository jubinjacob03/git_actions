/**
 * Fetch users from the API.
 * @returns {Promise<Array>} - A promise resolves to array of users.
 */
export const fetchUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!response.ok) {
    // Throws error if connection was not okay
    throw new Error("Network response was not ok");
  }
  return response.json();
};
