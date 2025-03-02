import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiURL: string = 'http://localhost:8082/users';
token !:string;
constructor(private router: Router,
private http : HttpClient) { }
login(user : User)
{
return this.http.post<User>(this.apiURL+'/login', user , {observe:'response'});
}
private helper = new JwtHelperService();
saveToken(jwt:string){
localStorage.setItem('jwt',jwt);
this.token = jwt;
this.isloggedIn = true;
this.decodeJWT();
}
decodeJWT()
{ if (this.token == undefined)
 return;
const decodedToken = this.helper.decodeToken(this.token);
this.roles = decodedToken.roles;
this.loggedUser = decodedToken.sub;
}
loadToken() {
this.token = localStorage.getItem('jwt')!;
this.decodeJWT();
}
 
  getToken():string {
  return this.token;
  }
  setLoggedUserFromLocalStorage(login : string) {
    this.loggedUser = login;
    this.isloggedIn = true;
    this.getUserRoles(login);
    }
    getUserRoles(username :string){
    this.users.forEach((curUser) => {
    if( curUser.username == username ) {
    this.roles = curUser.roles;
    }
    });
    }

users: User[] = [{"username":"admin","password":"123","roles":['ADMIN'],email:"admin@gmail.com",enabled:true},
{"username":"nour","password":"123","roles":['USER'],email:"guedrinour545@gmail.com",enabled:true} ];
public loggedUser!:string;
public isloggedIn: Boolean = false;
public roles!:string[];
logout() {
  this.loggedUser = undefined!;
  this.roles = undefined!;
  this.token= undefined!;
  this.isloggedIn = false;
  localStorage.removeItem('jwt');
  this.router.navigate(['/login']);
  }
SignIn(user :User):Boolean{
let validUser: Boolean = false;
this.users.forEach((curUser) => {
if(user.username== curUser.username && user.password==curUser.password) {
validUser = true;
this.loggedUser = curUser.username;
this.isloggedIn = true;
this.roles = curUser.roles;
localStorage.setItem('loggedUser',this.loggedUser);
localStorage.setItem('isloggedIn',String(this.isloggedIn));
}
});
return validUser;
}
islogin(): Boolean {
  if (this.token == undefined || this.token == null)
    return false;
  const token = this.token;
  return !this.helper.isTokenExpired(token);
}
isAdmin():Boolean{
  if (!this.roles)
  return false;
 return this.roles.indexOf('ADMIN') >=0;
 }
 isTokenExpired(): Boolean
{
return this.helper.isTokenExpired(this.token); }

public regitredUser : User = new User();
setRegistredUser(user : User){
this.regitredUser=user;
}
getRegistredUser(){
return this.regitredUser;
}
registerUser(user :User){ 
  alert("register")
  return this.http.post<User>(this.apiURL+'/register', user, 
{observe:'response'}); 
} 
validateEmail(code : string){
  return this.http.get<User>(this.apiURL+'/verifyEmail/'+code);
  }
  
} 