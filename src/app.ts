import express, { Application, Request, Response } from 'express';
import cors from 'cors';

const app: Application = express();

// Middleware
app.use(cors());
app.use(express.json());

// Basic Route for testing
app.get('/', (req: Request, res: Response) => {
  res.status(200).json({ message: 'Welcome to SESD CRUD Backend' });
});

export default app;
