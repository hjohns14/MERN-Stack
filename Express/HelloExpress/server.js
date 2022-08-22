const express = require("express");
const app = express();
const port = 8000;

//To  use POST data we need to add this code
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// req is short for request
// res is short for response

const users = [
  { firstName: "Reimu", lastName: "Hakurei" },
  { firstName: "Marisa", lastName: "Kirisame" },
  { firstName: "Sanae", lastName: "Kochiya" },
  { firstName: "Sakuya", lastName: "Izayoi" },
  { firstName: "Momiji", lastName: "Inubashiri" }
];

app.get("/api", (req, res) => {
  res.json({
    message: "Hello World",
    name: "App"
  });
});

app.get("/api/users", (req, res) => {
  res.json({ users: users });
});

app.post("/api/users", (req, res) => {
  console.log(req.body)

  users.push(req.body)

  res.json({ status: "ok", users })
})

app.get("/api/users/:id", (req, res) => {
  // get id from from req.params
  console.log(req.params.id);

  res.json(users[req.params.id]);
});

app.put("/api/users/:id", (req, res) => {

  const id = req.params.id;

  users[id] = req.body;

  // we always need to respond with something
  res.json({ status: "ok" });
});

app.delete("/api/users/:id", (req, res) => {
  // we can get this `id` variable from req.params
  const id = req.params.id;
  // assuming this id is the index of the users array we can remove the user like so
  users.splice(id, 1);
  // we always need to respond with something
  res.json( { status: "ok" } );
});






// this needs to be below the other code blocks
app.listen(port, () => console.log(`Listening on port: ${port}`));