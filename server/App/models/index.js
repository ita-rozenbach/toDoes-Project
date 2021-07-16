const dbConfig = require("../config/db.config");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
console.log(dbConfig.url)
db.toDo = require("./toDo.model")(mongoose);
db.user = require("./user.model")(mongoose);

module.exports =db;
