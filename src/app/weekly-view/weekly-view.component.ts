import { Component } from '@angular/core';
import { IDayNumber } from '../model/daynumber';

@Component({
  selector: 'app-weekly-view',
  templateUrl: './weekly-view.component.html',
  styleUrls: ['./weekly-view.component.css']
})
export class WeeklyViewComponent {
  today: Date = new Date();
  dayList:Array<IDayNumber>;
  currentDay:number=this.today.getDate();
  month:number=this.today.getMonth();
  year:number=this.today.getFullYear();
  dayOfFirstIndexInWeek:number=this.today.getDate();
  months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  h1!:string;
  p:string= new Date().toDateString();
  constructor(){
    this.h1;
    this.p;
    this.dayList=[];
   }
   ngOnInit(): void {
    this.renderCalendar();

    
  }
  
  renderCalendar(){
  let lastDay =new Date(this.today.getFullYear(),this.month + 1, 0).getDate();
 //console.log("lastDay",lastDay);
  const prevLastDay   = new Date( this.today.getFullYear(), this.month, 0 ).getDate();
  //console.log("prevLastDay",prevLastDay);
  let firstDay=new Date(this.year,this.month,1).getDate();
  const firstDayIndex = this.today.getDay();
  //console.log("firstDayIndex",firstDayIndex);
  const lastDayIndex  = new Date( this.today.getFullYear(), this.month + 1, 0 ).getDay();
  //console.log("lastDayIndex",lastDayIndex);
  const nextDays= 7 - lastDayIndex - 1;
  //console.log("nextDays",nextDays);
  
  //console.log(Math.floor(this.today.getDate() / 7));
  this.h1=this.months[this.month];
  let index=this.today.getDay();
  //console.log(this.today.getDay());
  this.dayOfFirstIndexInWeek=this.currentDay-index;
  //console.log("todayValue",this.todayValue);
  //console.log(this.today.getDate());
  this.dayList.length=0;
  let MappingSlots = new Map<number, string>();

  let z=0;
  if(this.dayOfFirstIndexInWeek>lastDay){//if the first index is > last day in the month 
   
   let newlastDay=lastDay;//then let the first index be =lastday of the month (note: this will direct go to else statment to print it as first one )
    for(let i=0; i<7;i++){
      if(newlastDay>lastDay){// since newlastDay has been increment then if it reach to value >lastday then z will start to be increment
        z++//using z help us to start from 1 tell the for loop stop
        
        this.dayList.push({dayNumber:z})//push to daylist that come from dayPerWeek interface (day number , if it is enable,map to it the number of slot as key and if it available or not)
      //the use of daylist for sending the data to component(day to the perday component and map to the dayslot component)
      newlastDay++;
      }
      else{
        
      this.dayList.push({dayNumber:newlastDay})
      
      newlastDay++;
      }
    }
  }

  else if(this.dayOfFirstIndexInWeek<0){//if index one is negative that mean it reach to prev month(this will be use when we click the prev arrow)
    
    for(let i=0; i<7;i++){
      let newprevalue=prevLastDay+this.dayOfFirstIndexInWeek+z;//last day in the prev month +(todayValue which is -ve value it help to know the number must present it in the calender before prevday)
      //example:the calendar of april 
      //the first week are: 26 27 28 29 30 31 1
      //dayOfFirstIndexInWeek value is =-5
      //then prevalue=prevLastDay(31)+this.todayValue(-5)+z(will start from 0)=31+(-5)+0=26 (for first loop) 
      //then prevalue=prevLastDay(31)+this.todayValue(-5)+z(will be 1)=31+(-5)+1=27 (for 2 loop) and so on... 
      if(newprevalue>prevLastDay){// if prevalue exced prevLastDay the it must start from 1
       
        this.dayList.push({dayNumber:i+this.dayOfFirstIndexInWeek})
      }
      else{//if prevalue(value of days in line 107) < prevLastDay(last day of the prev month)
        
    this.dayList.push({dayNumber:newprevalue})
      
      z++;
      }
    }
  }
  else if(this.dayOfFirstIndexInWeek==lastDay){//if the value is =last Day of the month then print the value then start from 1 to 6(this will be use when we click the next arrow)
    
    this.dayList.push({dayNumber:this.dayOfFirstIndexInWeek})//here will print last day of the prev month
    for(let i=1; i<7;i++){//since first index in week is last day of prev month then it will print 1 to 6
      
      this.dayList.push({dayNumber:i})
    
    }
  }
  else if(this.dayOfFirstIndexInWeek==0){//if the value is =0 that mean this value must be fill by the lastday value of prev month(this will be use when we click the prev arrow)
    
    this.dayList.push({dayNumber:prevLastDay})
    for(let i=1; i<7;i++){//her will start print the first day of the month we are in it
      
      this.dayList.push({dayNumber:i})
    }
  }
  else{//if the dayOfFirstIndexInWeek is still in the range of month days
    MappingSlots.clear;
  for(let i=0; i<7;i++){
    let value=this.dayOfFirstIndexInWeek+i;
    if(value>lastDay){//if value reach to value which is > lastday of current month then it must start from 1 tell for loop end
      
    this.dayList.push({dayNumber:z+1})
    z++;
    }
    else{
      
      this.dayList.push({dayNumber:value})
    
    }
  }
}
  }

  nextWeek() {
    this.currentDay=this.currentDay+7;
    let lastDay =new Date(this.today.getFullYear(),this.month + 1, 0).getDate();
    console.log("todayvalue",this.dayOfFirstIndexInWeek);
    console.log("currentDayinNext",this.currentDay);
   if(this.currentDay>lastDay){
    this.month++
    this.currentDay=this.currentDay-lastDay;
  }
    this.renderCalendar();
    
  }
  
  prevWeek() {
    const prevLastDay   = new Date( this.today.getFullYear(), this.month, 0 ).getDate();
    let lastDay =new Date(this.today.getFullYear(),this.month + 1, 0).getDate();
    console.log("currentDay",this.currentDay);
    let newValue=this.currentDay
    console.log("todayvalue",this.dayOfFirstIndexInWeek);
    this.currentDay=this.currentDay-7;
    console.log("currentDayinNext",this.currentDay);
    if(this.currentDay<=0){
      this.month--;
      this.currentDay=lastDay+this.currentDay;
     console.log("new month ",this.month);
     this.today.setMonth(this.month);
     this.today.setDate(this.currentDay);
    }
    
    this.renderCalendar();
    
  }
}
