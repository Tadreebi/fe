import { CChartBar, CChartDoughnut, CChartLine, CChartPie, CChartPolarArea, CChartRadar } from '@coreui/react-chartjs';

const BarChart = ({ children, ...rest }) => {

  return (
    <CChartBar {...rest}>
      {children}
    </CChartBar>
  )
}

export default BarChart
