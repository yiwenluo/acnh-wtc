import { DATA_BUGS } from './data/bugs';
import { DATA_FISH } from './data/fish';
import { ICON_BUGS } from './data/bugs-icon';
import { ICON_FISH } from './data/fish-icon';
import {monthToNumber} from './time-utils';
import {Bug, Fish} from './catchable';



export class DataStore {

  constructor() {
    this.bugs = this.computeBugData(DATA_BUGS, ICON_BUGS);
    this.fish = this.computeFishData(DATA_FISH, ICON_FISH);
  }

  computeBugData(data, icons = []) {
    return data.map((item, index) => {
      const timeData = this.parseTimeData_(item.time, item.month);
      const icon = this.findIcon_(item.name, index, icons);
      return new Bug(item.id, item.name, icon, item.location, 
        this.parseValue_(item.value), timeData);
    });
  }

  computeFishData(data, icons = []) {
    return data.map((item, index) => {
      const timeData = this.parseTimeData_(item.time, item.month);
      const icon = this.findIcon_(item.name, index, icons);
      return new Fish(item.id, item.name, icon, item.location, 
        this.parseValue_(item.value), timeData, item.size);
    });
  }

  findIcon_(name, index, icons) {
    let icon = icons[index];
    const token = `-${
      name.toLowerCase().replace(/[\s\-\\]]/g, '')}.`;
    if (!icon || icon.indexOf(token) <= 0) {
      icon = icons.find((url) => {
        return url.indexOf(token) > 0;
      })
    } 
    if (!icon) {
      console.log(name)
    }
    return icon;
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
