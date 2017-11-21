# Places App (Backbone.js Remake)

## Prerequisites

* Node.js (https://nodejs.org/)
* Yarn (https://yarnpkg.com/)

## Development Tasks

| Command | Description |
|---------|-------------|
| `yarn install` | Fetch dependencies and build binaries for any of the modules |
| `yarn start` | Run the app in development mode with live reload on `http://localhost:6789` |
| `yarn build` | Generate an optimised, production-ready `build` folder |
| `yarn test` | Run test suite in the interactive watch mode |

## CI/CD

All commits to `master` trigger a deployment to the **production environment** (https://places.surge.sh), provided all tests pass.
