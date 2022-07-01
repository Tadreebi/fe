import { faSquareRootVariable } from '@fortawesome/free-solid-svg-icons';
import CollapseCard from '../CollapseCard';
import { BarChart, LineChart } from '../Root/Charts';
import { Col, Row } from '../Root/Grid';
import StatsWidget from '../Root/StatsWidget';
import statisticsDemoData from './demoData';

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

const length = count => {
  switch (count) {
    case 1: return 12;
    case 2: return 6;
    case 3: return 4;
    default: return 3;
  }
};

const PageStatistics = ({ title = "Statistics", statistics = statisticsDemoData }) => {
  return (
    <CollapseCard title={title} icon={faSquareRootVariable}>
      <Row>
        {statistics?.map((statistic, i) => (
          <Col sm={6} lg={length(statistics.length)} key={i}>
            <StatsWidget
              className={`mb-4 ${statistic.chart ? "" : "pb-5"}`}
              color={statistic.color || colors[i % (colors.length - 1)]}
              value={statistic.number}
              title={statistic.title}
              // action={
              //   <CDropdown alignment="end">
              //     <CDropdownToggle color="transparent" caret={false} className="p-0">
              //       <CIcon icon={cilOptions} className="text-high-emphasis-inverse" />
              //     </CDropdownToggle>
              //     <CDropdownMenu>
              //       <CDropdownItem>Action</CDropdownItem>
              //     </CDropdownMenu>
              //   </CDropdown>
              // }
              chart={
                statistic.chart && (
                  <>
                    {statistic.chart.type === "line" ? (
                      <LineChart
                        className={statistic.chart.fill ? "mt-3" : "mt-3 mx-3"}
                        data={{
                          labels: Object.keys(statistic.chart.data),
                          datasets: [
                            {
                              // label: 'My First dataset',
                              backgroundColor: statistic.chart.fill ? 'rgba(255,255,255,.2)' : 'transparent',
                              borderColor: 'rgba(255,255,255,.55)',
                              pointBackgroundColor: `rgba(${rgbColors(statistic.color || colors[i % (colors.length - 1)])},1)`,
                              data: Object.values(statistic.chart.data),
                              fill: statistic.chart.fill,
                            },
                          ],
                        }}
                        options={{
                          plugins: {
                            legend: {
                              display: false,
                            },
                          },
                          maintainAspectRatio: false,
                          scales: {
                            x: statistic.chart.fill ? {
                              display: false,
                            } : {
                              grid: {
                                display: false,
                                drawBorder: false,
                              },
                              ticks: {
                                display: false,
                              },
                            },
                            y: statistic.chart.fill ? {
                              display: false,
                            } : {
                              min: 30,
                              max: 89,
                              display: false,
                              grid: {
                                display: false,
                              },
                              ticks: {
                                display: false,
                              },
                            },
                          },
                          elements: {
                            line: {
                              borderWidth: 2,
                              tension: 0.4,
                            },
                            point: {
                              radius: statistic.chart.fill ? 0 : 4,
                              hitRadius: 10,
                              hoverRadius: 4,
                            },
                          },
                        }}
                      />
                    ) : statistic.chart.type === "bar" && (
                      <BarChart
                        className="mt-3 mx-3"
                        data={{
                          labels: Object.keys(statistic.chart.data),
                          datasets: [
                            {
                              // label: 'My First dataset',
                              backgroundColor: 'rgba(255,255,255,.2)',
                              borderColor: 'rgba(255,255,255,.55)',
                              data: Object.values(statistic.chart.data),
                              // barPercentage: 0.6,
                            },
                          ],
                        }}
                        options={{
                          maintainAspectRatio: false,
                          plugins: {
                            legend: {
                              display: false,
                            },
                          },
                          scales: {
                            x: {
                              grid: {
                                display: false,
                                drawTicks: false,
                              },
                              ticks: {
                                display: false,
                              },
                            },
                            y: {
                              grid: {
                                display: false,
                                drawBorder: false,
                                drawTicks: false,
                              },
                              ticks: {
                                display: false,
                              },
                            },
                          },
                        }}
                      />
                    )}
                  </>
                )
              }
            />
          </Col>
        ))}
      </Row>
    </CollapseCard>
  )
}

export default PageStatistics
