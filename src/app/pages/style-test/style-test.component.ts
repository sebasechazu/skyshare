import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonContent,
  IonButton,
  IonIcon,
  IonInput,
  IonTextarea,
  IonTabButton,
  IonTabBar,
  //IonTabs,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  sunnyOutline,
  homeOutline,
  personOutline,
  moonOutline,
  refreshOutline,
  checkmarkOutline,
  bookmarkOutline,
  trashOutline,
  cloudUploadOutline,
  heartOutline,
  lockClosedOutline,
  documentTextOutline,
  downloadOutline,
  shareOutline,
  mailOutline,
  locationOutline,
  arrowUpOutline,
  checkmarkCircleOutline,
  warningOutline,
  closeCircleOutline,
  informationCircleOutline,
  imageOutline,
  documentOutline,
  folderOutline,
  settingsOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-style-test',
  templateUrl: './style-test.component.html',
  imports: [
    CommonModule,
    IonContent,
    IonButton,
    IonIcon,
    IonInput,
    IonTextarea,
    IonTabButton,
    IonTabBar,
    //IonTabs,
  ]
})
export class StyleTestComponent implements OnInit {

  isDark = false;

  constructor() {
 
    addIcons({
      sunnyOutline,
      moonOutline,
      homeOutline,
      personOutline,
      refreshOutline,
      checkmarkOutline,
      bookmarkOutline,
      trashOutline,
      cloudUploadOutline,
      heartOutline,
      lockClosedOutline,
      documentTextOutline,
      downloadOutline,
      shareOutline,
      mailOutline,
      locationOutline,
      arrowUpOutline,
      checkmarkCircleOutline,
      warningOutline,
      closeCircleOutline,
      informationCircleOutline,
      imageOutline,
      documentOutline,
      folderOutline,
      settingsOutline
    });
  }

  ngOnInit() {
    // Verificar preferencia guardada o usar preferencia del sistema
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme) {
      this.isDark = savedTheme === 'dark';
    } else {
      // Si no hay preferencia guardada, usar la del sistema
      this.isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    
    this.applyTheme();
    
    // Escuchar cambios en la preferencia del sistema
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      // Solo cambiar si no hay preferencia explícita del usuario
      if (!localStorage.getItem('theme')) {
        this.isDark = e.matches;
        this.applyTheme();
      }
    });
  }

  toggleTheme() {
    this.isDark = !this.isDark;
    this.applyTheme();
  }

  private applyTheme() {
    const html = document.documentElement;
    const body = document.body;
    
    if (this.isDark) {
      html.classList.add('dark');
      body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      html.classList.remove('dark');
      body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }
}
