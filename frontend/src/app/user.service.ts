import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  server_address: string = 'api';
  
  getusers(){
    return this.http.get("http://localhost:3000/getusers");
  }

  userSignup(user:any){
    console.log(user)
    return this.http.post("http://localhost:3000/signup",{"user":user})
    .subscribe(()=>{
      console.log("Success")
    })
  }

  userLogin(user:any){
    return this.http.post<any>("http://localhost:3000/login",{"user":user});
  }

  loggedIn(){
    return !! localStorage.getItem('userToken');
  }

  getUserToken(){
    return  localStorage.getItem('userToken');
  }
}
