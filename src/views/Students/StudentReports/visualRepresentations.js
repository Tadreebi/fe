const visualRepresentations = reportsList => {

  const statisticsData = [
    {
      title: "Submitted Reports",
      number: reportsList.length,
      chart: {
        type: "bar",
        data: {
          "Pending Reports": reportsList?.filter(rep => !rep.remarks?.length && rep.accepted !== true)?.length,
          "Accepted Reports": reportsList?.filter(rep => rep.accepted === true)?.length,
          "Rejected Reports": reportsList?.filter(rep => rep.remarks?.length && rep.accepted === false)?.length,
        },
        fill: true
      }
    },
    {
      title: "Types of Reports Submitted",
      number: reportsList?.map(rep => rep.type).reduce((final, current) => final.includes(current) ? final : [...final, current], []).length,
      chart: {
        type: "progress",
        value: 25,
        text: "25%",
        color: "success"
      }
    },
  ];

  const chartsData = [
    {
      title: "Submitted Reports",
      type: "bar",
      data: [
        {
          title: "Pending Reports",
          color: "warning",
          data: reportsList?.map(rep => rep.student).reduce((final, current) => final.includes(current) ? final : [...final, current], []).reduce((final, student) => ({
            ...final, [student]: reportsList?.filter(rep => !rep.remarks?.length && rep.accepted !== true && rep.student === student)?.length,
          }), {}),
        },
        {
          title: "Accepted Reports",
          color: "success",
          data: reportsList?.map(rep => rep.student).reduce((final, current) => final.includes(current) ? final : [...final, current], []).reduce((final, student) => ({
            ...final, [student]: reportsList?.filter(rep => rep.accepted === true && rep.student === student)?.length,
          }), {}),
        },
        {
          title: "Rejected Reports",
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
          title: "Pending Reports",
          color: "warning",
          data: reportsList?.map(rep => rep.student).reduce((final, current) => final.includes(current) ? final : [...final, current], []).reduce((final, student) => ({
            ...final, [student]: reportsList?.filter(rep => !rep.remarks?.length && rep.accepted !== true && rep.student === student)?.length,
          }), {}),
        },
        {
          title: "Accepted Reports",
          color: "success",
          data: reportsList?.map(rep => rep.student).reduce((final, current) => final.includes(current) ? final : [...final, current], []).reduce((final, student) => ({
            ...final, [student]: reportsList?.filter(rep => rep.accepted === true && rep.student === student)?.length,
          }), {}),
        },
        {
          title: "Rejected Reports",
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
        "Monthly Report": reportsList?.filter(rep => rep.type === "Monthly Report")?.length,
        "Weekly Report": reportsList?.filter(rep => rep.type === "Weekly Report")?.length,
        "Final Report": reportsList?.filter(rep => rep.type === "Final Report")?.length,
      }
    },
    {
      title: "Submitted Reports",
      type: "pie",
      data: {
        "Pending Reports": reportsList?.filter(rep => !rep.remarks?.length && rep.accepted !== true)?.length,
        "Accepted Reports": reportsList?.filter(rep => rep.accepted === true)?.length,
        "Rejected Reports": reportsList?.filter(rep => rep.remarks?.length && rep.accepted === false)?.length,
      }
    },
    {
      title: "Submitted Reports",
      type: "polar",
      data: {
        "Pending Reports": reportsList?.filter(rep => !rep.remarks?.length && rep.accepted !== true)?.length,
        "Accepted Reports": reportsList?.filter(rep => rep.accepted === true)?.length,
        "Rejected Reports": reportsList?.filter(rep => rep.remarks?.length && rep.accepted === false)?.length,
      }
    },
    {
      title: "Submitted Reports",
      type: "radar",
      data: [
        {
          title: "Pending Reports",
          color: "warning",
          data: reportsList?.map(rep => rep.student).reduce((final, current) => final.includes(current) ? final : [...final, current], []).reduce((final, student) => ({
            ...final, [student]: reportsList?.filter(rep => !rep.remarks?.length && rep.accepted !== true && rep.student === student)?.length,
          }), {}),
        },
        {
          title: "Accepted Reports",
          color: "success",
          data: reportsList?.map(rep => rep.student).reduce((final, current) => final.includes(current) ? final : [...final, current], []).reduce((final, student) => ({
            ...final, [student]: reportsList?.filter(rep => rep.accepted === true && rep.student === student)?.length,
          }), {}),
        },
        {
          title: "Rejected Reports",
          color: "danger",
          data: reportsList?.map(rep => rep.student).reduce((final, current) => final.includes(current) ? final : [...final, current], []).reduce((final, student) => ({
            ...final, [student]: reportsList?.filter(rep => rep.remarks?.length && rep.accepted === false && rep.student === student)?.length,
          }), {}),
        }
      ]
    },
  ];

  return ({ statisticsData, chartsData });
};

export default visualRepresentations;
