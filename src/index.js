const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const monthsShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
const daysShort = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

class D {
  constructor(...args) {
    this._date = new Date(...args);
  }

  get year() {
    return this._date.getFullYear()
  }

  set year(n) {
    this._date.setFullYear(n)
  }

  get yr() {
    return this._date.getFullYear() % 100
  }

  get month() {
    return months[this._date.getMonth()]
  }

  get mon() {
    return monthsShort[this._date.getMonth()]
  }

  get day() {
    return days[this._date.getDay()]
  }

  get dy() {
    return daysShort[this._date.getDay()]
  }

  get date() {
    return this._date.getDate()
  }

  get hours() {
    return this._date.getHours()
  }

  get mins() {
    return this._date.getMinutes()
  }

  get secs() {
    return this._date.getSeconds()
  }

  format(mask = '') {
    if (mask === '') {
      return `${this.month} ${this.date}, ${this.year}`
    }

    let dateStr = '';

    const dateComponents = {
      'Y': this.year,
      'y': this.yr,
      'M': this.month,
      'm': this.mon,
      'd': this.date,
      'h': this.hours,
      'i': this.mins,
      's': this.secs,
    }

    for (let i = 0; i < mask.length; i += 1) {
      let newStr = mask[i] in dateComponents ? dateComponents[mask[i]] : mask[i]
      console.log(mask[i], newStr)
      switch(mask[i]) {
        case 'D':
          newStr = this.date < 10 ? `0${this.date}` : this.date
        case 'H':
          newStr = this.hours < 10 ? `0${this.hours}` : this.hours
        case 'I':
          newStr = this.mins < 10 ? `0${this.mins}` : this.mins
        case 'S': 
          newStr = this.secs < 10 ? `0${this.secs}` : this.secs
      }
      dateStr += newStr;
    }

    return dateStr
  }
}

const date = new D()
console.log(date.year)
console.log(date.yr)
date.year = 1975
console.log(date.yr)
console.log(date.month)
console.log(date.mon)
console.log(date.day)
console.log(date.dy)
console.log(date.hours, date.mins, date.secs)
console.log(date.format('M/d/y'))