const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const currentDayIndex = new Date().getDay();
const currentDay = daysOfWeek[currentDayIndex];
document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = `Current Day: ${currentDay}`;

function updateUTCTime() {
    const currentUTC = new Date().toUTCString();
    document.querySelector('[data-testid="currentUTCTime"]').textContent = `Current UTC Time: ${currentUTC}`;
}
// Update the UTC time every second
setInterval(updateUTCTime, 1000);

document.querySelector('[ data-testid="slackUserName"]').textContent = 'Ukaoha Chizoba'
document.querySelector('[  data-testid="myTrack"]').textContent = 'Track:   Frontend'
// github
const githubURL = "https://github.com/yourusername/your-repo";
const githubLink = document.querySelector('[data-testid="githubURL"]');
githubLink.href = githubURL;
githubLink.textContent = "My GitHub Repository";

// img
const profileImg = "image/profile.jpg"; 
const slackDisplayImage = document.querySelector('[data-testid="slackDisplayImage"]');
slackDisplayImage.src = profileImg;
slackDisplayImage.alt = "ukaoha chizoba"; 
