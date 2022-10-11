const Product = require("../models/product");
const getAllProdctsStatic = async (req, res) => {
	const Products = await Product.find({});

	res.status(200).json({ Products });
};
const getAllProdcts = async (req, res) => {
	const { featured, company, name } = req.query;
	const queryObject = {};
	if (featured) {
		queryObject.featured = featured === "true" ? true : false;
	}
	if (company) {
		queryObject.company = company;
	}
	if (name) {
		queryObject.name = { $regex: name, $options: "i" };
	}
	const products = await Product.find(queryObject);
	res.status(200).json({ products, nbHits: products.length });
};
module.exports = { getAllProdcts, getAllProdctsStatic };
