import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MyAccessPropertyRoutingModule } from './MyAccess-Property.routing.module';

import { PropertiesComponent } from '../components/properties/properties.component';
import { PropertyNavbarComponent } from '../components/property-navbar/property-navbar.component';
import { TempNavbarComponent } from '../components/temp-navbar/temp-navbar.component';
import { SearchBarComponent } from '../components/search-bar/search-bar.component';
import { DownloadComponent } from '../components/download/download.component';
import { PropertyTableComponent } from '../components/property-table/property-table.component';
import { PropertyListingInviteComponent } from '../modals/property-listing-invite/property-listing-invite.component';
import { PropertyMapComponent } from '../components/property-map/property-map.component';
import { TenantLogComponent } from '../modals/tenant-log/tenant-log.component';
import { PropertyBuildingReportComponent } from '../modals/property-building-report/property-building-report.component';
import {PdfViewerModule} from 'ng2-pdf-viewer';

@NgModule({
    declarations: [
      PropertyNavbarComponent,
      TempNavbarComponent,
      PropertiesComponent,
      SearchBarComponent,
      DownloadComponent,
      PropertyTableComponent,
      PropertyListingInviteComponent,
      PropertyMapComponent,
      TenantLogComponent,
      PropertyBuildingReportComponent
    ],
    imports: [
      CommonModule,
      MyAccessPropertyRoutingModule,
      FontAwesomeModule,
      PdfViewerModule,
    ],
  })
  export class MyAccessPropertyModule { }