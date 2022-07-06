import { useEffect, useState } from 'react';
import UniversityTipsAPI from 'src/api/UniversityTip';
import TemplatePage from '../..';


const UniversityTips = () => {
  const [tips, setTipsList] = useState([]);
  const [topics, setTopics] = useState([]);
  const [tip, setTip] = useState({});
  const [action, setAction] = useState("create");
  const [loading, setLoading] = useState(false);

  const callData = async () => {
    setLoading(true);

    await UniversityTipsAPI.getAllTips()
      .then(res => {
        console.log("Called Data", res.data);
        setTipsList(res.data);
      })
      .catch(e => {
        console.log(e);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const types = [
    { id: 1, name: "File" },
    { id: 2, name: "Image" },
    { id: 3, name: "Video" },
    { id: 4, name: "Event" },
    { id: 5, name: "Text" },
  ];

  useEffect(async () => {
    callData();

    await UniversityTipsAPI.getAllTopics()
      .then(res => {
        console.log("Called Data", res.data);
        setTopics(res.data);
      })
      .catch(e => {
        console.log(e);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const inputs = [
    {
      title: "Title",
      name: "title",
      type: "text",
      required: true,
      value: tip.title,
      onChange: e => setTip(current => ({ ...current, title: e.target.value }))
    },
    {
      title: "Topic",
      name: "topic",
      type: "select",
      required: true,
      value: tip.topic,
      onChange: e => setTip(current => ({ ...current, topic: e.target.value })),
      options: topics?.map(topic => ({ title: topic.name, value: topic.id }))
    },
    {
      title: "Type",
      name: "type",
      type: "select",
      required: true,
      value: tip.type,
      onChange: e => setTip(current => ({ ...current, type: e.target.value })),
      options: types?.map(type => ({ title: type.name, value: type.name }))
    },
    {
      title: "Details",
      name: "details",
      type: "textarea",
      fullwidth: true,
      value: tip.details,
      onChange: e => setTip(current => ({ ...current, details: e.target.value }))
    },
  ];

  const onFormSubmit = e => {
    e.preventDefault();

    action === "create" ?
      onDataCreate()
      : action === "update" ?
        onDataUpdate()
        : action === "delete" &&
        onDataDelete()
  };

  const onFormReset = () => {
    setTip({})
    setAction("create");
    console.log("Form was reset")
  };

  const onActionSelection = (action, data) => {
    setTip(data);
    setAction(action);
  };

  const onDataCreate = async () => {
    setLoading(true);

    await UniversityTipsAPI.createTip(tip)
      .then(res => {
        console.log("Data Created Successfully");
        callData();
        setTip({});
        setAction("create");
      })
      .catch(e => {
        console.log(e);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const onDataUpdate = async () => {
    setLoading(true);

    await UniversityTipsAPI.updateTip(tip.id, tip)
      .then(res => {
        console.log("Data Updated Successfully");
        callData();
        setTip({});
        setAction("create");
      })
      .catch(e => {
        console.log(e);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const onDataDelete = async () => {
    setLoading(true);

    await UniversityTipsAPI.deleteTip(tip.id)
      .then(res => {
        console.log("Data Deleted Successfully");
        setTip({});
        setAction("create");
        callData();
      })
      .catch(e => {
        console.log(e);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const tableColumns = [
    {
      name: "Title",
      selector: row => row.title,
      sortable: true
    },
    {
      name: "Topic",
      selector: row => topics.find(topic => topic.id === row.topic)?.name,
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
        pageDescrbition={"University supervisors to submit tips & helpful materials about internship for students"}
        loading={loading}
        formTitle={"CRUD Tips"}
        formInputs={inputs}
        onFormSubmit={onFormSubmit}
        onFormReset={onFormReset}
        tableTitle={"Internship Tips List"}
        tableData={tips}
        tableColumns={tableColumns}
        tableRowDetails={true}
        onActionSelection={onActionSelection}
        currentAction={action}
        onDataCreate={onDataCreate}
        onDataUpdate={onDataUpdate}
        onDataDelete={onDataDelete}
      />
    </>
  )
}

export default UniversityTips
