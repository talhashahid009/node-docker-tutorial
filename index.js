const express = require("express");
const app = express();
const PORT = 3003;

app.get('/', (req, res) => {
    res.send('Hello World!')
});
app.listen(PORT, (req, res) => {
    console.log("server listening on",PORT);
});