import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UnsplashResponse } from './unsplash-response';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private http:HttpClient) { }

  getPhoto():Observable<UnsplashResponse>{
    return this.http.get<UnsplashResponse>('https://api.unsplash.com/photos/random',
    {
      headers:{
        Authorization:'Client-ID HcE2Kzd6gMfgScgzvXDHAhcPDW1ZO80wSyJyuizuxF4'
      }
    })
  }




}
