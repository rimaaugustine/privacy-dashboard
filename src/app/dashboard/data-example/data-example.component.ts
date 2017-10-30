import { Component, OnInit } from '@angular/core';
import {MessagesService} from '../../services/messages.service';
import {FacebookService} from '../../services/facebook.service';
import {ConsentsService} from '../../services/consents.service';

@Component({
  selector: 'app-data-example',
  templateUrl: './data-example.component.html',
  styleUrls: ['./data-example.component.css']
})

// @Injectable()
//
//
// //try the Object mapper library
//
// class EventFb {
//   private id: number = undefined;
//   private name: string = undefined;
//   private description: string = undefined;
//   private date: string = undefined;
//   private status: string = undefined;
// }
// let json = {
//   'id': 1,
//   'name' : 'supri',
//   'description': 'asasasasas',
//   'date' : '6/11/2016', // Sat Dec 31, 2016
//   'status': 'going'
// };

// let testInstance: EventFb = ObjectMapper.deserialize(EventFb, json);
// console.log(testInstance);




export class DataExampleComponent implements OnInit {


  selectedTab: 0;


  selected = [];

  //message
  columns: any[] = [
    { prop: 'ID', width: 50 },
    { prop: 'Date', width: 100 },
    { prop: 'From' , width: 100},
    { prop: 'Subject', width: 300},
    { prop: 'Category', width: 170 }
  ];
  rows = [];
  //changerequesttable
  columnsCR: any[] = [
    { prop: 'Request No', width: 100 },
    { prop: 'Date', width: 100 },
    { prop: 'Subject' , width: 300},
    { prop: 'Category', width: 200},
    { prop: 'Action', width: 100 },
    { prop: 'Status', width: 100 }
  ];
  changes=[];


  //consentstable

  consents=[];



  event: any;
  eventStatuses : string[];

  public doughnutChartData:number[] = [350, 450, 100];
  public doughnutChartType:string = 'doughnut';

  public pieChartLabels:string[]= ["Status", "Photo", "Share Post", "Video"];
  public pieChartData:number[] = [350, 450, 200, 300];
  public pieChartType:string = 'pie';

  public pieChartLabels2:string[]= ["Check-ins", "GPS", "Friends's location", "Profile Data"];
  public pieChartData2:number[] = [60, 100, 200, 10];
  public pieChartType2:string = 'pie';

  constructor(private messagesService: MessagesService, private FacebookService: FacebookService,
              private ConsentService: ConsentsService) { }

  ngOnInit() {
    this.getFacebookMessages();
    this.getEvents();
    this.getChangeRequests();
    this.getConsents();

    // Or just do this:
    // this.messagesService.getFacebookMessages().subscribe(data => {
    //   console.log(data);
    //   this.messages = data;
    // });
  }

  getFacebookMessages() {
    this.messagesService.getFacebookMessages().subscribe(data => {
      console.log(data);
      this.rows = data;
    });
  }

  getChangeRequests() {
    this.FacebookService.getChangeRequests().subscribe(data => {
      console.log(data);
      this.changes = data;
    });
  }

  getConsents() {
    this.ConsentService.getAllConsents().subscribe(data => {
      console.log(data);
      this.consents = data;
    });
  }



  getEvents(){
    this.FacebookService.getEvents().subscribe(data => {
      console.log(data);
      this.event = data;
      this.eventStatuses = [];
      for(let i = 0; i < data.length; i++) {
        if(!this.eventStatuses.includes(data[i].Status)) {
          console.log(data[i].Status);
          this.eventStatuses.push(data[i].Status);
        }
      }
      console.log(this.eventStatuses);
    });
  }


  //table - message
  onSelect({ selected }) {
    console.log('Select Event', selected, this.selected);
  }

  onActivate(event) {
    console.log('Activate Event', event);
  }

  updateRowPosition() {
    const ix = this.getSelectedIx();
    const arr = [ ...this.rows ];
    arr[ix - 1] = this.rows[ix];
    arr[ix] = this.rows[ix - 1];
    this.rows = arr;
  }

  getSelectedIx() {
    return this.selected[0]['$$index'];
  }

//BarChart
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = ['ads count'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;

  public barChartData:any[] = [
    {data: [65], label: '2016'},
    {data: [38], label: '2017 (YTD)'}
  ];

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);

  }


  //linechart

  public lineChartData:Array<any> = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Post'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Friendship'},

  ];
  public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions:any = {
    responsive: true
  }
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';

  // barChartLocation
  public barChartOptions2:any = {
    responsive: true
  };
  public barChartLabels2:string[] = ['Country Data'];
  public barChartType2:string = 'bar';
  public barChartLegend2:boolean = true;

  public barChartData2:any[] = [
    {data: [65], label: 'Germany'},
    {data: [20], label: 'Netherlands'},
    {data: [4], label: 'USA'},
    {data: [38], label: 'Afghanistan'},
    {data: [50], label: 'Indonesia'},
    {data: [20], label: 'Australia'}

  ];



}
