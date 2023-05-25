import { Component, Input,OnInit,OnChanges,SimpleChanges } from '@angular/core';

interface AvailabilityStyle 
{
  height: string;
  marginTop: string;
  backgroundColor: string;
}

interface Doctor 
{
  name: string;
  availability: 
  {
    [date: string]: 
    {
      start: string;
      end: string;
    };
  };
  appointments: 
  {
    date: string;
    slots: string[];
  }[];
}

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit,OnChanges
{
  ngOnChanges(changes: SimpleChanges): void 
  {
    if (changes['selectedDate']) 
    {
      this.updateData();
    }
  }
  
  @Input() timeSlots!: string[];
  @Input() selectedDate: string = '';
  currentDate: Date = new Date();
  availabilityStyle: AvailabilityStyle | null = null;
  appointment: string[] = [];

  ngOnInit()
  {
    this.selectedDate = this.formatDate(this.currentDate);
  }
  doctors: Doctor[] = [
    {
      name: 'Dr. X',
      availability: {
        '2023-05-22': { start: '10:00 AM', end: '1:00 PM' },
        '2023-05-23': { start: '9:00 AM', end: '11:00 AM' },
        '2023-05-24': { start: '10:00 AM', end: '4:00 PM' },
        '2023-05-25': { start: '9:00 AM', end: '1:00 PM' },
        '2023-05-26': { start: '11:00 AM', end: '1:00 PM' },
        '2023-05-27': { start: '10:00 AM', end: '12:00 PM' },
        '2023-05-28': { start: '9:00 AM', end: '1:00 PM' },
        '2023-05-29': { start: '12:00 PM', end: '4:00 PM' },
        '2023-05-30': { start: '11:00 AM', end: '1:00 PM' },
      },
      appointments: [
        { date: '2023-05-22', slots: ['11:00 AM', '1:00 PM'] },
        { date: '2023-05-23', slots: ['10:00 AM', '11:00 AM'] },
        { date: '2023-05-24', slots: ['11:00 AM', '1:00 PM'] },
        { date: '2023-05-25', slots: ['10:00 AM', '12:00 PM'] },
        { date: '2023-05-26', slots: ['12:00 PM'] },

      ]
    },
    {
      name: 'Dr. Y',
      availability: {
        '2023-05-22': { start: '11:00 AM', end: '2:00 PM' },
        '2023-05-23': { start: '10:00 AM', end: '11:00 AM' },
        '2023-05-24': { start: '11:00 AM', end: '2:00 PM' },
        '2023-05-25': { start: '9:00 AM', end: '2:00 PM' },
        '2023-05-26': { start: '10:00 AM', end: '3:00 PM' },
      },
      appointments: [
        { date: '2023-05-22', slots: ['11:00 AM', '1:00 PM'] },
        { date: '2023-05-23', slots: ['10:00 AM'] },
        { date: '2023-05-24', slots: ['11:00 AM', '1:00 PM'] },
        { date: '2023-05-25', slots: ['11:00 AM', '1:00 PM'] },
        { date: '2023-05-26', slots: ['11:00 AM', '1:00 PM'] },
      ]
    },
    
  ];
  
  handleDateChange(date: Date) 
  {
    this.currentDate = date;
    this.selectedDate = this.formatDate(date);
  }

  formatDate(date: Date): string
  {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
  updateData(): void 
  {
    const doctor = this.doctors.find(doc => doc.availability.hasOwnProperty(this.selectedDate));
  
    if (doctor) 
    {
      const appointments = doctor.appointments.find(app => app.date === this.selectedDate);
      if (appointments)
      {
        this.appointment = appointments.slots;
      } 
      else
      {
        this.appointment = [];
      }
      const availability = doctor.availability[this.selectedDate];
      if (availability) 
      {
        this.availabilityStyle = this.getDoctorAvailabilityStyle(doctor);
      } 
      else
      {
        this.availabilityStyle = null;
      }
    }
  }
  
  getDoctorAvailabilityStyle(doctor: Doctor): any {
    const availability = doctor.availability[this.selectedDate];
    if (!availability) {
      return {
        height: '0px',
        marginTop: '0px',
        backgroundColor: 'transparent'
      };
    }
  
    const startSlotIndex = this.timeSlots.indexOf(availability.start);
    let endSlotIndex = this.timeSlots.indexOf(availability.end) + 1;
  
    if (endSlotIndex > this.timeSlots.length) {
      endSlotIndex = this.timeSlots.length;
    }
  
    const slotsBetween = endSlotIndex - startSlotIndex;
    const availabilityStyle = {
      height: (slotsBetween * 40) + 'px',
      marginTop: (startSlotIndex * 40) + 'px',
      backgroundColor: '#ABC5E2'
    };
  
    return availabilityStyle;
  }
  
  
  // getDoctorAvailabilityStyle(doctor: Doctor): AvailabilityStyle
  // {
  //   const availability = doctor.availability[this.selectedDate];
  //   if (!availability)
  //   {
  //     return { height: '0px', marginTop: '0px', backgroundColor: 'transparent' };
  //   }
  
  //   const startSlotIndex = this.timeSlots.indexOf(availability.start);
  //   let endSlotIndex = this.timeSlots.indexOf(availability.end) + 1;
  
  //   if (endSlotIndex > this.timeSlots.length)
  //   {
  //     endSlotIndex = this.timeSlots.length;
  //   }
  
  //   const slotsBetween = endSlotIndex - startSlotIndex;
  //   const timeSlotHeight = 40;
  //   const availabilityStyle: AvailabilityStyle =
  //   {
  //     height: (slotsBetween * timeSlotHeight) + 'px',
  //     marginTop: (startSlotIndex * timeSlotHeight) + 'px',
  //     backgroundColor: '#ABC5E2',
  //   };
  
  //   return availabilityStyle;
  // }
  

  getAppointmentButtonStyle(doctor: Doctor, timeSlot: string): any 
  {
    const availability = doctor.availability[this.selectedDate];
    if (!availability)
    {
      return { marginTop: '0px' };
    }

    const startSlotIndex = this.timeSlots.indexOf(availability.start);
    const appointmentIndex = this.timeSlots.indexOf(timeSlot);
    const marginTop = (appointmentIndex - startSlotIndex) * 40;

    return { marginTop: marginTop + 'px' };
  }

  getAppointmentButtonClass(doctor: Doctor, timeSlot: string): string
  {
    const appointment = doctor.appointments.find(a => a.date === this.selectedDate);
    if (appointment) {
      const isAvailable = appointment.slots.includes(timeSlot);
      return isAvailable ? 'available' : 'unavailable';
    }
    return 'unavailable';
  }

  getAppointmentStatus(doctor: Doctor, timeSlot: string): string
  {
    const appointment = doctor.appointments.find(a => a.date === this.selectedDate);
    if (appointment) {
      const isAvailable = appointment.slots.includes(timeSlot);
      return isAvailable ? 'Available' : 'Unavailable';
    }
    return 'Unavailable';
  }

  getAvailableTimes(doctor: Doctor): string[]
  {
    const availability = doctor.availability[this.selectedDate];
    if (!availability) {
      return [];
    }

    const startSlotIndex = this.timeSlots.indexOf(availability.start);
    const endSlotIndex = Math.min(
      this.timeSlots.indexOf(availability.end) + 1,
      this.timeSlots.length
    );
    return this.timeSlots.slice(startSlotIndex, endSlotIndex);
  }



}
