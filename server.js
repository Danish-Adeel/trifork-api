const express = require("express");
const app = express();

app.get("/:user/:id", (req, res) => {
  const id = req.params.id;
  const user = req.params.user;
  res.json({
    id,
    name: `#${user} #${id}`
  });
});

app.listen(8080, () => {
  console.log("Server running on port 8080");
});
