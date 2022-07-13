import express, { Request, Response } from 'express';

const router = express.Router();

router.delete('/:id', async (req: Request, res: Response) => {
  res.send({});
});

export default router;
