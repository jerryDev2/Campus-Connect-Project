# Campus Connect

Campus Connect is a modern web application for college event management. It enables students, staff, and event organizers to seamlessly create, manage, and participate in campus events. The platform provides a user-friendly interface, event registration, feedback collection, and a gallery of past events.

## Team Members 
- 
- 
- 

## Project Overview

Campus Connect is a responsive web application designed as a centralized hub for college event management. It displays categorized information about events, allowing users to view department-wise and category-wise (technical, cultural, sports) events, event descriptions, schedules, organizers, and a media gallery. The platform is built for:

- **Students:** To find information on upcoming events, interests, and registration details.
- **Faculty:** To promote events organized by their departments or clubs.

The website features a clean, well-structured UI and serves as a single point of access for all campus event-related information.

## Data Handling

Event and gallery data are managed using JavaScript variables within modules (e.g., `EventDetails.jsx`), rather than external JSON files. This approach keeps the application purely client-side and easy to deploy, while still allowing dynamic rendering of event information, categories, and galleries.

## Features

## Project Structure

```
Campus-Connect-Project/
├── public/                # Static assets (images, icons)
├── src/
│   ├── components/        # Reusable UI components (Header, Footer, etc.)
│   ├── pages/             # Main pages (Home, AboutUs, Events, etc.)
│   ├── Css/               # CSS files for styling
│   ├── assets/            # Images and static resources
│   ├── App.jsx            # Main app with route definitions
│   └── main.jsx           # Entry point
├── package.json           # Project metadata and dependencies
├── vite.config.js         # Vite configuration
└── README.md              # Project documentation
```

## Navigation (Routing)

The app uses [React Router](https://reactrouter.com/) for navigation:

## Getting Started

### Prerequisites

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/jerrydc565/Campus-Connect-Project.git
   cd Campus-Connect-Project
   ```
2. **Install dependencies:**
   ```sh
   npm install
   # or
   yarn install
   ```
3. **Start the development server:**
   ```sh
   npm run dev
   # or
   yarn dev
   ```
4. **Open your browser:**
   Visit [http://localhost:5173](http://localhost:5173) (default Vite port)

### Build for Production

```sh
npm run build
# or
yarn build
```

The production-ready files will be in the `dist/` directory.

## Technologies Used



## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License.

_For more details, see the Software Requirement Specification (SRS) document._
