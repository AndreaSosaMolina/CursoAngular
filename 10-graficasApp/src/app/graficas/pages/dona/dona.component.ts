import { Component } from '@angular/core';
import { ChartData, ChartType, Color } from 'chart.js';
import { ChartEvent } from 'chart.js/dist/core/core.plugins';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {

  public doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'Other'];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [{ 
      data: [ 350, 450, 200, 280 ],
      backgroundColor: [
        '#9441FA',
        '#5F6CDE',
        '#5FDEC7',
        '#6EFF91'
    
      ]
    }],
   
  };

  public doughnutChartType: ChartType = 'doughnut';
 

 
}
