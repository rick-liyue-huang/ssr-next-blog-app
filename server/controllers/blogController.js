
const blogController = (req, res) => {
	res.json({time: Date().toLocaleString()})
};

module.exports = {blogController}
