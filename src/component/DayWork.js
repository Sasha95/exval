export function daysInMonth(x, y) {
  return (
    28 +
    ((x + Math.floor(x / 8)) % 2) +
    (2 % x) +
    Math.floor(
      (1 +
        (1 - (((y % 4) + 2) % ((y % 4) + 1))) *
          (((y % 100) + 2) % ((y % 100) + 1)) +
        (1 - (((y % 400) + 2) % ((y % 400) + 1)))) /
        x
    ) +
    Math.floor(1 / x) -
    Math.floor(
      ((1 - (((y % 4) + 2) % ((y % 4) + 1))) *
        (((y % 100) + 2) % ((y % 100) + 1)) +
        (1 - (((y % 400) + 2) % ((y % 400) + 1)))) /
        x
    )
  );
}

export function WeekDay(iYear, iMonth, iDay) {
  return ["вс", "пн", "вт", "ср", "чт", "пт", "сб"][
    new Date(iYear, iMonth - 1, iDay).getDay()
  ];
}

export function dateAndName(month, begin = 1) {
  if (begin < 1 || begin > 31) {
    begin = 1;
  }

  let end = begin + 9;
  const year = new Date().getFullYear();
  month = Number(month) + 1;
  let lastdayofmonth = daysInMonth(month, year);
  let weekend = false;
  const dict = {};

  for (begin; begin < end; begin++) {
    if (begin >= lastdayofmonth + 1) {
      break;
    }
    let day = WeekDay(year, month, begin);

    if (day === "сб" || day === "вс") {
      weekend = true;
    } else {
      weekend = false;
    }
    dict[begin] = [day, weekend];
  }

  return dict;
}
