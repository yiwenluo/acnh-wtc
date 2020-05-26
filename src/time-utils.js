
const MONTH = [
  'january',
  'february',
  'march',
  'april',
  'may',
  'june',
  'july',
  'august',
  'september',
  'october',
  'november',
  'december'
];

export function get12HrTime(time) {
  if (time > 12) {
    return `${time - 12}PM`;
  } else if (time >= 0) {
    return `${time}AM`;
  } 
  return '';
}

export function getMonthShort(month) {
  if (month - 1 >= 0) {
    return MONTH[month - 1].slice(0, 3).toUpperCase();
  }
  return '';
}

export function monthToNumber(monthStr) {
  if (monthStr) {
    const index = MONTH.indexOf(monthStr.toLowerCase());
    if (index >= 0) {
      return index + 1;
    }
  } 
  debugger;
  return -1;
}