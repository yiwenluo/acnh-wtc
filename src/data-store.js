import { DATA_BUGS } from './data/bugs';
import { DATA_FISH } from './data/fish';
import {monthToNumber} from './time-utils';
import {Bug, Fish} from './catchable';



export class DataStore {

  constructor() {
    this.bugs = this.computeBugData(DATA_BUGS);
    this.fish = this.computeFishData(DATA_FISH);
  }

  computeBugData(data) {
    return data.map((item,) => {
      const timeData = this.parseTimeData_(item.time, item.month);
      const icon = this.getIconUrl_(item.name, './assets/bug');
      return new Bug(item.id, item.name, icon, item.location, 
        this.parseValue_(item.value), timeData);
    });
  }

  computeFishData(data) {
    return data.map((item) => {
      const timeData = this.parseTimeData_(item.time, item.month);
      const icon = this.getIconUrl_(item.name, './assets/fish');
      return new Fish(item.id, item.name, icon, item.location, 
        this.parseValue_(item.value), timeData, item.size);
    });
  }

  getIconUrl_(name, basePath) {
    const token = name.toLowerCase().replace(/[\s\-\\']/g, '');
    return `${basePath}/${token}.png`;
  }

  parseValue_(value) {
    return Number(value.replace(',', ''));
  }

  parseTimeData_(time, month) {
    return {
      hours: this.parseTime_(time),
      months: this.parseMonth_(month),
    };
  }

  parseTime_(time) {
    let hours = [];
    if (time.toLowerCase() === "all day") {
      hours = [0, 24]
    } else if (time) {
      const noSpace = time.replace(/\s/g, '');
      const splitted = noSpace.split('-');
      for (const part of splitted) {
        const regex = /([0-9]+)[ap]\.m\./g;
        let hour = Number(regex.exec(part)[1]);
        if (part.indexOf('p') > 0) {
          hour += 12;
        }
        hours.push(hour);
      }
    }
    return hours;
  }

  parseMonth_(month) {
    let months = [];
    if (month.indexOf("Year-round") >= 0) {
      months = [[1, 12]];
    } else if (months) {
      const northern = month.replace(/\s/g, '').split('/')[0].trim();
      const monthStr = northern.slice(0, northern.indexOf('('));
      for (const part of monthStr.split(',')) {
        const rangeRegex = /([a-z]+)(-([a-z]+))?/gi
        const match = rangeRegex.exec(part);
        const seg = []
        if (match[1]) {
          seg.push(monthToNumber(match[1]));
        }
        if (match[3]) {
          seg.push(monthToNumber(match[3]));
        }
        if (seg.length > 0) {
          months.push(seg);
        }
      }
    }
    return months;
  }
}
