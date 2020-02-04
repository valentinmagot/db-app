# Leaderboard app

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), along with [node-pg](https://node-postgres.com/) to make the connection to the Postgre SQL Database.

## Available Scripts

In the project directory, you can run:

### Install the app

In order to install the app the user must have install Node/NPM on their workstation. And they must create the DataBase on their local machine following the database schema available in parent repository.

```bash
npm install
```

### Run the app

After the installation

```bash
npm start
```

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### Configure the Postgre SQL Database

All the configuration in order to comunicatite with the database has been made in the `server.js` file.

```JavaScript
const pool = new pg.Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'databasename',
    password: 'databasepassword',
    port: 5432
});
```
