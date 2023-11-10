# Welcome to Urban Odyssey

![Logo](https://github.com/JBakesale/Urban-Odyssey/blob/main/client/public/images/logo_transparent2.png)

This project is an ongoing endeavor to leverage openAI and Maps API to create a mobile-first location-based productivity adventure app!

## Screenshots

![HomePage](https://github.com/JBakesale/Urban-Odyssey/blob/josh/cleanup/docs/screenshots/homepage_loggedIn.png)
![warningModal](https://github.com/JBakesale/Urban-Odyssey/blob/josh/cleanup/docs/screenshots/warningModal.png)
![aboutUs](https://github.com/JBakesale/Urban-Odyssey/blob/josh/cleanup/docs/screenshots/about_us.png)
![adventureComplete](https://github.com/JBakesale/Urban-Odyssey/blob/josh/cleanup/docs/screenshots/adventureComplete.png)

## Getting Started
```bash 
git clone https://github.com/JBakesale/Urban-Odyssey.git
```
## Dependencies:
- Ruby
- Rails
- Postgresql
- Node.js
- React
- Axios
- @react-google-maps/api
- @mui
- rack-cors

## Install Dependencies (First time only)
- Install ruby: `rvm install 3.1.1`
- Install rails dependencies: `bundle install`
- Install front-end dependencies: `npm install`
- Install node dep: `yarn`

## Database initialization
- `rails db:create`

## Launch the App
- From Client Directory: `npm start`
- From Server Directory: `bin/rails server`
- From CLI, open postgres: `psql`, then connect to appropriate database `\c server_development`

## Github Workflow Overview (for contributors)
`cd Urban-Odyssey`
- Create new feature branch: 
  - `git checkout -b feature/1-feature-name`
- Commit often:
  - `git add .`
  - `git commit -m "Add new feature"`
- Push to origin: 
  - `git push origin feature/1-feature-name`
- Create a Pull Request:
  - Go to the GitHub repository's page.
  - Click on the "Pull Requests" tab.
  - Click the "New Pull Request" button.
  - Set the base branch (main) and the compare branch (your feature branch).
 - Add a descriptive title and comment explaining your changes.
 - Click "Create Pull Request."
- Review and merge the pull request with teammates
- Update your local repository:
  - `git checkout main`
  - `git pull origin main`
  ### And repeat!

## What we're currently implementing:
- https://trello.com/b/xqvIqmTw/urban-odyssey

- [ ] Code Revision & Cleanup
  - remove logs
  - debug double fetch from useEffect
  - useContext
  - hooks directory
  - helper function directory
  - check for nested paragraph elements
- [ ] maps API
- [ ] migrate db to node.js
- [ ] 'create adventure' component
- [ ] password hashing, bcrypt (firebase?)
- [ ] user profile page connected to db updates exp pts based on adventure completion