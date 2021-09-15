import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './routers';
import auth from './middleware/auth';

dotenv.config();

const app = express();
const port = process.env.PORT || process.env.DEFAULT_PORT;

// Middleware
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: true, credentials: true }));
app.use(auth);

// Router
app.use('/api/v1', router);

app.listen(port, () =>
  console.log(`Port: http://localhost:${port}\n`)
);
