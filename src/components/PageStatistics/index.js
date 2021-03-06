import { faSquareRootVariable } from '@fortawesome/free-solid-svg-icons';
import { colors } from "src/reusables/data";
import { rgbColors } from 'src/reusables/functions';
import CollapseCard from '../CollapseCard';
import { BarChart, LineChart } from '../Root/Charts';
import { Col, Row } from '../Root/Grid';
import Progress from '../Root/Progress';
import StatsWidget from '../Root/StatsWidget';

const length = count => {
  switch (count) {
    case 1: return 6;
    case 2: return 6;
    case 3: return 4;
    default: return 3;
  }
};

const PageStatistics = ({ title = "Statistics", statistics, open = false }) => {


  return (
    <CollapseCard title={title} icon={faSquareRootVariable} open={open}>
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
                    ) : statistic.chart.type === "bar" ? (
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
                    ) : statistic.chart.type === "progress" && (
                      <Progress {...statistic.chart} />
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
