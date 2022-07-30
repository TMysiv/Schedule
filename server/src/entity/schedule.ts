import {
    Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn,
} from 'typeorm';

import { IScheduleOfTrain } from '../interfaces';

@Entity('Schedule', { database: 'trainschedule' })

export class Schedule implements IScheduleOfTrain {
    @PrimaryGeneratedColumn()
        id: number;

    @Column({
        type: 'int',
        nullable: false,
    })
        numberOfTrain: number;

    @Column({
        type: 'varchar',
        width: 250,
        nullable: false,
    })
        startingStation: string;

    @Column({
        type: 'varchar',
        width: 250,
        nullable: false,
    })
        arrivalTime: string;

    @Column({
        type: 'varchar',
        width: 250,
        nullable: false,
    })
        stopping: number;

    @Column({
        type: 'varchar',
        width: 250,
        nullable: false,
    })
        departureTime: string;

    @Column({
        type: 'varchar',
        width: 250,
        nullable: false,
    })
        terminalStation: string;

    @Column({
        nullable: false,
        default: Date.now(),
    })
    @CreateDateColumn({ type: 'timestamp' })
        createdAt: string;

    @Column()
    @DeleteDateColumn({ type: 'timestamp' })
        deletedAt?: string;
}
