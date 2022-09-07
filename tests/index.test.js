const dateLib = require('../src/index')

const date = new dateLib.D('jan 1 1994')
const jsDate = new Date('jan 1 1994')

test('year returns full year', () => {
  expect(date.year).toEqual(1994)
})

test('yr returns shortened year', () => {
  expect(date.yr).toEqual(94)
})

test('month returns spelled out month', () => {
  expect(date.month).toEqual('January')
})

test('mon returns shorthand month', () => {
  expect(date.mon).toEqual('Jan')
})

test('day returns spelled out day', () => {
  expect(date.day).toEqual('Sunday')
})

test('dy returns shorthand day', () => {
  expect(date.dy).toEqual('Sun')
})

test('date returns date', () => {
  expect(date.date).toEqual(1)
})

test('hours returns hours', () => {
  expect(date.hours).toEqual(jsDate.getHours())
})

test('mins returns minutes', () => {
  expect(date.mins).toEqual(jsDate.getMinutes())
})

test('secs returns seconds', () => {
  expect(date.secs).toEqual(jsDate.getSeconds())
})

test('format method returns formatted date', () => {
  expect(date.format('y/m/d')).toEqual('94/Jan/1')
  expect(date.format('H:I:S')).toEqual('00:00:00')
  expect(date.format('h:i:s')).toEqual('0:0:0')
  expect(date.format('Y-M-# h:I:S')).toEqual('1994-January-1st 0:00:00')
})