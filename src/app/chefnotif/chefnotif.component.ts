import { Component, OnInit } from '@angular/core';
import { MechefService } from '../services/mechef.service';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-chefnotif',
  templateUrl: './chefnotif.component.html',
  styleUrls: ['./chefnotif.component.scss']
})
export class ChefnotifComponent implements OnInit {

  constructor(private orderService:OrderService,private chefService:MechefService) { }
nots :any;
  ngOnInit(): void {
    this.getAllNotification();
  }

  

  getAllNotification(){

    this.orderService.getBnotification().subscribe(res=>{
this.nots =res;
         
    })
     
  }

  showToasterSuccess(){
    this.chefService.showSuccess("Data shown successfully !!", "yummy.com")
}

showToasterError(){
    this.chefService.showError("Something is wrong", "yummy.com")
}


}
