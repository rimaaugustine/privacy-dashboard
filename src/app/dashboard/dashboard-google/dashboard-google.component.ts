import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-google',
  templateUrl: './dashboard-google.component.html',
  styleUrls: ['./dashboard-google.component.css']
})
export class DashboardGoogleComponent implements OnInit {
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

  constructor() { }

  ngOnInit() {
  }

}
