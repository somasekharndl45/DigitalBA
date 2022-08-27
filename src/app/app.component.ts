import { Component } from '@angular/core';
import { TokenStorageService } from './services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Digital Books'
  bookLogo = 'assets/Images/firstimage.jpg'

  private role: string = '';
  isLoggedIn = false;
  username: string | null = ''
  showAuthorBoard = false
  showReaderBoard = false
  logo = 'assets/Images/firstimage.jpg'
  logoWidth = 30
  logoMargin = 2

  constructor(private tokenStorageService: TokenStorageService ) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn)
    {
      const role = this.tokenStorageService.getRole()  
      const user = this.tokenStorageService.getUser() 
      if(role == 'Author')
        this.showAuthorBoard = true          
      else
        this.showReaderBoard = true 
      this.username = user
    }
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
