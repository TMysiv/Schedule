import { getManager } from 'typeorm';

import { Schedule } from '../entity/schedule';
import { IScheduleOfTrain, ITrain } from '../interfaces';

class ScheduleService {
    public async getAllTrains():Promise<IScheduleOfTrain[]> {
        return getManager().getRepository(Schedule).find();
    }

    public async getTrainById(id:number):Promise<IScheduleOfTrain | undefined> {
        return getManager().getRepository(Schedule).findOne({ where: { id } });
    }

    public async createScheduleOfTrain(train:ITrain):Promise<ITrain> {
        return getManager().getRepository(Schedule).save(train);
    }

    public async updateScheduleOfTrain(body:ITrain, id:number):Promise<IScheduleOfTrain | undefined> {
        const {
            numberOfTrain, departureTime, arrivalTime, terminalStation, startingStation, stopping,
        } = body;

        await getManager().getRepository(Schedule).update({ id }, {
            numberOfTrain,
            departureTime,
            arrivalTime,
            terminalStation,
            startingStation,
            stopping,
        });
        return getManager().getRepository(Schedule).findOne({ where: { id } });
    }

    public async deleteScheduleOfTrain(id:number) {
        return getManager().getRepository(Schedule).softDelete(id);
    }

} export const scheduleService = new ScheduleService();
