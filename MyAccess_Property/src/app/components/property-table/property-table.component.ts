import { Component, OnInit } from '@angular/core';
import { PropertyService} from 'src/app/_services/property.service';
import { Property } from 'src/app/_models/property';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { Route, Router } from '@angular/router';
import { ImageService } from 'src/app/_services/image.service';


@Component({
  selector: 'app-property-table',
  templateUrl: './property-table.component.html',
  styleUrls: ['./property-table.component.css']
})
export class PropertyTableComponent implements OnInit {
  propertyInfo!: Property[];
  combinedadd!: string;
  tenantshow: boolean= false;
  constructor(private propertyService:PropertyService , private router:Router, public imageService:ImageService) { } 

  ngOnInit(): void {
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
  
  tenantlogshow(){
    this.tenantshow=!this.tenantshow;
    
  }

  routeReport(){ 
      this.router.navigate(['my-properties/reports']);
      
    }
  }


  // chunksize: 4 | undefined;
  //  groups = this.propertyInfo.map((x,index)=>{
  //     return index % this.chunksize===0 ? this.property.slice(index, index + this.chunksize): null;
  //  })


