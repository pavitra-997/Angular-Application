import { Component, OnInit,ViewChild } from '@angular/core';
import{User} from "../../models/User"
import {NgForm} from '@angular/forms'
import {  UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: User=
    {
      firstName:"",
      lastName:"",
      email:'',
    }
  users: User[]=[]
  showExtended:boolean=false;
  loaded:boolean=false;
  enableAdd:boolean=true
  currentClasses={}
  currentStyles={}
  showUserForm:boolean=true
  @ViewChild('userForm') form:any;

  constructor(private userService:UserService) 
  {
   this.userService.getUsers().subscribe(users=>{
     this.users=users;
     this.loaded=true;
   })
  }

  ngOnInit() 
  {
     this.setCurrentClasses();
     this.setCurrentStyles();
  }
  
  // addUser()
  // {
  //    this.users.unshift(this.user)
  //    console.log(this.users);

  //    this.user={
  //     firstName:"",
  //     lastName:"",
    
  //    }
  // }
  setCurrentClasses()
  {
    this.currentClasses=
    {
      "btn-success":this.enableAdd,
      "big-text":this.showExtended
    }
  }

  onSubmit({value,valid} :NgForm){
    if(!valid){
      console.log("invalid")
    }
    else{
      value.isActive=true;
      value.registered=new Date();
      value.hide=true
     this.userService.addUser(value);
      this.form.reset();
    }
  }

  setCurrentStyles(){
    this.currentStyles={
      'padding-top':this.showExtended ? '0':'40px'
    }
  }
  toggleHide(user:User){
    user.hide=!user.hide

  }
 
fireEvent(e:any){
     console.log(e.target.value);
     console.log(e.type);
  }
}



 // setTimeout(()=>{
    // } ,2000)
    //   this.addUser( {
    //     firstName:"Nirmal",
    //     lastName:"rajesh"
    //  })

     // onSubmit(e:any){
  //   console.log(123);
  //   e.preventDefault();
  // }