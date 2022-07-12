import { useEffect, useState } from 'react';
import UniversityTipsAPI from 'src/api/UniversityTip';
import CollapseCard from 'src/components/CollapseCard';
import { Card, CardBody, CardGroup, CardHeader } from 'src/components/Root/Cards';
import Container from 'src/components/Root/Container';
import { Col, Row } from 'src/components/Root/Grid';
import { types } from "src/reusables/data";
import { dateRangeFormatter } from 'src/reusables/functions';
import TemplatePage from '../..';

const UniversityTips = () => {
  const [tips, setTipsList] = useState([]);
  const [topics, setTopics] = useState([]);
  const [tip, setTip] = useState({});
  const [action, setAction] = useState("create");
  const [loading, setLoading] = useState(false);
  const [pickedTopic, setPickedTopic] = useState({});
  const [pickedTip, setPickedTip] = useState({});

  const image = "http://www.dermalina.com/wp-content/uploads/2020/12/no-image.jpg";

  const callData = async () => {
    setLoading(true);

    await UniversityTipsAPI.getAllTips()
      .then(res => {
        console.log("Tips Called Data", res.data);
        setTipsList(res.data);
      })
      .catch(e => {
        console.log("Tips Call Error", e);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const callListsData = async () => {
    await UniversityTipsAPI.getAllTopics()
      .then(res => {
        console.log("Tip Topics Called Data", res.data);
        setTopics(res.data);
      })
      .catch(e => {
        console.log("Tip Topics Call Error", e);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    callData();
    callListsData();
  }, []);

  const props = [
    {
      title: "Title",
      name: "title",
      type: "text",
      disabled: true,
      value: tip.title,
      onChange: e => setTip(current => ({ ...current, title: e.target.value }))
    },
    {
      title: "Topic",
      name: "topic",
      type: "select",
      disabled: true,
      value: tip.topic,
      onChange: e => setTip(current => ({ ...current, topic: e.target.value })),
      options: topics?.map(topic => ({ title: topic.title, value: topic.id }))
    },
    {
      title: "Type",
      name: "type",
      type: "select",
      disabled: true,
      value: tip.type,
      onChange: e => setTip(current => ({ ...current, type: e.target.value })),
      options: types?.map(type => ({ title: type.name, value: type.name }))
    },
    {
      title: "Details",
      name: "details",
      type: "textarea",
      fullwidth: true,
      disabled: true,
      value: tip.details,
      onChange: e => setTip(current => ({ ...current, details: e.target.value }))
    },
  ];

  const onFormReset = () => {
    setTip({})
    setAction("create");
    console.log("Form was reset")
  };

  const onActionSelection = (action, data) => {
    setTip(data);
    setAction(action);
  };

  const tableColumns = [
    {
      name: "Title",
      selector: row => row.title,
      sortable: true
    },
    {
      name: "Topic",
      selector: row => topics.find(topic => topic.id === row.topic)?.title,
      sortable: true
    },
    {
      name: "Type",
      selector: row => row.type,
      sortable: true
    },
  ];

  return (
    <>
      <TemplatePage
        pageTitle={"Internship Tips"}
        pageDescrbition={"Students to view submitted tips & helpful materials about internships"}
        loading={loading}
        formInputs={props}
        onFormReset={onFormReset}
        tableTitle={"Internship Tips List"}
        tableData={tips}
        tableColumns={tableColumns}
        tableRowDetails={true}
        onActionSelection={onActionSelection}
        currentAction={action}
      >
        <CollapseCard title="University Tips">
          <Container>
            <CardGroup>
              <Card style={{ maxHeight: "100vh", overflowY: "scroll" }}>
                <CardHeader>
                  Tip Topics
                </CardHeader>

                <CardBody>
                  {topics?.map((topic, i) => (
                    <div key={i} onClick={() => pickedTopic.id === topic.id ? setPickedTopic({}) : setPickedTopic(topic)}>
                      <Row className={`py-4 ${topic.id === pickedTopic.id ? "bg-light" : ""}`}>
                        <Col md={3} >
                          <img src={image} width="100%" />
                        </Col>

                        <Col md={9} className="p-2">
                          <h5>
                            {topic.title}
                          </h5>

                          <p className='text-left'>
                            {topic.desc}
                          </p>
                        </Col>
                      </Row>
                    </div>
                  ))}
                </CardBody>
              </Card>

              <Card style={{ maxHeight: "100vh", overflowY: "scroll" }}>
                <CardHeader>
                  Tips
                </CardHeader>

                <CardBody>
                  {pickedTopic?.title ? (
                    tips.filter(tip => pickedTopic?.id ? tip.topic === pickedTopic.id : tip).map((tip, i) => (
                      <div key={i} onClick={() => pickedTip.id === tip.id ? setPickedTip({}) : setPickedTip(tip)}>
                        <Row className={`py-4 ${tip.id === pickedTip.id ? "bg-light" : ""}`}>
                          <Col md={12} className="p-2">
                            <h5>
                              {tip.title}
                            </h5>

                            <p className='text-left'>
                              {dateRangeFormatter(tip.created_at)}
                            </p>
                          </Col>
                        </Row>
                      </div>
                    ))
                  ) : (
                    "Pick a topic"
                  )}
                </CardBody>
              </Card>

              <Card>
                <CardHeader>
                  Tip Details
                </CardHeader>

                <CardBody>
                  {pickedTip.title ? (
                    <Row className="my-4">
                      <Col md={4}>
                        <h5>
                          {pickedTip.title}
                        </h5>

                        <p>
                          {pickedTip.type}
                        </p>
                      </Col>

                      <Col md={8}>
                        <h6 className='text-left'>
                          {topics?.find(topic => topic.id === pickedTip.topic)?.title}
                        </h6>
                      </Col>

                      <Col md={12} className="mt-4">
                        <h5>
                          Details
                        </h5>

                        <p>
                          {pickedTip.details}
                        </p>
                      </Col>
                    </Row>
                  ) : (
                    "Pick a tip"
                  )}
                </CardBody>
              </Card>
            </CardGroup>
          </Container >
        </CollapseCard>
      </TemplatePage>
    </>
  )
}

export default UniversityTips
