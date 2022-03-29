
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const PORT = process.env.PORT;

/**
 * @desc create server
 */
const app = express();

// add middlewares on server
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());


// routes config
app.get('/api', (req, res) => {
	res.json({time: Date().toLocaleString()})
});


// start server
app.listen(8080, () => {
	console.info(`this server is listening on port of ${PORT}`);
});


