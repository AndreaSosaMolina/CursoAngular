import { Component, OnInit } from '@angular/core';
import { GraficasService } from '../../services/graficas.service';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit{

  
  public doughnutChartLabels: string[] = [ 
    // 'Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'Other'
  ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [{ 
       data: [ ],
       backgroundColor: [
         '#9441FA',
         '#5F6CDE',
         '#5FDEC7',
         '#6EFF91',
         '#76C6F5'
       ]
    }],
   
  };

  public doughnutChartType: ChartType = 'doughnut';

  constructor( private graficasService: GraficasService){}

  ngOnInit(): void {
   

  this.graficasService.getUsuariosRRSSDonaData()
    .subscribe( ({labels, values}) => {
        this.doughnutChartData.labels = labels;
        this.doughnutChartData.datasets[0].data = values
    })
  }


}
 // Una forma de hacerlo
  // this.graficasService.getUsuariosRRSS()
  //   .subscribe( data => {
      
  //     const labels = Object.keys( data);
  //     const value= Object.values( data);

      
  //     this.doughnutChartData.labels = labels
  //     this.doughnutChartData.datasets[0].data = value
      
  //   })