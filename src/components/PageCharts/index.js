import { faChartPie } from '@fortawesome/free-solid-svg-icons';
import CollapseCard from '../CollapseCard';
import { BarChart, DoughnutChart, LineChart, PieChart, PolarChart, RadarChart } from '../Root/Charts';
import { Col, Row } from '../Root/Grid';
import chartsDemoData from './demoData';

const colors = [
  "primary",
  "info",
  "success",
  "warning",
  "danger",
  "dark",
  "secondary"
];

const rgbColors = color => {
  switch (color) {
    case "primary": return "50, 31, 219";
    case "info": return "51, 153, 255";
    case "success": return "46, 184, 92";
    case "danger": return "229, 83, 83";
    case "warning": return "249, 177, 21";
    case "dark": return "79, 93, 115";
    case "secondary": return "157, 165, 177";
    default: return "51, 153, 255";
  }
};

const PageCharts = ({ title = "Charts", charts = chartsDemoData }) => {
  return (
    <CollapseCard title={title} icon={faChartPie}>
      <Row>
        {charts?.map((chart, i) => (
          <Col sm={12} lg={6} className="px-5 my-3" key={i}>
            <h5>
              {chart.title}
            </h5>

            {chart.type === "bar" ? (
              <BarChart
                data={{
                  labels: Object.keys(chart.data[0].data),
                  datasets: chart.data?.map(dat =>
                  ({
                    label: dat.title,
                    backgroundColor: `rgba(${rgbColors(dat.color)},1)`,
                    data: Object.values(dat.data)
                  })
                  )
                }}
              />
            ) : chart.type === "line" ? (
              <LineChart
                data={{
                  labels: Object.keys(chart.data[0].data),
                  datasets: chart.data?.map(dat =>
                  ({
                    label: dat.title,
                    backgroundColor: `rgba(${rgbColors(dat.color)},0.2)`,
                    borderColor: `rgba(${rgbColors(dat.color)},1)`,
                    pointBackgroundColor: `rgba(${rgbColors(dat.color)},1)`,
                    pointBorderColor: "#fff",
                    data: Object.values(dat.data)
                  })
                  )
                }}
              />
            ) : chart.type === "doughnut" ? (
              <DoughnutChart
                data={{
                  labels: Object.keys(chart.data),
                  datasets: [
                    {
                      backgroundColor: Object.values(chart.data)?.map((_, i) => `rgba(${rgbColors(colors[i % (colors.length - 1)])},1)`),
                      data: Object.values(chart.data),
                    },
                  ],
                }}
              />
            ) : chart.type === "pie" ? (
              <PieChart
                data={{
                  labels: Object.keys(chart.data),
                  datasets: [
                    {
                      data: Object.values(chart.data),
                      backgroundColor: Object.values(chart.data)?.map((_, i) => `rgba(${rgbColors(colors[i % (colors.length - 1)])},1)`),
                      hoverBackgroundColor: Object.values(chart.data)?.map((_, i) => `rgba(${rgbColors(colors[i % (colors.length - 1)])},1)`),
                    },
                  ],
                }}
              />
            ) : chart.type === "polar" ? (
              <PolarChart
                data={{
                  labels: Object.keys(chart.data),
                  datasets: [
                    {
                      data: Object.values(chart.data),
                      backgroundColor: Object.values(chart.data)?.map((_, i) => `rgba(${rgbColors(colors[i % (colors.length - 1)])},0.5)`),
                      borderColor: Object.values(chart.data)?.map((_, i) => `rgba(${rgbColors(colors[i % (colors.length - 1)])},1)`),
                    },
                  ],
                }}
              />
            ) : chart.type === "radar" && (
              <RadarChart
                data={{
                  labels: Object.keys(chart.data[0].data),
                  datasets: chart.data?.map((dat, i) =>
                  ({
                    label: dat.title,
                    backgroundColor: `rgba(${rgbColors(dat.color)},0.2)`,
                    borderColor: `rgba(${rgbColors(dat.color)},1)`,
                    pointBackgroundColor: `rgba(${rgbColors(dat.color)},1)`,
                    pointHighlightStroke: `rgba(${rgbColors(dat.color)},1)`,
                    pointBorderColor: '#fff',
                    pointHighlightFill: '#fff',
                    data: Object.values(dat.data)
                  })
                  )
                }}
              />
            )}
          </Col>
        ))}
      </Row>
    </CollapseCard>
  )
}

export default PageCharts
