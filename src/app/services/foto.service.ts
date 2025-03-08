import { Injectable } from '@angular/core';
import {Camera, CameraPhoto, CameraResultType, CameraSource, Photo} from '@capacitor/camera'
import {Filesystem, Directory} from '@capacitor/filesystem'
// import {Storage} from '@capacitor/storage'
import { Preferences } from '@capacitor/preferences'; //Storage ya no funciona y parece que este es el reemplazo
import { Foto } from "../models/foto.interface"

@Injectable({
  providedIn: 'root'
})
export class FotoService {
  //Arreglo para almacenar Fotos
  public fotos: Foto[] = [];

  constructor() { }

  public async addNewToGallery(){
    //Proceso para tomar una foto
    const fotoCapturada = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    })

    this.fotos.unshift({
      filepath: "foto_",
      webviewPath: fotoCapturada.webPath ?? '', // Si es undefined, asigna una cadena vacía
    })
  }

  public async savePicture(cameraPhoto: CameraPhoto){
    
  }
}
