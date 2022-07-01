import { CWidgetStatsA } from '@coreui/react';

const StatsWidget = ({ children, ...rest }) => {
  return (
    <CWidgetStatsA {...rest}>
      {children}
    </CWidgetStatsA>
  )
}

export default StatsWidget;
