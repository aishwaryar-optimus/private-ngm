import { Component, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import highChartmore from 'highcharts/highcharts-more';
import Exporting from 'highcharts/modules/exporting';
import exportData from 'highcharts/modules/export-data';
import offlineExport from 'highcharts/modules/offline-exporting';
import boost from 'highcharts/modules/boost';
import noData from 'highcharts/modules/no-data-to-display';

@Component({
  selector: 'app-charting',
  templateUrl: './charting.component.html',
  styleUrls: ['./charting.component.scss']
})
export class ChartingComponent {
  @Input() chartConstructor;
  @Input() oneToOneFlag;
  @Input() chartOptions: Highcharts.Options = {};
  @Input() chartType;
  @Input() dataChange;
  @Input() id;

  Highcharts: typeof Highcharts = Highcharts; // required
  updateFlag: boolean = false; // optional boolean
  runOutsideAngularFlag: boolean = true; // optional boolean, defaults to false
  chart;
  chartCallback: Highcharts.ChartCallbackFunction = function(chart) {
    chart.showLoading();
  };

  constructor() {
    Exporting(Highcharts);
    exportData(Highcharts); //for csv, xls
    highChartmore(Highcharts); //for polar chart
    offlineExport(Highcharts);
    boost(Highcharts);
    noData(Highcharts);
  }
}
