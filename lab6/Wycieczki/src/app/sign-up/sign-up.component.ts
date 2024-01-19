import { Component} from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from 'firebase/auth';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  users: User[] = [];

  constructor(private authService: AuthService) { }

  signUp(data: any) {
    this.authService.signUp(data.email, data.password);
  }
}
