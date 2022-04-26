import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertiesComponent } from '../components/properties/properties.component';
import { PropertyMapComponent } from '../components/property-map/property-map.component';
import { PropertyTableComponent } from '../components/property-table/property-table.component';
import { PropertyBuildingReportComponent } from '../modals/property-building-report/property-building-report.component';


const routes: Routes = [

    {path: "property-map",component: PropertyMapComponent},
    {path: "my-properties",component: PropertiesComponent},
    {path: "my-properties/reports", component: PropertyBuildingReportComponent},
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class MyAccessPropertyRoutingModule { }
  