import { faChartPie } from '@fortawesome/free-solid-svg-icons';
import { colors } from "src/reusables/data";
import { rgbColors } from 'src/reusables/functions';
import CollapseCard from '../CollapseCard';
import { BarChart, DoughnutChart, LineChart, PieChart, PolarChart, RadarChart } from '../Root/Charts';
import { Col, Row } from '../Root/Grid';

const PageCharts = ({ title = "Charts", charts, open = false }) => {
  return (
    <CollapseCard title={title} icon={faChartPie} open={open}>
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
