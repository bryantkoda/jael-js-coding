// Load data from data/questions.json, select 10 questions randomly and serve from an endpoint for the api the web-app.
// Each request to the endpoint should get a new random set.
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';

import routes from './src/routes/index.js';

dotenv.config();

export const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

routes(app);

app.listen(process.env.PORT, () => console.log(`Express server has started on port ${process.env.PORT}`))
