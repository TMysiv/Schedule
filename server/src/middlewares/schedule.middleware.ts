import { Request, Response, NextFunction } from 'express';

import { ErrorHandler } from '../error/errorHandler';
import { scheduleService } from '../services/schedule.service';
import { IScheduleOfTrain } from '../interfaces';
import { scheduleValidator } from '../validators/schedule.validator';

class ScheduleMiddleware {
    public async checkIsTrainExist(req:Request, res:Response, next:NextFunction) {
        try {
            const { id } = req.params;

            const trains = await scheduleService.getAllTrains();
            const trainFromDB = trains.find((train:IScheduleOfTrain) => train.id === +id);

            if (!trainFromDB) {
                next(new ErrorHandler('Train is not found', 400));
                return;
            }

            next();
        } catch (e) {
            next(e);
        }
    }

    async createOrUpdateScheduleOfTrain(req: Request, res: Response, next: NextFunction):Promise<void> {
        try {
            const { error, value } = scheduleValidator.createSchedule.validate(req.body);

            if (error) {
                next(new ErrorHandler(error.message, 401));
                return;
            }

            req.body = value;
            next();
        } catch (e) {
            next(e);
        }
    }
}

export const scheduleMiddleware = new ScheduleMiddleware();
