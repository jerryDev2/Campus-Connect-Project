# Campus Connect

Campus Connect is a modern web application for college event management. It enables students, staff, and event organizers to seamlessly create, manage, and participate in campus events. The platform provides a user-friendly interface, event registration, feedback collection, and a gallery of past events.

## Team Members

- Ehigiator Osaivbie Jerry
- Oni DivineFavour Osasuwmenghian
- Imarhiayi Godspower

## Project Overview

Campus Connect is a responsive web application designed as a centralized hub for college event management. It displays categorized information about events, allowing users to view department-wise and category-wise (technical, cultural, sports) events, event descriptions, schedules, organizers, and a media gallery. The platform is built for:

- **Students:** To find information on upcoming events, interests, and registration details.
- **Faculty:** To promote events organized by their departments or clubs.

The website features a clean, well-structured UI and serves as a single point of access for all campus event-related information.

## Live Project Url 
https://campus-connect109.netlify.app/

## Github Url
https://github.com/jerrydc565/Campus-Connect-Project

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

5. **Design Specifications**
   figma
   Visit https://www.figma.com/design/TesF52XB9N4DtO5wyfOziI/Campus-Connect?node-id=14-40&t=OYGuqNu4LDFBWCHY-1

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

## Application Flowcharts

Below are the step-by-step flow descriptions for each main page/component. Use these as a guide to create visual diagrams in draw.io, Lucidchart, or Figma.

### 1. Home Page

- Start
- Display Header (Navigation)
- Show Welcome Message & Banner
- Show Highlights of Upcoming Events (cards/carousel)
- Show Quick Links to Other Pages
- Display Footer
- End

### 2. About Us Page

- Start
- Display Header (Navigation)
- Show College Information (name, location, affiliations)
- Show Key Annual Events (Technical, Cultural, Sports, Academic)
- Show Organizing Bodies/Teams
- Display Footer
- End

### 3. Events Page

- Start
- Display Header (Navigation)
- Fetch/Display List of Events (from JS variables)
- Show Filtering Options (by category: Technical, Cultural, Sports, Academic)
- Show Sorting Options (by date, name, category)
- For each event:
  - Show Event Card (name, date, time, venue, description)
  - “View Details” button (optional: show modal/details)
- Display Registration Deadlines Section
- Display Footer
- End

### 4. Gallery Page

- Start
- Display Header (Navigation)
- Fetch/Display Event Images (from JS variables)
- Show Filtering Options (by year or category)
- Show Gallery Cards/Images
- Display Footer
- End

### 5. Register Page

- Start
- Display Header (Navigation)
- Show Registration Form (Full Name, Email, StudentID, Password, Confirm Password)
- “Register” Button (static, no backend)
- Display Footer
- End

### 6. Feedback Page

- Start
- Display Header (Navigation)
- Show Feedback Form (Name, Email, User Type, Event Attended, Rating, Comments)
- “Send Message” Button (UI only, no backend)
- Display Footer
- End

### 7. Contact Us Page

- Start
- Display Header (Navigation)
- Show Contact Details (faculty, student coordinators)
- Show Inquiry Form (Name, Email, Phone, Role, Inquiry Type, Subject, Message)
- Show Embedded Google Map (campus location)
- Display Footer
- End

### 8. Common Components

- **Header:** Navigation links to all pages, visible on every page.
- **Footer:** Contact info, quick links, social media, visible on every page.

---

_For more details, see the Software Requirement Specification (SRS) document._
