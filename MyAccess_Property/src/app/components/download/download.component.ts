import { Component, OnInit } from '@angular/core';
import jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import { ImageService } from 'src/app/_services/image.service';
@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent implements OnInit {

  constructor(public imageService:ImageService) { }

  ngOnInit(): void {
  }
  // generatePDF() {
  //   var data = document.getElementById('contentToConvert');
  //   html2canvas(data).then(canvas => {
  //     var imgWidth = 208;
  //     var imgHeight = canvas.height * imgWidth / canvas.width;
  //     const contentDataURL = canvas.toDataURL('image/png')
  //     let pdf = new jspdf('p', 'mm', 'a4');
  //     var position = 0;
  //     pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
  //     pdf.save('newPDF.pdf');
  //   });
  // }

  exportTabletoExcel(){
    const downloadLink=document.createElement('a');
    const dataType = 'application/vnd.ms-excel';
    const table = document.getElementById('contentToConvert');
    const tableHtml = table?.outerHTML.replace(/ /g, '%20');
    document.body.appendChild(downloadLink);
    downloadLink.href = 'data:' + dataType + ' ' + tableHtml ;
    downloadLink.download = 'Property.xls';
    downloadLink.click();

  }
}
