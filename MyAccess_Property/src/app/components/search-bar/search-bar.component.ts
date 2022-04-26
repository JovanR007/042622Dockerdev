import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/_services/image.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  constructor(public imageService:ImageService) { }

  ngOnInit(): void {
  }

}
