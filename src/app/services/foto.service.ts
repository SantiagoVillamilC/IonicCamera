import { Injectable } from '@angular/core';
import {Camera, CameraResultType, CameraSource, Photo} from '@capacitor/camera'
import {Filesystem, Directory} from '@capacitor/filesystem'
// import {Storage} from '@capacitor/storage'
import { Preferences } from '@capacitor/preferences'; //Storage ya no funciona y parece que este es el reemplazo

@Injectable({
  providedIn: 'root'
})
export class FotoService {

  constructor() { }

  public async addNewToGallery(){
    //Proceso para tomar una foto
    const fotoCapturada = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    })
  }
}
