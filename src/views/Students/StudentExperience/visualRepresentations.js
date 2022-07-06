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

  ];

  return ({ statisticsData });
};

export default visualRepresentations;
