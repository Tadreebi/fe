import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { Card, CardBody } from '../Root/Cards';
import Icon from '../Root/Icon';

const Header = ({ title = "Page Title", icon = faNewspaper, descrbition = "Page description" }) => {
  return (
    <Card className='mb-3 py-1'>
      <CardBody>
        <h4 className='py-2'><Icon icon={icon} /> <u>{title}</u></h4>
        <small>{descrbition}</small>
      </CardBody>
    </Card>
  )
}

export default Header
