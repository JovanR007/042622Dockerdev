import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor() { }

  public getImageBaseUrl(): string {
    if (environment.production) {
      return "http://someurl.com/assets/";
    } else {
      return "http://localhost:3004/assets/";
    }
  }
}
