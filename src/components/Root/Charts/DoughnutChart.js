import { CChartDoughnut } from '@coreui/react-chartjs';

const DoughnutChart = ({ children, ...rest }) => {

  return (
    <CChartDoughnut {...rest}>
      {children}
    </CChartDoughnut>
  )
}

export default DoughnutChart
