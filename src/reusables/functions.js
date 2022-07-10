const dateRangeFormatter = (date, position, secDate) => (
  position === "start" ? (
    new Date(date).getFullYear() === new Date(secDate).getFullYear() ? (
      new Date(date).getMonth() === new Date(secDate).getMonth() ? (
        `${new Date(date).getDate() < 10 ? `0${new Date(date).getDate()}` : new Date(date).getDate()}`
      ) : (
        `${new Date(date).getDate() < 10 ? `0${new Date(date).getDate()}` : new Date(date).getDate()}/${new Date(date).getMonth() + 1 < 10 ? `0${new Date(date).getMonth() + 1}` : new Date(date).getMonth() + 1}`
      )
    ) : (
      new Date(date).toLocaleDateString('en-GB')
    )
  ) : (
    new Date(date).toLocaleDateString('en-GB')
  )
);

export {
  dateRangeFormatter
};
