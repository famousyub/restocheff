import { Component, OnInit } from '@angular/core';
import { Auth } from '../model/auth';

@Component({
  selector: 'app-cheflogin',
  templateUrl: './cheflogin.component.html',
  styleUrls: ['./cheflogin.component.scss']
})
export class ChefloginComponent implements OnInit {

  user:Auth=new Auth() ;

  constructor() { }

  ngOnInit(): void {

    if(localStorage.getItem("token")){
      window.location.href="home";
      
    }
  }

  login(){
    

    if(this.user?.username != undefined && this.user?.password!=undefined )
    {
      localStorage.setItem("username","" +this.user?.username.toString());
      localStorage.setItem("token",this.user?.username.toString() +  new Date().toString());

      window.location.href="home";
      
 
    } 

    



      
  }

}
