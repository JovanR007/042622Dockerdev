import { Component, Input, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Tenant } from 'src/app/_models/tenant';
import { TENANT } from 'src/app/_data/tenant-log';
import { PropertyService } from 'src/app/_services/property.service';
import { TenantSpecific } from 'src/app/_models/tenant-specific';
import { TENANTSPEC } from 'src/app/_data/tenant-spec';
@Component({
  selector: 'app-tenant-log',
  templateUrl: './tenant-log.component.html',
  styleUrls: ['./tenant-log.component.css']
})
export class TenantLogComponent implements OnInit {
  closeResult = '';
  tenantLog!:Tenant[];
  tenantSpec!:TenantSpecific[];
  @Input('address') address:string |undefined
  @Input('city')  city:string |undefined
  @Input('zipcode') zipcode: number |undefined
  constructor(private modalService: NgbModal, public tenantlog: PropertyService, private tenantspec:PropertyService) { }
  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
 
  getLog(): void{
    this.tenantlog.getTenant().subscribe(
      (response) => { 
      this.tenantLog = response;
      
    },
    (error) => {
      console.log(error);
    }
    );
}

getTenantSpec(): void{
  this.tenantspec.getTenantSpec().subscribe(
    (response) => { 
    this.tenantSpec = response;
    
  },
  (error) => {
    console.log(error);
  }
  );
}
  ngOnInit(): void {
    this.getLog();
    this.getTenantSpec();
  }

}
