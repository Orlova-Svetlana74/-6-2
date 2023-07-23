const express = require('express');
const app = express();
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const userRouter = require('./routes/users');
const loggerOne = require ('./middlewares/loggerOne');
const loggerTwo = require ('./middlewares/loggerTwo');

dotenv.config();
app.use(userRouter);
const {
     PORT = 3001,
     API_URL = 'http://127.0.0.1',
     MONGO_URL ='mongodb://localhost:27017/backend' 
} = process.env;

mongoose.connect('mongodb://127.0.0.1:27017/test').
  catch(error => handleError(error));



const helloWord = (request, response) =>{
    response.status(200);
    response.send("Hello, World!");
}
app.use(cors());
app.use(loggerOne);
app.use(loggerTwo);
app.use(bodyParser.json())


app.get('/', helloWord);

app.post('/', (request, response) => {
    response.status(200);
    response.send('Hello from POST');
  });






app.listen(PORT, () => {
    console.log(`Ссылка на сервер: ${API_URL}:${PORT}`);
});


// const http = require("http");
// const getUsers = require("./modules/users");

// const hostname = "127.0.0.1";
// const port = 3003;
// const server = http.createServer((request, response) => {
//   const url = new URL(request.url, "http://127.0.0.1");
//   const searchParams = url.searchParams;

//   if (!searchParams.toString().length) {
//     response.statusCode = 200;
//     response.statusMessage = "OK";
//     response.setHeader("Content-Type", "text/plain");
//     response.write("Hello, World!");
//     response.end();

//     return;
//   }

//   for (let [key, value] of searchParams.entries()) {
//     switch (key) {
//       case "users":
//         response.statusCode = 200;
//         response.statusMessage = "OK";
//         response.setHeader("Content-Type", "application/json");
//         response.write(getUsers());
//         response.end();
//         break;
//       case "hello":
//         if (value) {
//           response.statusCode = 200;
//           response.statusMessage = "OK";
//           response.setHeader("Content-Type", "text/plain");
//           response.write(`Hello, ${value}`);
//           response.end();
//         } else {
//           response.statusCode = 400;
//           response.setHeader("Content-Type", "text/plain");
//           response.write("Enter a name");
//           response.end();
//         }
//         break;
//       default:
//         response.statusCode = 500;
//         response.setHeader("Content-Type", "text/plain");
//         response.write(" ");
//         response.end();
//         break;
//     }
//   }
// });
// server.listen(port, hostname, () => {
//   console.log(`Сервер запущен по адресу http://${hostname}:${port}/`);
// });