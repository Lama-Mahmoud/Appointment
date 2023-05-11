import { ITime } from "./time.interface";

export interface IAppointmentDay{
    
    mapOfSlotsList: Map<number,ITime[]>,
}
/*
I create this interface since it will help me to create the date as in database 
so this interface is use only to implement a demo data
*/ 