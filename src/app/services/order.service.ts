import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {


  base_url ="http://localhost:8080/api/chef/oredresl";
  base_order_id ="http://localhost:8080/api/chef/";
  base_order_delete ="http://localhost:8080/api/chef/";
  constructor(private httClient:HttpClient) { }

  getAllorderfetching(){ 

    return  this.httClient.get(this.base_url);
}


getOrderById(id:number){
  return  this.httClient.get(this.base_order_id+"clientorder/"+id);
}

deleteOrderbyId(id : number ){
  return this.httClient.delete(this.base_order_delete+"chef/del/"+id);
}


getBnotification(){

  return this.httClient.get("http://localhost:3000/api/items");
}

}
