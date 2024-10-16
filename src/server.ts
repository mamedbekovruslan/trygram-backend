import express, { Request, Response, Express } from 'express';
import cors from 'cors';

const app: Express = express();
const PORT: number = 3001;

app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.status(200).send('Welcome to TypeScript backend!');
});

app.listen(PORT, () => {
  console.log(`Server is now running on: http://localhost:${PORT}`);
});
