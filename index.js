const express = require("express");
const app = express();
const port = 3001;
app.set("view engine", "pug");
app.set("views", "./views");

var users = [
  { id: 1, name: "viet" },
  { id: 2, name: "Hang" },
];

app.get("/", (req, res) => {
  res.render("index", {
    name: "AAA",
  });
});

app.get("/users", (req, res) => {
  res.render("users/index", {
    users: users,
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.get("/users/search", (req, res) => {
  var q = req.query.q;
  var matchedUsers = users.filter(function (user) {
    return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
  });

  res.render("users/index", {
    users: matchedUsers,
  });
});
