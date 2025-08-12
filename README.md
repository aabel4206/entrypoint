EntryPoint — International Student Resource Hub
EntryPoint is a React web app designed to help international students navigate their journey to studying in the United States. It provides a comprehensive checklist, curated resources, and a full list of U.S. universities for students to select from. The app includes user authentication and personalized features tied to the selected university.

Features
User Authentication — Secure login, registration, and protected routes to keep student data private.

University Selector — Browse and search from over 5,900 U.S. universities with official website links.

Personalized Dashboard — Displays the chosen university and lets users manage their checklist and resources.

Interactive Checklist — Categorized tasks guiding students from pre-arrival through academic and social life.

Resource Hub — Searchable and filterable resources related to international student needs.

Responsive and Accessible UI — Clean design using Tailwind CSS for ease of use on all devices.

Local Storage Persistence — Checklist progress is saved locally for persistence between sessions.

Tech Stack
Frontend: React, React Router, Tailwind CSS

Authentication: Firebase Authentication (Email/Password)

Data: Local JSON files for universities and resources (can be extended with backend)

State Management: React hooks and component state

Build Tool: Vite

Project Structure
/src

components/ — Navbar, PrivateRoute, University selector

pages/ — Welcome, Login, Register, Dashboard, Checklist, Resources, Signup

data/ — Static JSON data (universities list, resources, checklist tasks)

App.jsx — Main routing and app logic

index.css — Global and Tailwind CSS imports

Setup and Installation
Clone the repo

bash
Copy
Edit
git clone <repo-url>
cd entrypoint
Install dependencies

bash
Copy
Edit
npm install
Configure Firebase

Create a Firebase project at console.firebase.google.com

Enable Email/Password Authentication

Add your Firebase config to a /src/firebase.js file

Start the development server

bash
Copy
Edit
npm run dev
Open in browser

Visit http://localhost:3000 or the URL Vite provides.

How It Works
When users visit the site, they land on a welcome page prompting them to log in or register.

After authentication, users are directed to the dashboard.

If the user hasn’t selected a university yet, the university selector page appears.

Users pick their university from a searchable list of all U.S. universities.

The selected university is saved in React state and passed down to components.

Users can then navigate to their personalized checklist and resource hub with content tailored to their university.

Checklist items are grouped by category, can be added, marked complete, or deleted.

Resources can be searched and filtered by category.

All user progress is stored in localStorage for persistence.

Users can change their selected university anytime from the dashboard.

Future Plans
Connect to backend for persistent user data and syncing across devices.

Add real university-specific resources fetched dynamically.

Improve UI with animations and accessibility enhancements.

Enable social login options and profile editing.

Add notifications and reminders for checklist deadlines.

Contributing
Contributions are welcome! Please fork the repo and submit pull requests.

License
This project is open source under the MIT License.

