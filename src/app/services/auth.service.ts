import { Injectable } from '@angular/core';
import {HttpClient} from  '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }


  getCuurentchefByid(id:number){

    return this.http.get("http://localhost:8080/api/chef/chefid/" +  id);

  }
}
