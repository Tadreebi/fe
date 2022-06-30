import { cilArrowCircleBottom, cilArrowCircleRight } from '@coreui/icons';
import { useState } from 'react';
import { Card, CardBody, CardHeader } from '../Root/Cards';
import Collapse from '../Root/Collapse';
import Icon from '../Root/Icon';

const CollapseCard = ({ title, open, children }) => {
  const [visible, setVisible] = useState(open);

  return (
    <Card className="mb-4">
      <CardHeader onClick={() => setVisible(current => !current)} className="p-3">
        {title}

        <div style={{ float: "right" }}>
          <Icon icon={visible ? cilArrowCircleBottom : cilArrowCircleRight} />
        </div>
      </CardHeader>

      <Collapse visible={visible}>
        <CardBody>
          {children}
        </CardBody>
      </Collapse>
    </Card>
  )
}

export default CollapseCard
