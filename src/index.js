var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var monthsShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
var daysShort = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
var D = /** @class */ (function () {
    function D(value) {
        this._date = new Date(value);
    }
    Object.defineProperty(D.prototype, "year", {
        get: function () {
            return this._date.getFullYear();
        },
        set: function (n) {
            this._date.setFullYear(n);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(D.prototype, "yr", {
        get: function () {
            return this._date.getFullYear() % 100;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(D.prototype, "month", {
        get: function () {
            return months[this._date.getMonth()];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(D.prototype, "mon", {
        get: function () {
            return monthsShort[this._date.getMonth()];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(D.prototype, "day", {
        get: function () {
            return days[this._date.getDay()];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(D.prototype, "dy", {
        get: function () {
            return daysShort[this._date.getDay()];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(D.prototype, "date", {
        get: function () {
            return this._date.getDate();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(D.prototype, "hours", {
        get: function () {
            return this._date.getHours();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(D.prototype, "mins", {
        get: function () {
            return this._date.getMinutes();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(D.prototype, "secs", {
        get: function () {
            return this._date.getSeconds();
        },
        enumerable: false,
        configurable: true
    });
    D.prototype.format = function (mask) {
        if (mask === void 0) { mask = ''; }
        if (mask === '') {
            return "".concat(this.month, " ").concat(this.date, ", ").concat(this.year);
        }
        var dateStr = '';
        var dateComponents = {
            'Y': this.year,
            'y': this.yr,
            'M': this.month,
            'm': this.mon,
            'd': this.date,
            'h': this.hours,
            'i': this.mins,
            's': this.secs
        };
        var suffixes = {
            1: 'st',
            21: 'st',
            31: 'st',
            2: 'nd',
            22: 'nd',
            3: 'rd',
            23: 'rd'
        };
        for (var i = 0; i < mask.length; i += 1) {
            var newStr = mask[i] in dateComponents ? dateComponents[mask[i]] : mask[i];
            switch (mask[i]) {
                case 'D':
                    newStr = this.date < 10 ? "0".concat(this.date) : this.date;
                    break;
                case 'H':
                    newStr = this.hours < 10 ? "0".concat(this.hours) : this.hours;
                    break;
                case 'I':
                    newStr = this.mins < 10 ? "0".concat(this.mins) : this.mins;
                    break;
                case 'S':
                    newStr = this.secs < 10 ? "0".concat(this.secs) : this.secs;
                    break;
                case '#':
                    var suffix = this.date in suffixes ? suffixes[this.date] : 'th';
                    newStr = "".concat(this.date).concat(suffix);
                    break;
                default:
                // console.log('default', newStr)
            }
            dateStr += newStr;
        }
        return dateStr;
    };
    D.prototype.when = function () {
        var today = new D();
        var diff = this._date.getUTCSeconds() - today._date.getUTCSeconds();
        if (diff < 0) {
            return 'this day already passed!';
        }
        if (today.month === this.month && today.year === this.year && today.day === this.day) {
            return 'today';
        }
        var days = diff / 1000 / 60 / 60 / 24;
        var months = days / 30;
        if (days < 30) {
            return "".concat(Math.floor(days), " days from now");
        }
        else if (months < 12) {
            return "".concat(Math.floor(months), " months from now");
        }
        else {
            return Math.floor(months / 12) > 1 ? "".concat(Math.floor(months / 12), " years from now") : "1 year from now";
        }
    };
    return D;
}());
// const date = new D()
// console.log(date.year)
// console.log(date.yr)
// date.year = 1975
// console.log(date.yr)
// console.log(date.month)
// console.log(date.mon)
// console.log(date.day)
// console.log(date.dy)
// console.log(date.hours, date.mins, date.secs)
// // console.log(date.format('M/d/y'))
// // console.log(date.format('m # y'))
// const date2 = new D('jan 3 2003')
// date2.year = 2024
// console.log('Hello', date.year, date.yr)
// console.log(date2.format('Y-M-D h:I:S'))
// console.log(date2.when())
module.exports.D = D;
