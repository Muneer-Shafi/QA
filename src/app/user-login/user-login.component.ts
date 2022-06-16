import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../shared/api.service';
import { loginData } from './login.model';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  loginForm!:FormGroup;
  userForm!:FormGroup;
  loginmodelobj :loginData=new loginData


  constructor(private  formBuilder:FormBuilder,private router:Router, private api: ApiService) { }

  ngOnInit(): void {

    this.loginForm =this.formBuilder.group({
      email:['',[Validators.required]],
      password:['',[Validators.required]],
    })
    this.userForm =this.formBuilder.group({
      name:['',[Validators.required]],
     
    })
  }
  get email (){ return this.loginForm.get('email')}
  get password (){ return this.loginForm.get('password')}
  get name (){ return this.userForm.get('name')}
  logIn(){
    
    this.loginmodelobj.email=this.loginForm.value.email
    this.loginmodelobj.password=this.loginForm.value.password
    this.router.navigate(['./home'])
  }
  test(){
    this.router.navigate(['./test'])
    this.api.getTest().subscribe
    
  }
  displayStyle = "none";

  openPopup() {
    console.log('working')
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }

}
