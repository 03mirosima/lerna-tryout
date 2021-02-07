const express = require("express");

const port = process.env.PORT || 9000;
const app = express();

app.get("/", (re, res) => {
  res.send("Proje 3 Benim!");
});
app.listen(port, (err) => {
  if (err) {
    console.log(`Error: ${err.message}`);
  } else {
    console.log(`Listening on port ${port}`);
  }
});
