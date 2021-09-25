import { Component } from '@angular/core';
import { CameraService } from '../services/camera.service';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  imageUrl: string;
  constructor(public cameraService: CameraService) {}

  addPhotoToGallery() {
    this.cameraService.takePicture();
  }

  public async takePicture() {
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });
    
    this.imageUrl = capturedPhoto.webPath;
  }

  async ngOnInit() {
    await this.cameraService.loadSaved();
  }

}
