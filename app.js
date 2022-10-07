const express = require("express");
const app = express();
app.get("/", (req, res) => {
	res.send(`<h3>hello world</h3>`);
});
console.log("04 Store API");
app.listen(7000, () => {
	console.log("listening on port 6000");
});
