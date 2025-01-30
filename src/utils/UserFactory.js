/**  Factory Method Pattern.
 * 
 * Factory function to create a user object.
 * @param {Object} userData - The raw user data from the API.
 * @returns {Object} - A user object with id, name, and email.
 */
const createUser  = (userData) => {
    return {
      id: userData.id,
      name: userData.name,
      email: userData.email,
    };
  };
  
  export default createUser ;