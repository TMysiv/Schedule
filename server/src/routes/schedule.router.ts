import { Router } from 'express';
import { scheduleController } from '../controllers/schedule.controller';
import { scheduleMiddleware } from '../middlewares/schedule.middleware';

const router = Router();

router.get('/', scheduleController.getAllTrains);
router.get('/:id', scheduleMiddleware.checkIsTrainExist, scheduleController.getTrainById);
router.post('/', scheduleMiddleware.createOrUpdateScheduleOfTrain, scheduleController.createScheduleOfTrain);
router.patch('/:id', scheduleMiddleware.checkIsTrainExist,scheduleMiddleware.createOrUpdateScheduleOfTrain, scheduleController.updateScheduleOfTrain);
router.delete('/:id', scheduleMiddleware.checkIsTrainExist, scheduleController.deleteScheduleOfTrain);

export const scheduleRouter = router;
