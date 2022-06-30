import { CChartPie } from '@coreui/react-chartjs';

const PieChart = ({ children, ...rest }) => {

  return (
    <CChartPie {...rest}>
      {children}
    </CChartPie>
  )
}

export default PieChart
