import React, { useRef, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HighchartsExporting from 'highcharts/modules/exporting';

if (typeof Highcharts === 'object') {
  HighchartsExporting(Highcharts);
}

const getData = () => {
  const data = [];
  for (let i = 0; i < 100; i++) {
    data.push([Date.now() - Math.random() * 36e5, Math.random() * 0.1]);
  }
  return data;
};

const options: Highcharts.Options = {
  chart: {
    type: 'scatter',
  },
  title: {
    text: '',
  },
  subtitle: {
    text: '',
  },
  xAxis: {
    title: {
      text: '',
    },
    labels: {
      format: 'Ξ{text}',
    },
    startOnTick: true,
    endOnTick: true,
    showLastLabel: true,
  },
  yAxis: {
    type: 'datetime',
    // labels: {
    //   format: '{value:%Y-%m-%d}'
    // }
  },
  legend: {
    enabled: false,
    // eslint-disable-next-line etc/no-commented-out-code
    // layout: 'vertical',
    // align: 'left',
    // verticalAlign: 'top',
    // x: 100,
    // y: 70,
    // floating: true,
    // backgroundColor: Highcharts.defaultOptions.chart.backgroundColor,
    // borderWidth: 1
  },
  plotOptions: {
    scatter: {
      marker: {
        radius: 2,
        lineWidth: 2,
        lineColor: undefined,
        states: {
          hover: {
            enabled: true,
            radius: 4,
            lineWidth: 4,
          },
        },
      },
      tooltip: {
        headerFormat: 'Ξ{point.y}',
        pointFormat: 'Click to view txn',
      },
    },
    series: {
      cursor: 'pointer',
      pointStart: Date.now() - 24 * 36e5,
      // pointInterval: 6 * 36e5,
      // eslint-disable-next-line etc/no-commented-out-code
      // relativeXValue: true,
      // point: {
      //   events: {
      //     click: function () {
      //       location.href = 'https://' +
      //         this.options.key;
      //     }
      //   },
      // },
    },
  },
  // series: [{
  //   type: 'scatter',
  //   name: 'Female',
  //   color: 'rgba(45, 166, 230, 0.5)',
  //   data: [{
  //           x: 29.9,
  //           y: 29.9,
  //           name: 'USA',
  //           key: 'United_States'
  //       }, {
  //           x: 71.5,
  //           y: 71.5,
  //           name: 'Canada',
  //           key: 'Canada'
  //       }, {
  //           x: 106.4,
  //           y: 106.4,
  //           name: 'Mexico',
  //           key: 'Mexico'
  //       }]
  // }]
};

const Chart = (props: HighchartsReact.Props) => {
  const router = useRouter();
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);
  const [chartOptions, setChartOptions] = useState<Highcharts.Options>();

  useEffect(() => {
    setChartOptions({
      ...options,
      series: [
        {
          type: 'scatter',
          point: {
            events: {
              click(event) {
                router.push('/another-page');
                console.log('🚀 ~ file: Scatter.tsx ~ line 80 ~ click ~ event', event);
                console.log('🚀this.name', this.name);
              },
            },
          },
          color: 'rgba(45, 166, 230, 0.5)',
          data: getData(),
        },
      ],
    });
  }, []);

  return <HighchartsReact highcharts={Highcharts} options={chartOptions} ref={chartComponentRef} {...props} />;
};

export default Chart;
