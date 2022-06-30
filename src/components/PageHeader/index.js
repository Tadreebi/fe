import Card from '../Root/Cards/Card'
import CardBody from '../Root/Cards/CardBody'

const Header = ({ title = "Page Title", descrbition = "Page description" }) => {
  return (
    <Card className='mb-3 py-1'>
      <CardBody>
        <h4 className='py-2'><u>{title}</u></h4>
        <small>{descrbition}</small>
      </CardBody>
    </Card>
  )
}

export default Header
