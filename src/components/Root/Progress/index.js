import { CProgress, CProgressBar } from '@coreui/react';

const Progress = ({ children, value, text, ...rest }) => {
  return (
    <CProgress className="m-3">
      <CProgressBar value={value} variant="striped" {...rest}>
        {text}
        {children}
      </CProgressBar>
    </CProgress>
  )
}

export default Progress;
