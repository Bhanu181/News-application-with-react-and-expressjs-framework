const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config(); // Load environment variables
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const newsRoutes = require("./routes/newsRoutes");
app.use("/api/news", newsRoutes);

// Server listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
