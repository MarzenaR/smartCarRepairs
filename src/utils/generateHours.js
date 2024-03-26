const generateHours = (minHour, minMinute) => {
  const startHour = minMinute <= 45 ? minHour : minHour + 1;

  const hours = [];

  for (let i = startHour; i <= 23; i++) {
    if (i > minHour || (i === minHour && minMinute === 0)) {
      hours.push(`${i}:00`);
    }

    [15, 30, 45].forEach((time) => {
      if (i > minHour || (i === minHour && time >= minMinute)) {
        hours.push(`${i}:${time}`);
      }
    });
  }

  return hours;
};

export default generateHours;
