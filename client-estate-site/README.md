# Client Estate Site

A client-side single-page application built with React that allows users to search, view, and manage property listings.

The application uses JSON data on the client side and does not rely on a backend server.

---

## Features

- Property search using multiple criteria
- React Widgets for enhanced form inputs
- Property details page with image gallery and tabs
- Favourites system with drag & drop
- Responsive design for desktop and mobile
- Client-side routing using React Router

---

## Technologies Used

- React
- Vite
- JavaScript
- React Router
- React Widgets
- DnD Kit
- Jest (testing)
- CSS

---

## Application Architecture

This application is a **client-side single-page application (SPA)**.

- All data is loaded from a local JSON file
- No backend or database is used
- React Context is used to manage global favourites state
- Routing is handled entirely on the client using React Router

---

## Favourites System

The favourites feature is implemented using **React Context**.

- Favourite properties are stored in memory during the session
- Drag & drop is supported to add or remove favourites
- Favourites reset when the page is refreshed, as no backend or local storage is used

This approach aligns with the coursework requirement for a purely client-side application.

---

## Responsive Design

The application is fully responsive and adapts to different screen sizes.

- CSS Grid and Flexbox are used for layout
- Media queries are applied for tablet and mobile breakpoints
- On large screens, properties are displayed in multiple columns
- On smaller screens, content stacks vertically for readability

---

## Security Considerations

A **Content Security Policy (CSP)** is implemented using a meta tag in `index.html`.

This restricts:
- Scripts to same-origin only
- Styles to local sources
- Images to local and data sources
- Frames to Google Maps only

Additionally:
- No unsafe HTML rendering is used
- User input is handled safely without `dangerouslySetInnerHTML`

---

## Testing

Unit testing is implemented using the **Jest** testing framework.

Tests include:
- Property filtering logic
- Favourites add/remove functionality
- Context behaviour
- Utility function validation

Babel is used only during testing to allow Jest to process JSX syntax.

---

## How to Run the Project Locally

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
3. Start the development server:
   ```bash
   npm run dev

4. Open the app in your browser at:
   http://localhost:5173

