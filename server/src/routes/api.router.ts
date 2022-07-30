import { Router } from 'express';

import { scheduleRouter } from './schedule.router';

const router = Router();

router.use('/trains', scheduleRouter);

// @ts-ignore
router.use('*', (err, req, res, next) => {
    res.status(err.code || 500).json({ message: err.message });
});

export const apiRouter = router;
