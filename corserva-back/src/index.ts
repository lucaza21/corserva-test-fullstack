//entering Express
import salesOrdersRouter from './routes/salesOrdersRoutes';
import express from 'express';
import { sequelize } from './database';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

const app = express();

// configure dotenv
dotenv.config();

// telling where to find static files
app.use(express.static('public'));

// watching the consumed routes on terminal
app.use((req, _res, next) => {
	console.log(`${req.method} ${req.url} fue consumido.`);
	next();
});

// accept reequests
app.use(bodyParser.json());

//Set up CORS to accept request from Client
const corsOptions = {
	origin: 'http://localhost:5173',
	methods: ['GET', 'POST', 'PUT', 'DELETE'],
	allowedHeaders: ['Content-Type', 'Authorization'],
	optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

// read formdata
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//----------------------------------------------//
//-------------------- ROUTES ------------------//

app.use('/api/sales', salesOrdersRouter);

const PORT = process.env.PORT || 3030;

sequelize
	.sync()
	.then(() => {
		console.log('Database synchronized!');
		app.listen(PORT, () => {
			console.log(`Server is running on port ${PORT}`);
		});
	})
	.catch(error => {
		console.error('Unable to synchronize database:', error);
	});

export default app;

//--------------------- TESTS --------------------------
// to run test, change host:'localhost' in ./database.ts
