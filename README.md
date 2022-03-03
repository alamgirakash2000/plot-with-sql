# How the start?

## After downloading or cloning this repository -

- open the main branch in VS code
- Run : npm install
- Run : npm run start

# Some description about this repository

- ## **_server.js_** and **_connection.js_**

  these files are used to handle the backend. Here **_connection.js_** file will
  connect the database **_MQTTNew.db_** with the server and **_server.js_** file
  will start the server at **_localhost:8080_** location. This server will serve
  the data that will be plotted in the client side.

- ## **_src/client.js_**
  This file will receive the data and start a client site created with
  **_REACT_** framework and Plot the data with the help of **_Plotly.js_**
  Library.
