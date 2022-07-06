const visualRepresentations = feedbackList => {


  const five = feedbackList.filter(rep => rep.rating === 5)?.length
  const four = feedbackList.filter(rep => rep.rating === 4)?.length
  const three = feedbackList.filter(rep => rep.rating === 3)?.length
  const two = feedbackList.filter(rep => rep.rating === 2)?.length
  const one = feedbackList.filter(rep => rep.rating === 1)?.length
  const avgRating = (five * 5 + four * 4 + three * 3 + two * 2 + one * 1) / (five + four + three + two + one)

  const statisticsData = [
    {
      title: "Avarage Rating",
      number: avgRating,
    }
  ];

  const chartsData = [
    {
      title: "Ratings",
      type: "pie",
      data: {
        "5-Star": feedbackList.filter(rep => rep.rating === 5)?.length,
        "4-Star": feedbackList.filter(rep => rep.rating === 4)?.length,
        "3-Star": feedbackList.filter(rep => rep.rating === 3)?.length,
        "2-Star": feedbackList.filter(rep => rep.rating === 2)?.length,
        "1-Star": feedbackList.filter(rep => rep.rating === 1)?.length,
      }
    }
  ]

  return ({ chartsData, statisticsData });
};

export default visualRepresentations;
