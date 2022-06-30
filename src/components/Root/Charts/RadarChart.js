import { CChartRadar } from '@coreui/react-chartjs';

const RadarChart = ({ children, ...rest }) => {

  return (
    <CChartRadar {...rest}>
      {children}
    </CChartRadar>
  )
}

export default RadarChart
