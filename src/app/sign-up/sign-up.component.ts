import { Component, OnInit } from '@angular/core';
import { Users } from '../models/user';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  user: Users = {
    userId:0,
    userName: '',
    userPass:'',
    email: '',
    userRole:''
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = ''

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.authService.register(this.user)
    .subscribe(
      response => {
        console.log(response);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      }
    );
  }

}
