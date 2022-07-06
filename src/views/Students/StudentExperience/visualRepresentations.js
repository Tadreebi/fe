const visualRepresentations = experiences => {

  const statisticsData = [
    {
      title: "Submitted experiences",
      number: experiences.length,
      chart: {
        type: "bar",
        data: {

          "experiences": experiences.length,
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

  return ({ statisticsData });
};

export default visualRepresentations;
