import { Component } from '@angular/core';

@Component({
  selector: 'app-site-summary',
  templateUrl: './site-summary.component.html',
  styleUrls: ['./site-summary.component.scss']
})
export class SiteSummaryComponent {
  oneToOneFlag = true;
  chartOptionsOne;
  chartOptionsTwo;
  chartOptionsThree;
  chartType = 'line';
  dataChange = null;
  constructor() {
    this.loadFirstchartData();
    this.loadSecondachartData();
    this.loadThirdchartData();
  }

  //Function to render Line Chart
  loadFirstchartData() {
    this.chartOptionsOne = {
      chart: {
        backgroundColor: '#eeeeee',
        type: 'line',
        zoomType: 'xy',
        events: {
          exportData: function(data) {
            // console.log(data.dataRows);
          },
          render: function() {
            this.hideLoading();
          }
        }
      },
      credits: {
        enabled: false
      },
      loading: {},
      noData: {
        position: {
          align: 'center'
        },
        style: {
          fontWeight: 'bold',
          fontSize: '16px',
          color: 'green'
        }
      },
      lang: {
        noData: 'This is displaying due to no data, we can modify it'
      },
      tooltip: {
        backgroundColor: '#FCFFC5',
        borderColor: 'white',
        borderRadius: 10,
        borderWidth: 3
      },
      responsive: {
        rules: [
          {
            condition: {
              maxWidth: 375
            },

            chartOptions: {
              legend: {
                enabled: false
              },
              xAxis: {
                labels: {
                  formatter: function() {
                    return this.value.charAt(0);
                  }
                }
              },
              yAxis: {
                labels: {
                  align: 'left',
                  x: 0,
                  y: -2
                },
                title: {
                  text: ''
                }
              }
            }
          }
        ]
      },
      exporting: {
        enabled: true,
        sourceHeight: 720,
        sourceWidth: 1280,
        scale: 1,
        filename: 'nrg_line_' + new Date().toLocaleDateString(),
        fallbackToExportServer: true,
        libURL: 'assets/js',
        error: function() {
          alert('Not able to download');
        }
      },
      title: false,
      subtitle: false,
      xAxis: {
        categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec'
        ]
      },
      yAxis: {
        title: {
          text: 'Temperature (°C)'
        }
      },
      plotOptions: {
        line: {
          dataLabels: {
            enabled: true
          },
          enableMouseTracking: true
        }
      },
      series: [
        {
          name: 'Site 1',
          type: 'line',
          data: [
            7.0,
            6.9,
            9.5,
            14.5,
            18.4,
            21.5,
            25.2,
            26.5,
            23.3,
            18.3,
            13.9,
            9.6
          ]
        },
        {
          name: 'Site 2',
          type: 'line',
          data: [
            3.9,
            4.2,
            5.7,
            8.5,
            11.9,
            15.2,
            17.0,
            16.6,
            14.2,
            10.3,
            6.6,
            4.8
          ]
        }
      ]
    };
  }

  //Function to render Polar Chart
  loadSecondachartData() {
    this.chartOptionsTwo = {
      chart: {
        backgroundColor: '#eeeeee',
        polar: true,
        events: {
          exportData: function(data1) {
            // console.log(data1.dataRows);
          },
          render: function() {
            this.hideLoading();
          }
        }
      },
      credits: {
        enabled: false
      },
      loading: {},
      noData: {
        position: {
          align: 'center'
        },
        style: {
          fontWeight: 'bold',
          fontSize: '16px',
          color: 'green'
        }
      },
      lang: {
        noData: 'This is displaying due to no data, we can modify it'
      },
      title: true,
      subtitle: false,
      pane: {
        startAngle: 0,
        endAngle: 360
      },
      exporting: {
        enabled: true,
        sourceHeight: 720,
        sourceWidth: 1280,
        scale: 1,
        filename: 'nrg_polar_' + new Date().toLocaleDateString(),
        fallbackToExportServer: true,
        libURL: 'assets/js',
        error: function() {
          alert('Not able to download');
        }
      },
      xAxis: {
        tickInterval: 45,
        min: 0,
        max: 360,
        labels: {
          formatter: function() {
            return this.value + '%';
          },
          format: '{value}°'
        }
      },

      yAxis: {
        min: 0
      },

      plotOptions: {
        series: {
          pointStart: 0,
          pointInterval: 45
        },
        column: {
          pointPadding: 0,
          groupPadding: 0
        }
      },

      tooltip: {
        valueSuffix: '%'
      },

      series: [
        {
          type: 'column',
          name: 'Column',
          data: [8, 7, 6, 5, 4, 3, 2, 1],
          pointPlacement: 'between'
        },
        {
          type: 'area',
          name: 'Area',
          data: [1, 2, 3, 4, 5, 6, 7, 8]
        },
        {
          type: 'area',
          name: 'Area',
          data: [1, 8, 2, 7, 3, 6, 4, 5]
        }
      ]
    };
  }

  //Function to render Area Chart
  loadThirdchartData() {
      this.chartOptionsThree = {
        chart: {
          type: 'area',
          backgroundColor: '#eeeeee',
          zoomType: 'xy',
          events: {
            exportData: function(data1) {
              // console.log(data1.dataRows);
            },
            render: function() {
              this.hideLoading();
            }
          }
        },
        credits: {
          enabled: false
        },
        accessibility: {
          description: 'Image description: An area chart compares the nuclear stockpiles of the USA and the USSR/Russia between 1945 and 2017. The number of nuclear weapons is plotted on the Y-axis and the years on the X-axis. The chart is interactive, and the year-on-year stockpile levels can be traced for each country. The US has a stockpile of 6 nuclear weapons at the dawn of the nuclear age in 1945. This number has gradually increased to 369 by 1950 when the USSR enters the arms race with 6 weapons. At this point, the US starts to rapidly build its stockpile culminating in 32,040 warheads by 1966 compared to the USSR’s 7,089. From this peak in 1966, the US stockpile gradually decreases as the USSR’s stockpile expands. By 1978 the USSR has closed the nuclear gap at 25,393. The USSR stockpile continues to grow until it reaches a peak of 45,000 in 1986 compared to the US arsenal of 24,401. From 1986, the nuclear stockpiles of both countries start to fall. By 2000, the numbers have fallen to 10,577 and 21,000 for the US and Russia, respectively. The decreases continue until 2017 at which point the US holds 4,018 weapons compared to Russia’s 4,500.'
        },
        title: false,
        subtitle: false,
        xAxis: {
          allowDecimals: false,
          labels: {
            formatter: function () {
              return this.value; // clean, unformatted number for year
            }
          },
          accessibility: {
            rangeDescription: 'Range: 1940 to 2017.'
          }
        },
        yAxis: {
          title: {
            text: 'Nuclear weapon states'
          },
          labels: {
            formatter: function () {
              return this.value / 1000 + 'k';
            }
          }
        },
        tooltip: {
          pointFormat: '{series.name} had stockpiled <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
        },
        plotOptions: {
          area: {
            pointStart: 1940,
            marker: {
              enabled: false,
              symbol: 'circle',
              radius: 2,
              states: {
                hover: {
                  enabled: true
                }
              }
            }
          }
        },
        series: [{
          name: 'USA',
          data: [
            null, null, null, null, null, 6, 11, 32, 110, 235,
            369, 640, 1005, 1436, 2063, 3057, 4618, 6444, 9822, 15468,
            20434, 24126, 27387, 29459, 31056, 31982, 32040, 31233, 29224, 27342,
            26662, 26956, 27912, 28999, 28965, 27826, 25579, 25722, 24826, 24605,
            24304, 23464, 23708, 24099, 24357, 24237, 24401, 24344, 23586, 22380,
            21004, 17287, 14747, 13076, 12555, 12144, 11009, 10950, 10871, 10824,
            10577, 10527, 10475, 10421, 10358, 10295, 10104, 9914, 9620, 9326,
            5113, 5113, 4954, 4804, 4761, 4717, 4368, 4018
          ]
        }, {
          name: 'USSR/Russia',
          data: [null, null, null, null, null, null, null, null, null, null,
            5, 25, 50, 120, 150, 200, 426, 660, 869, 1060,
            1605, 2471, 3322, 4238, 5221, 6129, 7089, 8339, 9399, 10538,
            11643, 13092, 14478, 15915, 17385, 19055, 21205, 23044, 25393, 27935,
            30062, 32049, 33952, 35804, 37431, 39197, 45000, 43000, 41000, 39000,
            37000, 35000, 33000, 31000, 29000, 27000, 25000, 24000, 23000, 22000,
            21000, 20000, 19000, 18000, 18000, 17000, 16000, 15537, 14162, 12787,
            12600, 11400, 5500, 4512, 4502, 4502, 4500, 4500
          ]
        }]
      }
  }
}
