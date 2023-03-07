//require
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//connection
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/demo');
  console.log('db connect')
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
//schema
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: String,
    mobile: String,
    pswd: String,
    add: String
  });

  //modal
  const User = mongoose.model('User', userSchema);
//server
const server = express();
//midleware
server.use(cors());
server.use(bodyParser.json());
//api
//CRUD -create
server.post('/api',async (req, res) => {
//modal object
    let user = new User();
    user.name = req.body.name;
    user.email = req.body.email;
    user.age = req.body.age;
    user.mobile = req.body.mobile;
    user.pswd = req.body.pswd;
    user.add = req.body.add;
 
    const doc = await user.save();

    console.log(doc)
    res.json(doc);
})
//CRUD - read always use get method
server.get('/api',async (req,res) =>{

    const docs = await User.find({});
    res.json(docs)

})

server.listen(8080, () => { console.log("server started on port 8080") })