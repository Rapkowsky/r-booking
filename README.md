# R-Booking - Demo Project

R-Booking is a web application for browsing and managing rental property listings, similar to platforms like Booking.com or Airbnb.

## Project Description

R-Booking is a comprehensive web application that allows users to browse and manage rental property listings. The project was created as a demonstration of skills in React technologies.

## Features

- **Browse Listings**: Users can explore available rental properties on the homepage.
- **Filter Listings**: Offers can be filtered by name, date, and number of guests.
- **Listing Details**: Clicking on a listing opens a detailed view, including a photo gallery, description, location, price, and guest capacity.
- **Manage Favorites**: Users can add listings to their favorites and view them in a dedicated section.
- **User Authentication**: Login system with form validation and JWT handling.
- **Review System**: Users can browse property reviews with star ratings.
- **Create Listings**: Form that allows users to add new rental properties with data validation.

## Data Storage

### LocalStorage

- Property, location, and user data are stored in LocalStorage to simulate a database.
- API query results are cached in LocalStorage with a 5-minute expiration.

### Application Memory

- Access tokens are stored in application memory (not in LocalStorage for security reasons).
- Favorite listings state is managed in Redux (reset on page refresh).

## Technologies

- **React** - Library for building user interfaces.
- **React Router** - Navigation and routing within the application.
- **Redux & Redux Toolkit** - Global state management.
- **TanStack Query (React Query)** - Asynchronous state management and caching.
- **Axios** - API communication.
- **React Hook Form** - Form handling.
- **Tailwind CSS** - Styling components.
- **Lucide React** - Icon library.
- **JavaScript** - Programming language.
- **Zod** - Data validation.

## User Authentication

To test the login functionality, use the following credentials:

**Demo Login Credentials:**

- **Email:** rr@demo.com
- **Password:** rrDemoProject

## Mock API

The application uses a mocked API (powered by MockAdapter for Axios) to simulate real server communication. The Mock API supports:

- Fetching a list of listings with optional filtering.
- Fetching details of individual listings.
- Fetching reviews for specific listings.
- User authentication (login/logout).
- Refreshing JWT tokens.
- Creating new listings.

## Running the Project

```sh
# Install dependencies
npm install

# Start the development server
npm run dev
```

Once started, the application will be available at `http://localhost:5173`.

## Linting and Formatting

The project has setup `eslint` and `prettier` for all linting and formatting without any extra configuration.

To fix any linting or formatting issues across all relevant files, run this command:

```sh
npm run fix
```

## Project Structure

- **components** - All UI components of the application.
- **pages** - Components for application pages.
- **hooks** - Custom React hooks.
- **api** - API configuration and mock implementation.
- **state** - Redux logic.
- **assets** - Static assets (images, icons). 
