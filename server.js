const express = require("express");
const app = express();
const cors = require("cors");

//middleware
app.use(cors());
app.use(express.json());

//routes
app.use("/authentication", require("./routes/auth"));
app.use("/dashboard", require("./routes/todos"));


app.listen(5000, () => {
  console.log(`Server is starting on port 5000`);
});
