const getNowDate = {
  year: new Date().getFullYear().toString(),
  month:
    new Date().getMonth() + 1 < 10
      ? (new Date().getMonth() + 1).toString().padStart(2, '0')
      : (new Date().getMonth() + 1).toString(),
  day:
    new Date().getDate() + 1 < 10
      ? (new Date().getDate() + 1).toString().padStart(2, '0')
      : (new Date().getDate() + 1).toString(),
};

export default getNowDate;
