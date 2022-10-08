require("dotenv").config();
// async errors
require("express-async-errors");
const express = require("express");
const app = express();
const connectDB = require("./db/connect");
const productsRouter = require("./routes/products");
const notFoundMiddleware = require("./middleware/not-found");
const errorMiddleware = require("./middleware/error-handler");
//middleware
app.use(express.json());
//routes
app.get("/", (req, res) => {
	res.send(
		`<h3>hello world</h3> <a href="/api/v1/products">products routes</a>`
	);
});
app.use("/api/v1/products", productsRouter);
app.use(errorMiddleware);
app.use(notFoundMiddleware);
const port = process.env.PORT || 3000;
const start = async () => {
	try {
		//connect to db
		await connectDB(process.env.MONGO_URL);
		app.listen(port, () => {
			console.log(`server is listening on ${port}`);
		});
	} catch (error) {
		console.log(error);
	}
};
start();
