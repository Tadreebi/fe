import { CCard } from '@coreui/react';

const Card = ({ title, children, ...rest }) => {

  return (
    <CCard {...rest} className="mb-4">
      {children}
    </CCard>
  )
}

export default Card
