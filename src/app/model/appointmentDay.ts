
import { IAppointmentDay } from "./appointmentDay.interface";
import { DentistryList, PhysiotherapyList } from "./daySlot";
import { IDaySlot } from "./daySlot.interface";
import { MayOneList, MayTwoList } from "./time";
import { ITime } from "./time.interface";
let Mapping = new Map<number, ITime[]>();
Mapping.set(1,MayOneList);
Mapping.set(3,MayTwoList);
Mapping.set(4,MayOneList);
Mapping.set(5,MayTwoList);
Mapping.set(6,MayOneList);
Mapping.set(7,MayOneList);
Mapping.set(10,MayOneList);
Mapping.set(12,MayTwoList);
Mapping.set(13,MayOneList);
Mapping.set(14,MayOneList);
Mapping.set(15,MayOneList);
Mapping.set(17,MayOneList);
Mapping.set(19,MayTwoList);
Mapping.set(20,MayOneList);
Mapping.set(21,MayOneList);
Mapping.set(22,MayOneList);
Mapping.set(25,MayOneList);
Mapping.set(29,MayOneList);
let Mapping1 = new Map<number, ITime[]>();
Mapping1.set(1,MayOneList);
Mapping1.set(2,MayOneList);
Mapping1.set(4,MayOneList);
Mapping1.set(5,MayOneList);
Mapping1.set(6,MayOneList);
Mapping1.set(7,MayOneList);
Mapping1.set(10,MayOneList);
Mapping1.set(12,MayOneList);
Mapping1.set(13,MayOneList);
Mapping1.set(14,MayOneList);
Mapping1.set(15,MayOneList);
Mapping1.set(17,MayOneList);
Mapping1.set(19,MayOneList);
Mapping1.set(21,MayOneList);
Mapping1.set(22,MayOneList);
Mapping1.set(24,MayOneList);
Mapping1.set(29,MayOneList);
export const DentistryappintmentDayList: Array<IAppointmentDay> =[
    {
    department:'Dentistry',
    monthA:5,
    yearA: 2023,
   //map.push(1,DentistryList),
   map:Mapping,
    },
    {
        department:'Physiotherapy',
        monthA:5,
        yearA: 2023,
       //map.push(1,DentistryList),
       map:Mapping1,
        },
    {
        department:'Radiology',
        monthA:5,
        yearA: 2023,
        //map.push(1,DentistryList),
        map:Mapping,
            },
    {
        department:'Lab works',
        monthA:5,
        yearA: 2023,
        //map.push(1,DentistryList),
        map:Mapping1,
                },
    

]