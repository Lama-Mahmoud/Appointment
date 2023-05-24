import { IAppointmentDay } from "../model/appointmentPerWeek.interface";
import { MayOneList, MayThreeList, MayTwoList } from "./time";
import { ITime } from "../model/time.interface";

let Mapping = new Map<number, ITime[]>();
Mapping.set(1,MayOneList);
Mapping.set(2,MayTwoList);
Mapping.set(3,MayThreeList);
Mapping.set(4,MayTwoList);
Mapping.set(5,MayOneList);
Mapping.set(6,MayThreeList);
Mapping.set(7,MayOneList);
Mapping.set(8,MayTwoList);
Mapping.set(9,MayOneList);
Mapping.set(10,MayThreeList);
Mapping.set(11,MayOneList);
Mapping.set(12,MayTwoList);
Mapping.set(13,MayOneList);
Mapping.set(14,MayTwoList);
Mapping.set(15,MayOneList);
Mapping.set(16,MayThreeList);
Mapping.set(17,MayOneList);
Mapping.set(18,MayThreeList);
Mapping.set(19,MayTwoList);
Mapping.set(20,MayOneList);
Mapping.set(21,MayThreeList);
Mapping.set(22,MayOneList);
Mapping.set(23,MayTwoList);
Mapping.set(24,MayOneList);
Mapping.set(25,MayThreeList);
Mapping.set(26,MayOneList);
Mapping.set(27,MayThreeList);
Mapping.set(28,MayOneList);
Mapping.set(29,MayThreeList);
Mapping.set(30,MayTwoList);
Mapping.set(31,MayThreeList);

export let DentistryappintmentDayList: Array<IAppointmentDay> =[
    {
   
        mapOfSlotsList:Mapping,
    },
    
    {
       
        mapOfSlotsList:Mapping,
            },
   
    

]