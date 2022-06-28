import {
  CCard,
  CCardBody
} from '@coreui/react'

const Header = ({ title = "Page Title", descrbition = "Page description" }) => {
  return (
    <CCard className='mb-3 py-1'>
      <CCardBody>
        <h4 className='py-2'><u>{title}</u></h4>
        <small>{descrbition}</small>
      </CCardBody>
    </CCard>
  )
}

export default Header
