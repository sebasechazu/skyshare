import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonContent,
  IonButton,
  IonIcon,
  IonInput,
  IonTextarea,
  IonCard,
  IonItem
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  sunnyOutline,
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
    IonCard,
    IonItem
  ]
})
export class StyleTestComponent implements OnInit {

  isDark = false;

  constructor() {
    // Registrar iconos
    addIcons({
      'sunny-outline': sunnyOutline,
      'moon-outline': moonOutline,
      'refresh-outline': refreshOutline,
      'checkmark-outline': checkmarkOutline,
      'bookmark-outline': bookmarkOutline,
      'trash-outline': trashOutline,
      'cloud-upload-outline': cloudUploadOutline,
      'heart-outline': heartOutline,
      'lock-closed-outline': lockClosedOutline,
      'document-text-outline': documentTextOutline,
      'download-outline': downloadOutline,
      'share-outline': shareOutline,
      'mail-outline': mailOutline,
      'location-outline': locationOutline,
      'arrow-up-outline': arrowUpOutline,
      'checkmark-circle-outline': checkmarkCircleOutline,
      'warning-outline': warningOutline,
      'close-circle-outline': closeCircleOutline,
      'information-circle-outline': informationCircleOutline,
      'image-outline': imageOutline,
      'document-outline': documentOutline,
      'folder-outline': folderOutline,
      'settings-outline': settingsOutline
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
