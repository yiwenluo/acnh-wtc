import { DATA_BUGS } from './data/bugs';
import { DATA_FISH } from './data/fish';
import { ICON_BUGS } from './data/bugs-icon';
import { ICON_FISH } from './data/fish-icon';


export class DataStore {

  constructor() {
    this.bugs = this.computeBugData(DATA_BUGS, ICON_BUGS);
    this.fish = this.computeFishData(DATA_FISH, ICON_FISH);
  }

  computeBugData(data, icons = []) {
    return data.map((item, index) => {
      const time = this.parseTime_(item.time);
      const { hemi, months } = this.parseMonth_(item.month);
      const icon = this.findIcon_(item.name, index, icons);
      return new Bug(item.id, item.name, icon, item.location, 
        this.parseValue_(item.value), time, hemi, months);
    });
  }

  computeFishData(data, icons = []) {
    return data.map((item, index) => {
      const time = this.parseTime_(item.time);
      const { hemi, months } = this.parseMonth_(item.month);
      const icon = this.findIcon_(item.name, index, icons);
      return new Fish(item.id, item.name, icon, item.location, 
        this.parseValue_(item.value), time, hemi, months, item.size);
    });
  }

  findIcon_(name, index, icons) {
    let icon = icons[index];
    const token = name.toLowerCase().replace(' ', '').replace('-', '');
    if (!icon || icon.indexOf(token) <= 0) {
      icon = icons.find((url) => {
        return url.indexOf(token) > 0;
      })
    } 
    return icon;
  }

  parseValue_(value) {
    return Number(value.replace(',', ''));
  }

  parseTime_(timeStr) {
    const regex = /\s/gi;
    let time = timeStr.replace(regex, '');
    return time.toUpperCase();
  }

  parseMonth_(monthStr) {
    // TODO: show better month
    return {hemi: 'nornthern', months: monthStr};
  }

}

class Catchable {
  constructor(id, name, icon, location, value, time, hemi, months) {
    this.id = id;
    this.name = name;
    this.icon = icon;
    this.location = location;
    this.value = value;
    this.time = time;
    this.hemi = hemi;
    this.months = months;
  }
}

export class Bug extends Catchable {

  // constructor(id, name, location, value, time, hemi, months) {
  //   super(id, name, location, value, time, hemi, months);
  // }
}

export class Fish extends Catchable {

  constructor(id, name, icon, location, value, time, hemi, months, size) {
    super(id, name, icon, location, value, time, hemi, months);
    this.size = size;
  }
}