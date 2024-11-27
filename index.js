const express = require("express");
const app = express();
const port = 3000;
// ĐỊnh nghĩa route
app.get("/tin-tuc", (req, res) => {
  res.send("Hello World!");
});

//  127.0.0.1 - local host
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
