const express = require("express");
const app = express();

app.get("/user/:id", (req, res) => {
  const id = req.params.id;
  res.json({
    id,
    name: `Danish Adeel #${id}`
  });
});

app.listen(8080, () => {
  console.log("Server running on port 8080");
});