import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import studentRoutes from './routes/student.routes';
import { errorHandler } from './middlewares/error.middleware';

const app: Application = express();

app.use(cors());
app.use(express.json());

app.use('/api/students', studentRoutes);

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({ message: 'Welcome to SESD CRUD Backend' });
});

app.use(errorHandler);

export default app;
