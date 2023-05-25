import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../photos.service';

@Component({
  selector: 'app-photo-show',
  templateUrl: './photo-show.component.html',
  styleUrls: ['./photo-show.component.css']
})
export class PhotoShowComponent implements OnInit {

  image:string='';

  constructor(private service:PhotosService){

  }
  ngOnInit(): void {
   this.fetchPhoto();
  }

  newPhoto(){
    this.fetchPhoto();
  }

  fetchPhoto(){
    this.service.getPhoto().subscribe(res=>this.image=res.urls.regular);
  }
}
