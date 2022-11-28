import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[] = []; 
  data!: Observable<Array<any>>;
  constructor() 
  { 
      this.users=
    [
       {
         firstName:"pavithra",
         lastName:"rajesh",
        //  age:20,
        //  address:{
        //    street:"Jesus Nagar",
        //    city:"Pta",
        //    state:"Kerala"
        //  },
         image:"http://lorempixel.com/600/600/people/3",
         email:"alen@gmail.com",
         isActive:true,
         balance: 100,
         registered: new Date('01/01/2015 08:30:00'),
         hide:true
       },
     
     {
        firstName:"praveena",
        lastName:"rajesh",
        // age:20,
        // address:{
        //   street:"Jesus Nagar",
        //   city:"Pta",
        //   state:"Kerala"
        // },
        image:"http://lorempixel.com/600/600/people/2", 
        email:"ken@gmail.com",
        isActive:false,
        balance: 200,
        registered: new Date('01/01/2015 08:30:00'),
        hide:true
      }, 
      {
        firstName:"nimisha",
        lastName:"rajesh",
        // age:20,
        // address:{
        //   street:"Jesus Nagar",
        //   city:"Pta",
        //   state:"Kerala"
        // },
        image:"http://lorempixel.com/600/600/people/1",
        email:"jon@gmail.com",
        isActive:true,
        balance: 300,
        registered: new Date('01/01/2015 08:30:00'),
        hide:true
      }
    ];
  }
  getUsers():Observable<User[]>
  {
    return of(this.users);
  }

  addUser(user:User){
    this.users.unshift(user);
  }
}
