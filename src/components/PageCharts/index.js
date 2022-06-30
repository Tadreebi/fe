import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react';
import { CChartBar, CChartDoughnut, CChartLine, CChartPie, CChartPolarArea, CChartRadar } from '@coreui/react-chartjs';
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

const PageCharts = ({ title, charts = chartsDemoData }) => {
  return (
    <CCard className="mb-4">
      <CCardHeader>
        {title || "Charts"}
      </CCardHeader>

      <CCardBody>
        <CRow>
          {charts?.map((chart, i) => (
            <CCol sm={12} lg={6} className="px-5 my-3" key={i}>
              <h5>
                {chart.title}
              </h5>

              {chart.type === "bar" ? (
                <CChartBar
                  data={{
                    labels: Object.keys(chart.data[0].data),
                    datasets: chart.data.map(dat =>
                    ({
                      label: dat.title,
                      backgroundColor: `rgba(${rgbColors(dat.color)},1)`,
                      data: Object.values(dat.data)
                    })
                    )
                  }}
                />
              ) : chart.type === "line" ? (
                <CChartLine
                  data={{
                    labels: Object.keys(chart.data[0].data),
                    datasets: chart.data.map(dat =>
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
                <CChartDoughnut
                  data={{
                    labels: Object.keys(chart.data),
                    datasets: [
                      {
                        backgroundColor: Object.values(chart.data).map((_, i) => `rgba(${rgbColors(colors[i % (colors.length - 1)])},1)`),
                        data: Object.values(chart.data),
                      },
                    ],
                  }}
                />
              ) : chart.type === "pie" ? (
                <CChartPie
                  data={{
                    labels: Object.keys(chart.data),
                    datasets: [
                      {
                        data: Object.values(chart.data),
                        backgroundColor: Object.values(chart.data).map((_, i) => `rgba(${rgbColors(colors[i % (colors.length - 1)])},1)`),
                        hoverBackgroundColor: Object.values(chart.data).map((_, i) => `rgba(${rgbColors(colors[i % (colors.length - 1)])},1)`),
                      },
                    ],
                  }}
                />
              ) : chart.type === "polar" ? (
                <CChartPolarArea
                  data={{
                    labels: Object.keys(chart.data),
                    datasets: [
                      {
                        data: Object.values(chart.data),
                        backgroundColor: Object.values(chart.data).map((_, i) => `rgba(${rgbColors(colors[i % (colors.length - 1)])},0.5)`),
                        borderColor: Object.values(chart.data).map((_, i) => `rgba(${rgbColors(colors[i % (colors.length - 1)])},1)`),
                      },
                    ],
                  }}
                />
              ) : chart.type === "radar" && (
                <CChartRadar
                  data={{
                    labels: Object.keys(chart.data[0].data),
                    datasets: chart.data.map((dat, i) =>
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
            </CCol>
          ))}
        </CRow>
      </CCardBody>
    </CCard>
  )
}

export default PageCharts
