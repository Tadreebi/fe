import { CChartPolarArea } from '@coreui/react-chartjs';

const PolarChart = ({ children, ...rest }) => {

  return (
    <CChartPolarArea {...rest}>
      {children}
    </CChartPolarArea>
  )
}

export default PolarChart
