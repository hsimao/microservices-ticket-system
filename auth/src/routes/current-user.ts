import express from 'express';
import jwt from 'jsonwebtoken';

const router = express.Router();

router.get('/currentuser', (req, res) => {
  if (!req.session?.jwt) {
    return res.send({ currentUser: null });
  }

  try {
    // @ts-ignore
    const payload = jwt.verify(req.session.jwt, process.env.JWT_KEY);
    res.send({ currentUser: payload });
  } catch (err) {
    return res.send({ currentUser: null });
  }
});

export default router;
