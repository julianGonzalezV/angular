import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dona-chart',
  templateUrl: './dona-chart.component.html',
  styleUrls: ['./dona-chart.component.css']
})
export class DonaChartComponent {

   // Doughnut
   public doughnutChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
   public doughnutChartData:number[] = [350, 450, 100];
   public doughnutChartType:string = 'doughnut';
  
   // events
   public chartClicked(e:any):void {
     console.log(e);
   }
  
   public chartHovered(e:any):void {
     console.log(e);
   }

   public randomChart() {
    this.doughnutChartData = [
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100
    ];
   }
}
