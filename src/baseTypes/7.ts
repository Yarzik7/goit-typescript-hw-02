/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Workweek {
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
  Thursday = "Thursday",
  Friday = "Friday",
}

enum WeekendDays {
  Saturday = "Saturday",
  Sunday = "Sunday",
}

type Day = Workweek | WeekendDays;

function isWeekend(day: Day): day is WeekendDays {
  return day in WeekendDays;
}
