## Getting Started
```git clone https://github.com/JBakesale/Urban-Odyssey.git```


## Github Workflow Overview

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

## Requirements
- Ruby
- Rails
- Postgresql
- Node.js
- React

## Install Dependencies (First time only)
- Install ruby v<v>: `rvm install <v>`
- Install rails dependencies: `bundle install`
- Install node dep: `yarn`


## Database creation & initialization
- `rake db:create`
- `rake db:migrate`

## ENV variables
We need to set our ENV still before starting Rails Server
