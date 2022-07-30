import { NextFunction, Request, Response } from 'express';
import { scheduleService } from '../services/schedule.service';

class ScheduleController {
    public async getAllTrains(req: Request, res: Response, next: NextFunction) {
        try {
            const trains = await scheduleService.getAllTrains();
            return res.json(trains);
        } catch (e) {
            next(e);
        }
    }

    public async getTrainById(req: Request, res: Response, next: NextFunction) {
        const { id } = req.params;
        try {
            const train = await scheduleService.getTrainById(+id);
            return res.json(train);
        } catch (e) {
            next(e);
        }
    }

    public async createScheduleOfTrain(req: Request, res: Response, next: NextFunction) {

        try {
            const newScheduleOfTrain = await scheduleService.createScheduleOfTrain(req.body);
            return res.json(newScheduleOfTrain);
        } catch (e) {
            next(e);
        }
    }

    public async updateScheduleOfTrain(req: Request, res: Response, next: NextFunction) {
        const { id } = req.params;
        try {
            const updatedScheduleOfTrain = await scheduleService.updateScheduleOfTrain(req.body, +id);
            return res.json(updatedScheduleOfTrain);
        } catch (e) {
            next(e);
        }
    }

    public async deleteScheduleOfTrain(req: Request, res: Response, next: NextFunction) {
        const { id } = req.params;
        try {
            await scheduleService.deleteScheduleOfTrain(+id);
            return res.json('Deleted Successfully');
        } catch (e) {
            next(e);
        }
    }
}

export const scheduleController = new ScheduleController();
