import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { colorPaletteOutline, logInOutline } from 'ionicons/icons';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.css'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon],
})
export class Tab1Page {

  constructor(private router: Router) {
    addIcons({logInOutline,'paletteOutline':colorPaletteOutline});
  }

  goToStyleTest() {
    this.router.navigate(['/style-test']);
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

}
