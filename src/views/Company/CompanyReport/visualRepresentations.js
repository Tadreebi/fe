const visualRepresentations = reportsList => {

  const statisticsData = [
    {
      title: "Student Reports",
      number: reportsList.length,
      chart: {
        type: "bar",
        data: {
          "Periodical Reports": reportsList?.filter(rep => !rep.remarks?.length && rep.periodical !== true)?.length,
          "Complain Reports": reportsList?.filter(rep => rep.Complain === true)?.length,
          "Final Reports": reportsList?.filter(rep => rep.remarks?.length && rep.accepted === false)?.length,
        },
        fill: true
      }
    },
    {
      title: "Types of Reports Submitted",
      number: reportsList?.map(rep => rep.type).reduce((final, current) => final.includes(current) ? final : [...final, current], []).length,
      chart: {
        type: "bar",
        data: {
          "Complain Report": reportsList?.filter(rep => rep.type === "Complain Report")?.length,
          "Periodical Report": reportsList?.filter(rep => rep.type === "Periodical Report")?.length,
          "Final Report": reportsList?.filter(rep => rep.type === "Final Report")?.length,
        },
      }
    },
  ];

  const chartsData = [
    {
      title: "Submitted Reports",
      type: "bar",
      data: [
        {
          title: "Final Reports",
          color: "warning",
          data: reportsList?.map(rep => rep.student).reduce((final, current) => final.includes(current) ? final : [...final, current], []).reduce((final, student) => ({
            ...final, [student]: reportsList?.filter(rep => !rep.remarks?.length && rep.accepted !== true && rep.student === student)?.length,
          }), {}),
        },
        {
          title: "Periodical Reports",
          color: "success",
          data: reportsList?.map(rep => rep.student).reduce((final, current) => final.includes(current) ? final : [...final, current], []).reduce((final, student) => ({
            ...final, [student]: reportsList?.filter(rep => rep.accepted === true && rep.student === student)?.length,
          }), {}),
        },
        {
          title: "Complain Reports",
          color: "danger",
          data: reportsList?.map(rep => rep.student).reduce((final, current) => final.includes(current) ? final : [...final, current], []).reduce((final, student) => ({
            ...final, [student]: reportsList?.filter(rep => rep.remarks?.length && rep.accepted === false && rep.student === student)?.length,
          }), {}),
        }
      ]
    },
    {
      title: "Submitted Reports",
      type: "line",
      data: [
        {
          title: "Complain Reports",
          color: "warning",
          data: reportsList?.map(rep => rep.student).reduce((final, current) => final.includes(current) ? final : [...final, current], []).reduce((final, student) => ({
            ...final, [student]: reportsList?.filter(rep => !rep.remarks?.length && rep.accepted !== true && rep.student === student)?.length,
          }), {}),
        },
        {
          title: "Periodical Reports",
          color: "success",
          data: reportsList?.map(rep => rep.student).reduce((final, current) => final.includes(current) ? final : [...final, current], []).reduce((final, student) => ({
            ...final, [student]: reportsList?.filter(rep => rep.accepted === true && rep.student === student)?.length,
          }), {}),
        },
        {
          title: "Complain Reports",
          color: "danger",
          data: reportsList?.map(rep => rep.student).reduce((final, current) => final.includes(current) ? final : [...final, current], []).reduce((final, student) => ({
            ...final, [student]: reportsList?.filter(rep => rep.remarks?.length && rep.accepted === false && rep.student === student)?.length,
          }), {}),
        }
      ]
    },
    {
      title: "Submitted Reports",
      type: "doughnut",
      data: {
        "Complain Report": reportsList?.filter(rep => rep.type === "Complain Report")?.length,
        "Periodical Report": reportsList?.filter(rep => rep.type === "Periodical Report")?.length,
        "Final Report": reportsList?.filter(rep => rep.type === "Final Report")?.length,
      }
    },
    {
      title: "Submitted Reports",
      type: "pie",
      data: {
        "Periodical Reports": reportsList?.filter(rep => !rep.remarks?.length && rep.accepted !== true)?.length,
        "Final Reports": reportsList?.filter(rep => rep.accepted === true)?.length,
        "Complain Reports": reportsList?.filter(rep => rep.remarks?.length && rep.accepted === false)?.length,
      }
    },
    {
      title: "Submitted Reports",
      type: "polar",
      data: {
        "Final Reports": reportsList?.filter(rep => !rep.remarks?.length && rep.accepted !== true)?.length,
        "Periodical Reports": reportsList?.filter(rep => rep.accepted === true)?.length,
        "Complain Reports": reportsList?.filter(rep => rep.remarks?.length && rep.accepted === false)?.length,
      }
    },
    {
      title: "Submitted Reports",
      type: "radar",
      data: [
        {
          title: "Attendance Report",
          color: "warning",
          data: reportsList?.map(rep => rep.student).reduce((final, current) => final.includes(current) ? final : [...final, current], []).reduce((final, student) => ({
            ...final, [student]: reportsList?.filter(rep => !rep.remarks?.length && rep.accepted !== true && rep.student === student)?.length,
          }), {}),
        },
        // {
        //   title: "Attendance Report",
        //   color: "success",
        //   data: reportsList?.map(rep => rep.student).reduce((final, current) => final.includes(current) ? final : [...final, current], []).reduce((final, student) => ({
        //     ...final, [student]: reportsList?.filter(rep => rep.accepted === true && rep.student === student)?.length,
        //   }), {}),
        // },
        // {
        //   title: "Rejected Reports",
        //   color: "danger",
        //   data: reportsList?.map(rep => rep.student).reduce((final, current) => final.includes(current) ? final : [...final, current], []).reduce((final, student) => ({
        //     ...final, [student]: reportsList?.filter(rep => rep.remarks?.length && rep.accepted === false && rep.student === student)?.length,
        //   }), {}),
        // }
      ]
    },
  ];

  return ({ statisticsData, chartsData });
};

export default visualRepresentations;
