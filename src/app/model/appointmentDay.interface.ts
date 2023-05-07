import { IDaySlot } from "./daySlot.interface";
import { ITime } from "./time.interface";

export interface IAppointmentDay{
    department:string,
    monthA:number,
    yearA: number,
    map: Map<number,ITime[]>,
}