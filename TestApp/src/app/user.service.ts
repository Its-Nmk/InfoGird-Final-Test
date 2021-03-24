import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'http://localhost:3000';
  logggedUser; loginStatus=false;
  // Status for succes msg
  formSuccess = false;

  constructor(private http: HttpClient, private router: Router) { }

  addUser(firstName, lastName, email, phone, password) {
    const user = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      password: password
    };
    console.log(user);
    this.http.post(`${this.url}/signup`, user)
      .subscribe(res => {
        console.log('Done',res);
        window.alert("You are registerred Successfully.")
        this.router.navigate(['/login']);
        this.formSuccess = true;
      });
    return this.formSuccess;

  }

getUserData(){
  return this.logggedUser;
}

  getDetails() {
    // return this.logggedUser;
    return this.http.get(`${this.url}/profile/${this.logggedUser._id}`)
  }

  checkLogin(username, password) {
    const loginData = {
      username: username,
      password: password
    }
    return this.http.post(`${this.url}/login`, loginData,)//{responseType: 'text'}
      .subscribe(res => {
        console.log("User  ======>", res)
        if (res) {
          this.logggedUser = res;
          this.loginStatus=true;
          this.router.navigate([`/profile`]);
          // this.getDetails();
        }
      },
        error => {
          console.log("error is ===", error);
          window.alert("Invalid Credintials")
        })
  }
  logout(){
    return this.http.get(`${this.url}/logout`)
  }

  update(newData){
    return this.http.patch(`${this.url}/profile/edit/${this.logggedUser._id}`,newData)
  }
}
