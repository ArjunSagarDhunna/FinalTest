var moongoose= require("mongoose");
const bcrypt = require('bcryptjs');
var Schema = mongoose.Schema;
mongoose.connect("Your connection string here");
var Schema = new Schema({
  "Email":{
    "type": string,
    "unique": true} ,
  "password": String
});