
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
    return `${time - 12}pm`;
  } else if (time >= 0) {
    return `${time}am`;
  } 
  return '';
}

export function getMonthShort(month) {
  if (month - 1 >= 0) {
    const short = MONTH[month - 1].slice(0, 3);
    return short.charAt(0).toUpperCase() + short.slice(1);
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