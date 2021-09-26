const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/authentication", require("./routes/auth"));
app.use("/dashboard", require("./routes/todos"));


// Start server
app.listen(process.env.PORT, () => {
  console.log(`Server is starting on port ${process.env.PORT}`);
});
