import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { MechefService } from '../services/mechef.service';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-chehome',
  templateUrl: './chehome.component.html',
  styleUrls: ['./chehome.component.scss']
})
export class ChehomeComponent implements OnInit {
  cheforder:any;
  chefsorders:any;
  constructor(private chefService:MechefService,private Orderservice:OrderService,private authserv:AuthService ) { }
chef_ :any;
  ngOnInit(): void {
      if(localStorage.getItem("token")){
        this.getchefservice();
  this.getchefId(1);
        this.getChefOrderService();
        
      }else {
        window.location.href="";
      }
  }



  showToasterSuccess(){
    this.chefService.showSuccess("Data shown successfully !!", "yummy.com")
}

showToasterError(){
    this.chefService.showError("Something is wrong", "yummy.com")
}

showToasterInfo(){
    this.chefService.showInfo("This is info", "yummy.com")
}

showToasterWarning(){
    this.chefService.showWarning("This is warning", "yummy.com")
}

  getchefId(id:number){
    this.authserv.getCuurentchefByid(id).subscribe(res=>{

      this.chef_ =res ;

    })

  }

  getchefservice(){
      this.chefService.getAllorder().subscribe(
        res =>{
             this.cheforder=res;
           
        })
  }

  getChefOrderService(){
    this.Orderservice.getAllorderfetching().subscribe(res=>{
      this.chefsorders=res;


    })

        
  }

}
