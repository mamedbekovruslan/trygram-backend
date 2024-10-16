import express, { Request, Response, Express } from 'express';
import cors from 'cors';

const app: Express = express();
const PORT: number = 3001;

app.use(cors());

try {
  app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to TypeScript backend!');
    res.status(200);
  });
} catch (error) {
  console.log(error);
}

app.listen(PORT, () => {
  console.log(`Server is now running on: http://localhost:${PORT}`);
});
