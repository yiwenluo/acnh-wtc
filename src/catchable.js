
import {get12HrTime, getMonthShort} from './time-utils';

class Catchable {
  constructor(id, name, icon, location, value, timeData) {
    this.id = id;
    this.name = name;
    this.icon = icon;
    this.location = location;
    this.value = value;
    this.timeData = timeData;
  }

  available(isNorthernHemi, month, hour) {
    for (const seg of this.timeData.months) {
      let monthStart = seg[0];
      let monthEnd = seg[1];
      if (!isNorthernHemi) {
        monthStart = (monthStart + 6) % 12;
        monthEnd = (monthEnd + 6) % 12;
      }

      let inMonthRange = false;
      if (monthStart < monthEnd) {
        if (month >= monthStart && month <= monthEnd) {
          inMonthRange = true;
        }
      } else {
        if (month >= monthStart || month <= monthEnd) {
          inMonthRange = true;
        }
      }

      if (inMonthRange) {
        let hourStart = this.timeData.hours[0];
        let hourEnd = this.timeData.hours[1];

        let inHourRange = false
        if (hourStart < hourEnd) {
          if (hour >= hourStart && hour <= hourEnd) {
            inHourRange = true;
          }
        } else {
          if (hour >= hourStart || hour <= hourEnd) {
            inHourRange = true;
          }
        }

        if (inHourRange) {
          return true;
        }
      }
    }
    return false;
  }

  getDisplaySize() {
    return this.size && this.size.replace('/\s/g', '');
  }

  getDisplayTime() {
    const startTime = this.timeData.hours[0];
    const endTime = this.timeData.hours[1];
    if (startTime === 0 && endTime === 24) {
      return 'All day';
    }

    const start = get12HrTime(startTime);
    const end  = get12HrTime(endTime);
    let text = 'N/A';
    if (start) {
      text = `${start}`;
      if (end) {
        text = `${text}-${end}`;
      }
      return text;
    }
    return text;
  }

  getDisplayMonth() {
    let text = '';
    for (const seg of this.timeData.months) {
      const start = seg[0];
      const end = seg[1];
      if (start === 1 && end === 12) {
        return "All Year";
      }

      if (text) {
        text += ' '; // Add a space as delimiter.
      }
      const startStr = getMonthShort(start);
      const endStr  = getMonthShort(end);
      if (startStr) {
        text += `${startStr}`;
        if (endStr) {
          text += `-${endStr}`;
        }
      }
    }
    if (!text) {
      text = 'N/A';
    }
    return text;
  }
}

export class Bug extends Catchable {
}

export class Fish extends Catchable {

  constructor(id, name, icon, location, value, timeData, size) {
    super(id, name, icon, location, value, timeData);
    this.size = size;
  }
}