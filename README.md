# TrueLayer take home test

Thank you for giving me the opportunity to show you my skills in your take home test, it was lots of fun.

## Getting started

In order to run this project you will need npm and Node.

## Installation

1. Install dependencies.

   ```bash
   cd server
   npm i
   cd ..
   cd client
   npm i
   ```

2. Create a .env in the client folder with the following variable:

   - REACT_APP_SERVERURL

3. Create a .env in the server folder with the following variables:

   - SERVER_PORT

4. From the termial, in the client folder, run `npm start`, this runs the app in the development mode. Open http://localhost:3000 to view it in the browser. The page will reload if you make edits, you will also see any lint errors in the console.

   ```bash
   cd client
   npm start
   ```

5. From a seperate terminal, in the server folder, run `node index` to start the server.
   ```bash
    cd server
    node index
   ```

## Testing

You can run the automated testing on the client by running `npm test` from within the client folder.
