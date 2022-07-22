import { Component, OnInit,ElementRef, ViewChild  } from '@angular/core';
import { MechefService } from '../services/mechef.service';
import { OrderService } from '../services/order.service';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-cheforder',
  templateUrl: './cheforder.component.html',
  styleUrls: ['./cheforder.component.scss']
})
export class CheforderComponent implements OnInit {
  cheforder:any;
  chefsorders:any;
  orderId:number = 1;
  @ViewChild('invoice') invoiceElement!: ElementRef;

  aze = ["5","10","20"];
  pdfSrc:string = "";
  constructor(private chefService:MechefService,private Orderservice:OrderService,private route:ActivatedRoute) { }

  ngOnInit(): void {

    if(localStorage.getItem("token")){

      this.route.params
            .subscribe(
                (params: Params) => {
                    this.orderId = +params['id'];
                  

                   
                    this.getOrderById(params['id']);

                    this.pdfSrc="http://localhost:8080/api/chef/pdfreport/" + params["id"];

                }
            );
      
    }
  }


  getchefservice(){
    this.chefService.getAllorder().subscribe(
      res =>{
           this.cheforder=res;
         
      })
}

getChefOrderService(){
  this.Orderservice.getAllorderfetching().subscribe(res=>{
    this.chefsorders=res;


  })

      
}


getOrderById(id:number){

     this.Orderservice.getOrderById(id).subscribe(res=>{

        this.chefsorders = res;
     })
}



confimremOrder(id:number ){

  this.Orderservice.deleteOrderbyId(id).subscribe(res=>{

    console.log("deleted");
    window.location.reload();
  })
}

showToasterSuccess(){
  this.chefService.showSuccess("Data shown successfully !!", "yummy.com")
}

showToasterError(){
  this.chefService.showError("Something is wrong", "yummy.com")
}


public generatePDF(): void {

  html2canvas(this.invoiceElement.nativeElement, { scale: 3 }).then((canvas) => {
    const imageGeneratedFromTemplate = canvas.toDataURL('image/png');
    const fileWidth = 200;
    const generatedImageHeight = (canvas.height * fileWidth) / canvas.width;
    let PDF = new jsPDF('p', 'mm', 'a4',);
    PDF.addImage(imageGeneratedFromTemplate, 'PNG', 0, 5, fileWidth, generatedImageHeight,);
    PDF.html(this.invoiceElement.nativeElement.innerHTML)
    PDF.save('angular-invoice-pdf-demo.pdf');
  });
}
}
