import { Component } from '@angular/core';

@Component({
  selector: 'app-droplist',
  templateUrl: './droplist.component.html',
  styleUrls: ['./droplist.component.css']
})
export class DroplistComponent {
  span ="Select Department";

  choice(e: any ){
    console.log(e.srcElement.innerText);
    this.span=e.srcElement.innerText;
  }
}
