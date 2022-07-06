const visualRepresentations = proposals => {

  const chartsData = [
    {
      title: "Submitted proposals",
      type: "pie",
      data: {
        "Pending proposals": proposals?.filter(rep => !rep.remarks?.length && rep.accepted !== true)?.length,
        "Accepted proposals": proposals?.filter(rep => rep.accepted === true)?.length,
        "Rejected proposals": proposals?.filter(rep => rep.remarks?.length && rep.accepted === false)?.length,
      }
    },
    {
      title: "Submitted proposals",
      type: "radar",
      data: [
        {
          title: "Pending Proposals",
          color: "warning",
          data: proposals?.map(rep => rep.student).reduce((company, current) => company.includes(current) ? company : [...company, current], []).reduce((company, student) => ({
            ...company, [student]: proposals?.filter(rep => !rep.remarks?.length && rep.accepted !== true && rep.student === student)?.length,
          }), {}),
        },
        {
          title: "Accepted Proposals",
          color: "success",
          data: proposals?.map(rep => rep.student).reduce((company, current) => company.includes(current) ? company : [...company, current], []).reduce((company, student) => ({
            ...company, [student]: proposals?.filter(rep => rep.accepted === true && rep.student === student)?.length,
          }), {}),
        },
        {
          title: "Rejected Proposals",
          color: "danger",
          data: proposals?.map(rep => rep.student).reduce((company, current) => company.includes(current) ? company : [...company, current], []).reduce((company, student) => ({
            ...company, [student]: proposals?.filter(rep => rep.remarks?.length && rep.accepted === false && rep.student === student)?.length,
          }), {}),
        }
      ]
    },
  ];

  const statisticsData = [
    {
      title: "Submitted proposals",
      number: proposals.length,
      chart: {
        type: "bar",
        data: {
          "Accepted proposals": proposals?.filter(pro => pro.accepted == true).length,
          "Rejected proposals": proposals?.filter(pro => pro.accepted == false).length,
        },
        fill: true
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

  ];

  return ({ statisticsData, chartsData });
};

export default visualRepresentations;
