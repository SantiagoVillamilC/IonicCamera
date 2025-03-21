import { Component } from '@angular/core';
import { FotoService } from '../services/foto.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {

  constructor(public fotoService: FotoService) {}

  // Método que llama al servicio cuando se hace clic en el botón
  addPhotoToGallery(){
    this.fotoService.addNewToGallery()
  }


  async ngOnInit(){
    await this.fotoService.loadSaved()
  }

}
