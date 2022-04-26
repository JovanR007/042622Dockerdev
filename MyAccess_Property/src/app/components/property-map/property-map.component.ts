import { Component, OnInit, ViewChild } from '@angular/core';
import {Loader} from '@googlemaps/js-api-loader';
import { PropertyService } from 'src/app/_services/property.service';
import { Property } from 'src/app/_models/property';
import { ImageService } from 'src/app/_services/image.service';
@Component({
  selector: 'app-property-map',
  templateUrl: './property-map.component.html',
  styleUrls: ['./property-map.component.css']
})
export class PropertyMapComponent implements OnInit {
  propertyInfo!: Property[];
  constructor(private propertyService:PropertyService, public imageService:ImageService) { }

  ngOnInit(): void {
    let loader= new Loader({
      apiKey:'AIzaSyB1mUEo5LNlUuLVtm0FMugxab6hfLjyUuw'
    })

    loader.load().then(() =>{
      new google.maps.Map(document.getElementById("map"),{
        center: {lat:51.233334, lng:6.78333},
        zoom: 6
      })

    })
    this.getPropertyToList();
  }
  getPropertyToList(): void{
    this.propertyService.getProperty().subscribe(
      (response) => { 
      this.propertyInfo = response;
    },
    (error) => {
      console.log(error);
    }
    );
    
  
    
  }

}


