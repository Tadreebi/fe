const visualRepresentations = remarksList => {

  const chartsData = [
    {
      title: "Submitted Reports",
      type: "bar",
      data: [
        {
          title: "Pending Reports",
          color: "warning",
          data: remarksList?.map(rep => rep.student).reduce((final, current) => final.includes(current) ? final : [...final, current], []).reduce((final, student) => ({
            ...final, [student]: remarksList.filter(rep => !rep.remarks?.length && rep.accepted !== true && rep.student === student)?.length,
          }), {}),
        },
        {
          title: "Accepted Reports",
          color: "success",
          data: remarksList?.map(rep => rep.student).reduce((final, current) => final.includes(current) ? final : [...final, current], []).reduce((final, student) => ({
            ...final, [student]: remarksList.filter(rep => rep.accepted === true && rep.student === student)?.length,
          }), {}),
        },
        {
          title: "Rejected Reports",
          color: "danger",
          data: remarksList?.map(rep => rep.student).reduce((final, current) => final.includes(current) ? final : [...final, current], []).reduce((final, student) => ({
            ...final, [student]: remarksList.filter(rep => rep.remarks?.length && rep.accepted === false && rep.student === student)?.length,
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
          data: remarksList?.map(rep => rep.student).reduce((final, current) => final.includes(current) ? final : [...final, current], []).reduce((final, student) => ({
            ...final, [student]: remarksList.filter(rep => !rep.remarks?.length && rep.accepted !== true && rep.student === student)?.length,
          }), {}),
        },
        {
          title: "Accepted Reports",
          color: "success",
          data: remarksList?.map(rep => rep.student).reduce((final, current) => final.includes(current) ? final : [...final, current], []).reduce((final, student) => ({
            ...final, [student]: remarksList.filter(rep => rep.accepted === true && rep.student === student)?.length,
          }), {}),
        },
        {
          title: "Rejected Reports",
          color: "danger",
          data: remarksList?.map(rep => rep.student).reduce((final, current) => final.includes(current) ? final : [...final, current], []).reduce((final, student) => ({
            ...final, [student]: remarksList.filter(rep => rep.remarks?.length && rep.accepted === false && rep.student === student)?.length,
          }), {}),
        }
      ]
    },
    {
      title: "Submitted Reports",
      type: "doughnut",
      data: {
        "Monthly Report": remarksList.filter(rep => rep.type === "Monthly Report")?.length,
        "Weekly Report": remarksList.filter(rep => rep.type === "Weekly Report")?.length,
        "Final Report": remarksList.filter(rep => rep.type === "Final Report")?.length,
      }
    },
    {
      title: "Submitted Reports",
      type: "pie",
      data: {
        "Pending Reports": remarksList.filter(rep => !rep.remarks?.length && rep.accepted !== true)?.length,
        "Accepted Reports": remarksList.filter(rep => rep.accepted === true)?.length,
        "Rejected Reports": remarksList.filter(rep => rep.remarks?.length && rep.accepted === false)?.length,
      }
    },
    {
      title: "Submitted Reports",
      type: "polar",
      data: {
        "Pending Reports": remarksList.filter(rep => !rep.remarks?.length && rep.accepted !== true)?.length,
        "Accepted Reports": remarksList.filter(rep => rep.accepted === true)?.length,
        "Rejected Reports": remarksList.filter(rep => rep.remarks?.length && rep.accepted === false)?.length,
      }
    },
    {
      title: "Submitted Reports",
      type: "radar",
      data: [
        {
          title: "Pending Reports",
          color: "warning",
          data: remarksList?.map(rep => rep.student).reduce((final, current) => final.includes(current) ? final : [...final, current], []).reduce((final, student) => ({
            ...final, [student]: remarksList.filter(rep => !rep.remarks?.length && rep.accepted !== true && rep.student === student)?.length,
          }), {}),
        },
        {
          title: "Accepted Reports",
          color: "success",
          data: remarksList?.map(rep => rep.student).reduce((final, current) => final.includes(current) ? final : [...final, current], []).reduce((final, student) => ({
            ...final, [student]: remarksList.filter(rep => rep.accepted === true && rep.student === student)?.length,
          }), {}),
        },
        {
          title: "Rejected Reports",
          color: "danger",
          data: remarksList?.map(rep => rep.student).reduce((final, current) => final.includes(current) ? final : [...final, current], []).reduce((final, student) => ({
            ...final, [student]: remarksList.filter(rep => rep.remarks?.length && rep.accepted === false && rep.student === student)?.length,
          }), {}),
        }
      ]
    },
  ];

  const statisticsData = [
    {
      title: "Submitted Reports",
      number: remarksList.length,
      chart: {
        type: "bar",
        data: {
          "Pending Reports": remarksList.filter(rep => !rep.remarks?.length && rep.accepted !== true)?.length,
          "Accepted Reports": remarksList.filter(rep => rep.accepted === true)?.length,
          "Rejected Reports": remarksList.filter(rep => rep.remarks?.length && rep.accepted === false)?.length,
        },
        fill: true
      }
    },
    {
      title: "Types of Reports Submitted",
      number: remarksList?.map(rep => rep.type).reduce((final, current) => final.includes(current) ? final : [...final, current], []).length,
      chart: {
        type: "progress",
        value: 25,
        text: "25%",
        color: "success"
      }
    },
    {
      title: "Users",
      number: "26",
      chart: {
        type: "line",
        data: {
          "Label 1": 70,
          "Label 2": 60,
          "Label 3": 40,
          "Label 4": 50
        },
      }
    },
    {
      title: "Users",
      number: "26",
    }
  ];

  return ({ chartsData, statisticsData });
};

export default visualRepresentations;
