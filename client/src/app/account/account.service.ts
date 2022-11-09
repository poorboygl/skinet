import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, of, ReplaySubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUser } from '../shared/models/user';
import {map} from 'rxjs/operators'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl = environment.apiUrl;
  private currentUserSource = new ReplaySubject<IUser>(1);
  currentUser$ = this.currentUserSource.asObservable();

  constructor(private http: HttpClient, private router: Router) {}


  loadCurrentUser(token: string){
    if ( token !== '' && token !== null){ 
      let headers = new HttpHeaders();
      headers = headers.set('Authorization',`Bearer ${token}`);
      return this.http.get<IUser>(this.baseUrl+ 'account', {headers}).pipe(
        map((user: IUser) =>{
          localStorage.setItem('token', user.token);
          console.log('user',user);
          this.currentUserSource.next(user);
        })
      )
    }
    this.currentUserSource.next(null as any);
  }

  login(values: any){
        return this.http.post<IUser>(this.baseUrl+ 'account/login', values).pipe(
          map((user: IUser) =>{
            if (user){
              localStorage.setItem('token', user.token);
              this.currentUserSource.next(user);
            }
          })
        );
   }

  register(values: any){
      return this.http.post<IUser>(this.baseUrl+ 'account/register', values).pipe(
        map((user: IUser) =>{
          if(user){
            localStorage.setItem('token', user.token);
            this.currentUserSource.next(user);
          }
        })
      );
   }

  logout(){
    localStorage.removeItem('token');
    this.currentUserSource.next(null!);
    this.router.navigateByUrl('/');
   }

  checkEmailExists(email: string){
      return this.http.get(this.baseUrl+'account/emailexists?email='+ email);
   }
}
