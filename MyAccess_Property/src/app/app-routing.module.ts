import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertiesComponent } from './components/properties/properties.component';
import { PropertyMapComponent } from './components/property-map/property-map.component';
import { PropertyTableComponent } from './components/property-table/property-table.component';
import { PropertyBuildingReportComponent } from './modals/property-building-report/property-building-report.component';

const routes: Routes = [
  {path: '', component:PropertiesComponent},
  {
    path:'',
    loadChildren: () =>
      import("./MyAccess-Property/MyAccess-Property.module").then((m) => m.MyAccessPropertyModule),
  },
    {path: '**', component: PropertiesComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
