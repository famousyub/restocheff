import { Injectable } from '@angular/core';
import {HttpClient} from  '@angular/common/http'

//import { ToastrService } from 'ngx-toastr'
@Injectable({
  providedIn: 'root'
})
export class MechefService {
  //private toastr: ToastrService

  constructor(private http  : HttpClient) { }


  getAllorder(){ 

      return  this.http.get("http://localhost:9088/api.php");
  }

  showSuccess(message:any, title:any){
   // this.toastr.success(message, title)
}

showError(message:any, title:any){
  //  this.toastr.error(message, title)
}

showInfo(message:any, title:any){
   // this.toastr.info(message, title)
}

showWarning(message:any , title:any){
   // this.toastr.warning(message, title)
}

getBnotification(){

    this.http.get("http://localhost:3000/api/items");
}
}
