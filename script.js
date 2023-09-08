const date = new Date()

const day = document.querySelector('[data-testid=currentDayOfTheWeek]')
const currentTime = document.querySelector('[data-testid=currentUTCTime')


const weekDays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

day.textContent = weekDays[date.getUTCDay()]
currentTime.textContent = date.getTime()