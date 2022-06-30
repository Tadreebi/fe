import { CChartLine } from '@coreui/react-chartjs';

const LineChart = ({ children, ...rest }) => {

  return (
    <CChartLine {...rest}>
      {children}
    </CChartLine>
  )
}

export default LineChart
