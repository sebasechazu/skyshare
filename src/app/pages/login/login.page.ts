import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';
import { 
  cloudUploadOutline, 
  mailOutline, 
  lockClosedOutline, 
  logInOutline, 
  personAddOutline 
} from 'ionicons/icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.css'],
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule, RouterModule]
})
export class LoginPage implements OnInit {

  email = '';
  password = '';

  

  constructor(private auth: AuthService, private router: Router) {
    addIcons({ 
      cloudUploadOutline, 
      mailOutline, 
      lockClosedOutline, 
      logInOutline, 
      personAddOutline 
    });
  }

  ngOnInit() {
  }


  handleLogin() {
    if (this.auth.login(this.email, this.password)) {
      this.router.navigate(['/tabs']);
    } else {
      alert('Credenciales inválidas');
    }
  }

}
