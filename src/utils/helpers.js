const getDaysPast = (timestamp) => {
  const startOfDay = new Date().setHours(0, 0, 0, 0);
  const dayMs = 86400000;
  const dayDifference = (timestamp - startOfDay) / dayMs;

  if (dayDifference < 1) {
    return "bugün";
  }

  if (dayDifference < 2) {
    return "dün";
  }

  if (dayDifference < 7) {
    return dayDifference + " gün";
  }

  if (dayDifference >= 7 && dayDifference <= 28) {
    return (dayDifference % 7) + " hafta";
  }
};

export { getDaysPast };
