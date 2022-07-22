import { Component, OnInit } from '@angular/core';
import { OrderService } from './services/order.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'chefpro';
  chef_ :any;

  constructor(private orderService:OrderService){

  }

  nots :any;
  counternot:number=0;
  ngOnInit(): void {

    this.getAllNotification();
  }

  

  getAllNotification(){

    this.orderService.getBnotification().subscribe(res=>{
this.nots =res;
this.counternot=this.nots.length;
         
    })
     
  }
}
