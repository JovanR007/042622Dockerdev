import { Component, Input, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Role } from 'src/app/_models/role';
import { PropertyService } from 'src/app/_services/property.service';
@Component({
  selector: 'app-property-listing-invite',
  templateUrl: './property-listing-invite.component.html',
  styleUrls: ['./property-listing-invite.component.css']
})
export class PropertyListingInviteComponent implements OnInit{
  @Input('address') address:string |undefined
  @Input('city')  city:string |undefined
  @Input('zipcode') zipcode: number |undefined
  closeResult = '';
  roleInfo!:Role[];
  
  constructor(private modalService: NgbModal, private role: PropertyService) {}

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

  getRole(): void{
    this.role.getRole().subscribe(
      (response) => { 
      this.roleInfo = response;
    },
    (error) => {
      console.log(error);
    }
    );
}

ngOnInit(): void {
  this.getRole();
}
}
