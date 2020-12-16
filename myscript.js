var cal = new CalHeatMap();
cal.init({
    label: {
        height:30
    },
    itemSelector: "#cal-heatmap",
    domain: "month",
    subDomain: "day",
    cellSize: 50,
    tooltip:true,
    range: 2,
    displayLegend: true,
    data: 'aqiData.json',
    start: new Date(2020,1,1),
    colLimit: 8,
    domainGutter: 10,
    legendCellSize: 20,
    legendColors: ["#92C95B","#A22828"],
    legend: [31,40,50],
    itemName: ["AQI"],
    
})

Highcharts.chart('container', {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie',
      backgroundColor: 'rgba(0,0,0,0)'
    },
    title: {
      text: 'Greenhouse Gas Emissions by Economic Sector 2018'
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
      point: {
        valueSuffix: '%'
      }
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %'
        }
      },
        series:{
            dataLabels:{
                style: {
                    fontSize: "18px",
                }
            }
        }
    },
    series: [{
      name: 'Sector',
      colorByPoint: true,
      data: [{
        name: 'Transportation',
        y: 28,
        sliced: true,
        selected: true
      }, {
        name: 'Electricity',
        y: 27
      }, {
        name: 'Industry ',
        y: 22
      }, {
        name: 'Commercial & Residential',
        y: 12 
      }, {
        name:'Agriculture',
        y: 10
      }]
    }]
  });

  Highcharts.chart('bar-container', {
    chart: {
        zoomType: 'xy',
        backgroundColor: 'rgba(0,0,0,0)'
    },
    title: {
        text: 'Percent of Public Transportation by City'
    },
    subtitle: {
        text: 'Source: Wikipedia.com'
    },
    xAxis: [{
        categories: [
            'NY',
            'W. DC',
            'SF',
            'Boston',
            'Chicago',
            'LA'
        ],
        crosshair: true
    }],
    yAxis: [{ // Secondary yAxis
        title: {
            text: 'City Land Area',
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        },
        labels: {
            format: '{value}mi²',
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        }},
        { // Primary yAxis
        labels: {
            format: '{value}%',
            style: {
                color: Highcharts.getOptions().colors[0]
            }
        },
        title: {
            text: 'Percent Public Transportation',
            style: {
                color: Highcharts.getOptions().colors[0]
            }
        },
        opposite: true
    }
        
    ],
    tooltip: {
        shared: true
    },
    legend: {
        layout: 'vertical',
        align: 'left',
        x: 120,
        verticalAlign: 'top',
        y: 100,
        floating: true,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || // theme
            'rgba(255,255,255,0.25)'
    },
    series: [{
        name: 'Percent Commuters',
        type: 'column',
        yAxis: 1,
        data: [55,36,33,31,27,11],

    }, {
        name: 'City Land Area',
        type: 'column',
        data: [302,68,47,89,227,468],
    },
    ]
});

Highcharts.chart('pie-container', {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie',
      backgroundColor: 'rgba(0,0,0,0)'
    },
    title: {
      text: 'Commuter Breakdown LA'
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
      point: {
        valueSuffix: '%'
      }
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %'
        }
      },
      series:{
        dataLabels:{
            style: {
                fontSize: "18px",
            }
        }
    }
    },
    series: [{
      name: 'Sector',
      colorByPoint: true,
      data: [{
        name: 'Driving',
        y: 71,
        sliced: true,
        selected: true
      }, {
        name: 'Driving Carpool',
        y: 12
      }, {
        name: 'Public Transportation ',
        y: 7
      }]
    }]
  });

  Highcharts.chart('line-container', {
    chart: {
        type: 'line',
        backgroundColor: 'rgba(0,0,0,0)'
    },
    title: {
        text: 'Percent of Workforce that Works from Home'
    },
    subtitle: {
        text: 'Source: Forbes.com'
    },
    xAxis: {
        categories: ['10/2/2019', '10/15/2019', '11/2/2019', '11/15/2019', '12/2/2019', '12/15/2019', '1/2/2020', '1/15/2020', '2/2/2020', '2/15/2020', '3/2/2020', '3/15/2020']
    },
    yAxis: {
        title: {
            text: 'Percent (%)'
        }
    },
    plotOptions: {
        line: {
            dataLabels: {
                enabled: true
            },
            enableMouseTracking: false
        },
        series:{
            dataLabels:{
                style: {
                    fontSize: "18px",
                }
            }
        }
    },
    legend:{
        enabled:false
    },
    series: [{
        name: 'Tokyo',
        data: [27, 26, 26, 27, 25, 27, 41, 27, 28, 29, 36, 56]
    }]
});