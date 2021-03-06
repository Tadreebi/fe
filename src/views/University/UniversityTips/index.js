import { useEffect, useState } from 'react';
import UniversityTipsAPI from 'src/api/UniversityTip';
import { types } from "src/reusables/data";
import TemplatePage from '../..';

const UniversityTip = () => {
  const [tips, setTipsList] = useState([]);
  const [topics, setTopics] = useState([]);
  const [tip, setTip] = useState({});
  const [action, setAction] = useState("create");
  const [loading, setLoading] = useState(false);

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
      options: topics?.map(topic => ({ title: topic.title, value: topic.id }))
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
        console.log("Tip Data Created Successfully");
        callData();
        setTip({});
        setAction("create");
      })
      .catch(e => {
        console.log("Tip Data Create Error", e);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const onDataUpdate = async () => {
    setLoading(true);

    await UniversityTipsAPI.updateTip(tip.id, tip)
      .then(res => {
        console.log("Tip Data Updated Successfully");
        callData();
        setTip({});
        setAction("create");
      })
      .catch(e => {
        console.log("Tip Data Update Error", e);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const onDataDelete = async () => {
    setLoading(true);

    await UniversityTipsAPI.deleteTip(tip.id)
      .then(res => {
        console.log("Tip Data Deleted Successfully");
        setTip({});
        setAction("create");
        callData();
      })
      .catch(e => {
        console.log("Tip Data Delete Error", e);
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
        pageDescrbition={"University supervisors to submit tips & helpful materials about internship for students"}
        loading={loading}
        formInputs={props}
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

export default UniversityTip
