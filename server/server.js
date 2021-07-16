// const express = require('express');
// const app = express();
// const todoesRouter=require('./todoes');
// const userRouter = require('./users');

// var bodyParser = require('body-parser');
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     res.header("Access-Control-Allow-Methods", "GET, POST,DELETE,PUT");

//     next();
// });

// app.get("/", (req, res) => {
//     res.send("כל הכבוד");
// })
// app.listen(3000, () => {
//     console.log("success");
// });
// app.use("/todoes",todoesRouter);
// app.use("/users",userRouter);



const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
var sessionstorage = require('sessionstorage');

var corsOptions = {
  origin: "*"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./App/models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

app.get("/", (req, res) => {
  res.json({ message: "Welcome to meit application." });
});
require("./App/routes/user.router.js")(app);
app.use((req, res, next) => {
  if (sessionstorage.getItem('userId')){
    console.log(sessionstorage.getItem('userId'));
    next();
  }
})

require("./App/routes/toDo.router.js")(app);
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
