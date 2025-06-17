# Wellfound.com Frontend Clone

## Project Purpose

This project aims to create a front-end clone of the Wellfound (formerly AngelList Talent) website. The primary goal is to replicate the user interface, core features, and overall user experience of the original site. This project is for educational and portfolio purposes.

## Technology Stack

*   **Frontend Framework:** React (using Vite for project setup)
*   **Routing:** React Router (`react-router-dom`)
*   **Styling:** Styled Components (`styled-components`)
*   **State Management:** React Context API (initially, Redux might be considered if complexity grows)
*   **Linting/Formatting:** ESLint and Prettier (to be configured)
*   **Build Tool:** Vite

## Project Structure (Initial Plan)

```
/public
    /assets
        /images
        /icons
/src
    /components
        /common
            /Button
            /Input
            /Card
            /Modal
            /...
        /layout
            /Header
            /Footer
            /Navigation
            /...
        /specific
            /JobCard
            /CompanyProfile
            /UserProfile
            /...
    /pages
        /HomePage
        /JobsPage
        /CompanyPage
        /ProfilePage
        /AuthPage
        /...
    /assets
        /fonts
        /global-styles
    /contexts
        /AuthContext
        /ThemeContext
        /...
    /hooks
        /useAuth
        /useFetch
        /...
    /routes
        /AppRouter.jsx
    /services
        /api.js (for mock data fetching)
    /styles
        /GlobalStyle.js
        /theme.js
    /utils
        /helpers.js
        /constants.js
    App.jsx
    main.jsx
README.md
package.json
vite.config.js
.eslintrc.cjs
.prettierrc
```

## Key Features to Implement (High-Level)

1.  **Homepage:** Replicate the overall structure, including hero section, featured content, and calls to action.
2.  **User Authentication:**
    *   Sign-up (Job Seeker & Company)
    *   Log-in
    *   (Note: Backend authentication will be mocked)
3.  **Job Search & Discovery:**
    *   Search bar with filters (role, location, skills, etc.)
    *   Job listings display
    *   Job detail view
4.  **Company Profiles:** Display company information, jobs, etc.
5.  **Job Seeker Profiles:** Display candidate information, experience, skills, etc.
6.  **Navigation:** Implement clear and intuitive navigation across the site.
7.  **Responsiveness:** Ensure the application is usable across different device sizes.

## Development Plan (Phased Approach)

1.  **Phase 1: Core Setup & Homepage**
    *   Initialize React project with Vite.
    - Install core dependencies (`react-router-dom`, `styled-components`).
    *   Set up basic project structure and global styles.
    *   Implement the main layout (Header, Footer).
    *   Develop the static Homepage UI.
2.  **Phase 2: Routing & Basic Pages**
    *   Implement routing for main sections (Jobs, Companies, Auth).
    *   Create placeholder pages for these sections.
3.  **Phase 3: Authentication UI**
    *   Develop Login and Sign-up forms and pages.
    *   Implement basic form handling (no actual backend integration).
4.  **Phase 4: Job Search & Listings**
    *   Develop UI for job search filters.
    *   Create components for job cards and job detail display.
    *   Implement functionality with mock data.
5.  **Phase 5: Profile Pages (Basic)**
    *   Develop basic UI for Company and Job Seeker profiles.
6.  **Phase 6: Styling Refinements & Responsiveness**
    *   Ensure consistent styling and theming.
    *   Implement responsive design across the application.
7.  **Phase 7: Code Cleanup & Documentation**
    *   Refactor code as needed.
    *   Add comments and finalize the README.

## Comments and Code Quality

*   Code will be organized into logical modules and components.
*   Comments will be added to explain complex logic, component props, and usage.
*   ESLint and Prettier will be used to maintain code consistency and quality.

This README will be updated as the project progresses.
