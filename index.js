var express = require("express");
var app = express();
var low = require('lowdb')
var FileSync = require('lowdb/adapters/FileSync')
var adapter = new FileSync('db.json')


const port = 3001;

app.set("view engine", "pug");
app.set("views", "./views");
const db = low(adapter)
// Set some defaults (required if your JSON file is empty)
db.defaults({ users: [] })
  .write()


// var users = [
//   { id: 1, name: "viet" },
//   { id: 2, name: "Hang" },
// ];

app.get("/", (req, res) => {
  res.render("index", {
    name: "AAA",
  });
});

app.get("/users", (req, res) => {
  res.render("users/index", {
    users: db.get('users').value(),
  });
});

app.get('/users/create', function(req, res){
  res.render("users/create", {
    users: db.get('users').value(),
  });
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.get("/users/search", (req, res) => {
  var q = req.query.q;
  var matchedUsers = users.filter(function (user) {
    return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
  });

  
});
