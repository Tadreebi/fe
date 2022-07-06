const visualRepresentations = goals => {


  const statisticsData = [
    {
      title: "Goals Set",
      number: goals.length,
      chart: {
        type: "bar",
        data: {
          "Done": goals?.filter(rep => rep.done !== true)?.length,
          "Not Done": goals?.filter(rep => rep.done === true)?.length,
        },
        fill: true
      }
    },
    {
      title: "Accomplished Goals",
      number: goals?.filter(rep => rep.done !== true)?.length,
      chart: {
        type: "progress",
        value: (goals?.filter(rep => rep.done !== true)?.length / goals?.length * 100),
        text: `${(goals?.filter(rep => rep.done !== true)?.length / goals?.length * 100)}%`,
        color: "success"
      }
    },
  ];

  return ({ statisticsData });
};

export default visualRepresentations;
