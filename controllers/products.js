const getAllProdctsStatic = async (req, res) => {
	res.status(200).json({ msg: "products testing route" });
};
const getAllProdcts = async (req, res) => {
	res.status(200).json({ msg: "products route" });
};
module.exports = { getAllProdcts, getAllProdctsStatic };
