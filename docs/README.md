# Welcome to Urban Odyssey

![Logo]()

This project is an ongoing endeavor to leverage openAI and Maps API to create location based productivity adventures!

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