# Demo APP

- A collection of unit tests was created during the development. In some cases (like for the utility functions or some utility components) TDD (test driven development) was used;
- This codebase is shipped with a github action that runs the suite of tests, triggered every time a commit or a pull request is done. This of course wasn't part of the assignment, but the rationale behind it was to mimic a real-world scenario, with a CI strategy;

## How to start
### 1. With `npm`
you can either run this application by using these commands
```bash
npm install
npm run build
```
After the build phase is completed, run the below command
```bash
npm run start
```

### 2. With Docker
Alternatively, you can run the app by using Docker
```bash
docker compose up -d
```

In both cases, expect the application to be available here http://localhost:3000