const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const currentDayIndex = new Date().getDay();
const currentDay = daysOfWeek[currentDayIndex];
document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = `Current Day: ${currentDay}`;


function displayUTCTime() {
    const now = new Date();
    const currentUTCMilliseconds = now.getTime();
    document.querySelector('[data-testid="currentUTCTime"]').textContent = `Current UTC Time: ${currentUTCMilliseconds}ms`;
}

displayUTCTime();


