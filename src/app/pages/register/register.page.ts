import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';
import { 
  personAddOutline, 
  personOutline, 
  mailOutline, 
  lockClosedOutline, 
  logInOutline 
} from 'ionicons/icons';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.css'],
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule, RouterModule]
})
export class RegisterPage implements OnInit {

  name = '';
  email = '';
  password = '';
  confirmPassword = '';
  acceptTerms = false;

  constructor() { 
    addIcons({ 
      personAddOutline, 
      personOutline, 
      mailOutline, 
      lockClosedOutline, 
      logInOutline 
    });
  }
   
  private auth = inject(AuthService);
  private router = inject(Router);

  ngOnInit() {
  }

  handleRegister() {
  if (this.auth.register(this.email, this.password)) {
    this.router.navigate(['/tabs']);
  } else {
    alert('Error al registrarse');
  }
}


}
