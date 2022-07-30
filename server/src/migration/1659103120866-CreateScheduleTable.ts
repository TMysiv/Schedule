import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateScheduleTable1659103120866 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS Schedule (
                id INT PRIMARY KEY AUTO_INCREMENT,
                numberOfTrain INT NOT NULL,
                startingStation VARCHAR(250) NOT NULL,
                arrivalTime VARCHAR(250) NOT NULL,
                stopping INT NOT NULL,
                departureTime VARCHAR(250) NOT NULL,
                terminalStation VARCHAR(250) NOT NULL,
                createdAt TIMESTAMP DEFAULT(UTC_TIMESTAMP()) NOT NULL,
                deletedAt TIMESTAMP
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE IF EXISTS Schedule
        `);
    }
}
