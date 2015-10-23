import express from 'express';

var router = express.Router();

router.get('/greetings', function(req, res, next) {
  res.send("Greetings from the serve!!!");
});

export default router;
