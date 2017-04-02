import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Details } from '../entity/details'

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  id: Number;
  details;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id']
    });
    this.details = Details.find(obj => obj.id == this.id);
    console.log(this.details.received)
  }

  //
  public lineChartData: Array<any> = [
    { data: [10, 4, 6, 8, 3, 4, 2, 5, 6, 10], label: 'Crossword' },
    { data: [4, 12, 5, 11, 14, 9, 6, 3, 5, 7], label: 'Bingo' }
  ];
  public lineChartLabels: Array<any> = ['2017-04-01', '2017-04-02', '2017-04-03', '2017-04-04', '2017-04-05'
    , '2017-04-06', '2017-04-07', '2017-04-08', '2017-04-09', '2017-04-10'];
  public lineChartOptions: any = {
    responsive: true
  };
  public lineChartColors: Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    }
  ];
  public lineChartLegend: boolean = true;
  public lineChartType: string = 'line';
  //
  // Doughnut
  public doughnutChartLabels: string[] = ['Received Package', 'Sold Package', 'Remaining Package'];
  public doughnutChartData: number[] = [399, 371, 28];
  public doughnutChartType: string = 'doughnut';
}
