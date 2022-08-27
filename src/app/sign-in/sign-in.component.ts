import { Component, OnInit } from '@angular/core';
import { Credentials } from '../models/credential';
import { TokenModel } from '../models/tokenmodel';
import { AuthService } from '../services/auth.service';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  title = 'Sign in';

  cred : Credentials = {
    userName : '',
    password : ''
  };

  isLoggedIn = false;
  isLoginFailed = false;
  isAuthor = false;
  isReader =  false;
  errorMessage = '';
  userRole: string | null = ''
  token: string | null = ''

  constructor(private authService: AuthService, 
    private tokenStorage: TokenStorageService) {}

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.userRole = this.tokenStorage.getRole();
      console.log(this.userRole)
      this.token =  this.tokenStorage.getToken();
    }
    if(this.userRole == 'Author'){
        this.isAuthor = true
    }    
    else if(this.userRole == 'Reader'){
      this.isReader = true
    } 
  }

  onSubmit() {
    if(this.cred.userName != '' && this.cred.password != '')
    {
      this.authService.login(this.cred).subscribe(
        response => {
          console.log(response)
          this.tokenStorage.saveToken(response.token);
          this.tokenStorage.saveRole(response.role);
          this.tokenStorage.saveUser(this.cred.userName)
          this.isLoginFailed = false;
          this.isLoggedIn = true;
          this.reloadPage();
        }
      );  
    }
    else
    {
      this.errorMessage = "User name & password is required"
    }
  }  

  reloadPage(): void {
    window.location.reload();
  }

}
