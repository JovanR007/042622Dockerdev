import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {jsPDF} from 'jspdf';
import domtoimage from 'dom-to-image';
import * as html2pdf from 'html2pdf.js';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import WebViewer from '@pdftron/webviewer';
import { Router } from '@angular/router';
import { ImageService } from 'src/app/_services/image.service';
@Component({
  selector: 'app-property-building-report',
  templateUrl: './property-building-report.component.html',
  styleUrls: ['./property-building-report.component.css']
})
export class PropertyBuildingReportComponent implements AfterViewInit {
@ViewChild('viewer') viewerRef: ElementRef;
closeResult = '';
constructor(private modalService: NgbModal, private router:Router, public imageService:ImageService){}
ngAfterViewInit(): void {
  WebViewer({
    path: 'http://localhost:3004/assets/lib',
    initialDoc: 'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf'
  }, this.viewerRef.nativeElement).then(instance => {

  });
}

open(content: any) {
  this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
  });
}

routeProp(){
  this.router.navigate(['my-properties']);
}
}
