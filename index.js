const express = require("express");
const morgan = require("morgan");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(morgan("tiny"));

app.use("/api", require("./routes/create"));

app.listen(PORT, () => {
    console.log(`Server is running successfully at localhost:${PORT}`);
});
