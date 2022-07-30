export interface IScheduleOfTrain {
    id:number,
    numberOfTrain:number,
    startingStation:string,
    arrivalTime:string,
    stopping:number,
    departureTime:string,
    terminalStation:string,
    createdAt:string,
    deleteAt?:string
}
