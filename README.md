# User List React Application

### Overview
The User List React Application is a simple web app that fetches and displays a list of users from an API. It demonstrates best practices in React development, including the use of hooks, error handling, and design patterns. The application allows users to simulate errors and view user details.

### Features
- Fetches user data from an API.
- Displays a list of users with their names and emails.
- Simulates an error to demonstrate error handling.
- Uses the Factory Method design pattern to create user objects.

### Technologies Used
- React
- Vite
- JavaScript
- CSS

### Installation
To set up the project locally, follow these steps:

##### Clone the repository
```bash
   git clone --branch best-coding-practices https://github.com/jubinjacob03/git_actions
```
##### Navigate to the project directory:
```bash
   cd git_actions
```
##### Install dependencies:
```bash
   npm install
```
##### Start the development server:
```bash
   npm run dev
```
##### Open your browser and navigate to:
```bash
   http://localhost:5173
```

### Usage
- <strong>Simulate Error:</strong> Click the "Simulate Error" button to trigger an error and see how the application handles it.
- <strong>View Users:</strong> The application will display a list of users fetched from the API. Each user will show their name and email.

### Components
### App
- <strong>Description:</strong> The main component that renders the application.
- <strong>Props:</strong> None
#### State:
- <strong>simulateError:</strong> Boolean flag to simulate an error.
 
### UserList
- <strong>Description:</strong> Fetches and displays a list of users.
#### Props:
- <strong>simulateError:</strong> Boolean flag to simulate an error.
#### State:
- <strong>users:</strong> Array of user objects fetched from the API.
- <strong>loading:</strong> Boolean flag indicating loading state.
- <strong>error:</strong> Error object if an error occurs during fetching.

### UserItem
- <strong>Description:</strong> Displays individual user information.
#### Props:
- <strong>user:</strong> Object containing user data (id, name, email).

### Hooks
### useFetchUsers
- <strong>Description:</strong> Custom hook to fetch users from an API.
#### Parameters:
- <strong>simulateError:</strong> Boolean flag to simulate an error.
#### Returns:
- <strong>users:</strong> Array of user objects.
- <strong>loading:</strong> Boolean flag indicating loading state.
- <strong>error:</strong> Error object if an error occurs during fetching.

### Design Patterns
#### Factory Method Pattern
- <strong>Description:</strong> Used to create user objects from raw data fetched from the API.
- <strong>Location:</strong> Implemented in src/utils/UserFactory.js.
- <strong>Function:</strong> createUser (userData) - Takes raw user data and returns a user object.

### API
#### Fetch Users
- <strong>Endpoint:</strong> https://jsonplaceholder.typicode.com/users
- <strong>Method:</strong> GET
- <strong>Response:</strong> Returns an array of user objects containing id, name, and email.

### Error Handling
The application includes error handling to manage API call failures. When an error occurs, an error message is displayed to the user.

### Conclusion
This User List React Application serves as a simple example of how to build a React app with best practices, including error handling and design patterns.

