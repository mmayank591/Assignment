<b>Project Setup Instructions</b>
<b>Prerequisites</b>
Ensure you have the following installed:
Node.js (latest LTS version recommended)
MongoDB
Git
Installation

Clone the repository:
git clone <repository-url>
cd project-folder

Install backend dependencies:
cd backend
npm install

Configure environment variables:
Create a .env file in the backend folder and set required variables (e.g., database URL, API keys).

Start the backend server:
npm start

Install frontend dependencies:
cd ../front-end
npm install

Start the frontend application:
npm start

Access the application in your browser:
http://localhost:3000

<b>Project Report</b>

Approach
This project follows a MERN (MongoDB, Express.js, React.js, Node.js) stack approach. The backend manages API endpoints, user authentication, and database interactions, while the frontend ensures a dynamic and responsive user experience.

Key Features:
User authentication (JWT-based)
Database integration with MongoDB
RESTful API endpoints for CRUD operations
Responsive UI with React.js

Challenges Faced

Git Submodule Issues: Faced conflicts with front-end/ being incorrectly treated as a submodule. Fixed by removing .git inside front-end/.
Database Connectivity: Initial connection issues due to incorrect .env configurations.
State Management: Managing global state efficiently without performance bottlenecks.
Improvements & Future Scope
Optimization: Improve API performance using caching strategies.
Security Enhancements: Implement role-based access control.
UI Enhancements: Improve responsiveness and add better UX components.
Testing: Add unit tests and integration tests for better reliability.
