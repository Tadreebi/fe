import { useEffect, useState } from 'react';
import CompanyReportAPI from 'src/api/CompanyReport';
import { students, companies } from 'src/reusables/data';
import TemplatePage from '../..';
import visualRepresentations from './visualRepresentations';

const CompanyReports = () => {
  const [reportsList, setReportsList] = useState([]);
  const [report, setReport] = useState({});
  const [action, setAction] = useState("create");
  const [loading, setLoading] = useState(false);

  const callData = async () => {
    setLoading(true);

    await CompanyReportAPI.getAllReports()
      .then(res => {
        console.log("Called Data", res.data);
        setReportsList(res.data);
      })
      .catch(e => {
        console.log(e);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    callData();
  }, []);

  const inputs = [
    {
      title: "Title",
      name: "title",
      type: "text",
      placeholder: "Report Title",
      required: true,
      value: report.title,
      onChange: e => setReport(current => ({ ...current, title: e.target.value }))
    },
    {
      title: "Student",
      name: "student",
      type: "select",
      double: true,
      required: true,
      value: report.student,
      onChange: e => setReport(current => ({ ...current, student: e.target.value })),
      options: students?.map(student => ({ title: student.name, value: student.id }))

    },
    {
      title: "company",
      name: "company",
      type: "select",
      double: true,
      required: true,
      value: report.company,
      onChange: e => setReport(current => ({ ...current, company: e.target.value })),
      options: companies?.map(company => ({ title: company.name, value: company.id }))
    },
    {
      title: "Report Type",
      name: "type",
      type: "select",
      required: true,
      value: report.type,
      onChange: e => setReport(current => ({ ...current, type: e.target.value })),
      options: [
        { title: "Periodical Report", value: "Periodical Report" },
        { title: "Complain Report", value: "Complain Report" },
        { title: "Final Report", value: "Final Report" }
      ]
    },
    {
      title: "Report Introduction",
      name: "intro",
      type: "textarea",
      fullwidth: true,
      value: report.intro,
      onChange: e => setReport(current => ({ ...current, intro: e.target.value }))
    },
    {
      title: "Report Content",
      name: "report",
      type: "textarea",
      fullwidth: true,
      required: true,
      value: report.report,
      onChange: e => setReport(current => ({ ...current, report: e.target.value }))
    },
    {
      title: "Report Conclusion",
      name: "conclusion",
      type: "textarea",
      fullwidth: true,
      value: report.conclusion,
      onChange: e => setReport(current => ({ ...current, conclusion: e.target.value }))
    },
    {
      title: "Attendance",
      name: "attendace",
      type: "number",
      fullwidth: true,
      required: true,
      value: report.attendace,
      onChange: e => setReport(current => ({ ...current, attendace: e.target.value }))
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
    setReport({})
    setAction("create");
    console.log("Form was reset")
  };

  const onActionSelection = (action, data) => {
    setReport(data);
    setAction(action);
  };

  const onDataCreate = async () => {
    setLoading(true);

    await CompanyReportAPI.createReport(report)
      .then(res => {
        console.log("Data Created Successfully");
        callData();
        setReport({});
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

    await CompanyReportAPI.updateReport(report.id, report)
      .then(res => {
        console.log("Data Updated Successfully");
        callData();
        setReport({});
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

    await CompanyReportAPI.deleteReport(report.id)
      .then(res => {
        console.log("Data Deleted Successfully");
        setReport({});
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

  const { statisticsData, chartsData } = visualRepresentations(reportsList);

  const tableColumns = [
    {
      name: "Title",
      selector: row => row.title,
      sortable: true
    },
    {
      name: "Student",
      selector: row => students.find(student => student.id === row.student)?.name,
      sortable: true
    },
    {
      name: "Report Type",
      selector: row => row.type,
      sortable: true
    },
    {
      name: "Student Attendance",
      selector: row => `${row.attendace}%`,
      sortable: true
    }
  ];

  return (
    <>
      <TemplatePage
        pageTitle={"Company Reports"}
        pageDescrbition={"Companies to submit stand-along, periodical & final reports to university supervisor"}
        loading={loading}
        statisticsData={statisticsData}
        chartsData={chartsData}
        formTitle={"CRUD Reports"}
        formInputs={inputs}
        onFormSubmit={onFormSubmit}
        onFormReset={onFormReset}
        tableTitle={"Company Reports List"}
        tableColumns={tableColumns}
        tableRowDetails={true}
        tableData={reportsList}
        onActionSelection={onActionSelection}
        currentAction={action}
        onDataCreate={onDataCreate}
        onDataUpdate={onDataUpdate}
        onDataDelete={onDataDelete}
      />
    </>
  )
}

export default CompanyReports
