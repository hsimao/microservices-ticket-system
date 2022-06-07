import express from 'express';
import { currentUser } from '@marschen-tickets/common';

const router = express.Router();

router.get('/currentuser', currentUser, (req, res) => {
  res.send({ currentUser: req.currentUser || null });
});

export default router;
