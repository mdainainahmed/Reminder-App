document.querySelectorAll("button").forEach((element) => {
  element.addEventListener("click", setReminder);
});

function getDayName(date) {
  const options = { weekday: "long" };
  return new Intl.DateTimeFormat("en-US", options).format(date);
}

function setReminder() {
  const selectedDay = document.getElementById("daySelector").value;
  const selectedTime = document.getElementById("timeSelector").value;
  const selectedActivity = document.getElementById("activitySelector").value;

  const currentDate = new Date();
  const dayName = getDayName(currentDate);

  if (selectedDay === dayName) {
    const currentTime = new Date();
    const reminderTime = new Date(
      currentTime.toDateString() + " " + selectedTime
    );

    if (reminderTime < currentTime) {
      reminderTime.setDate(reminderTime.getDate() + 1);
    }

    const timeUntilReminder = reminderTime - currentTime;

    setTimeout(() => {
      playSound();
      alert(`Time for ${selectedActivity} on ${selectedDay}`);
    }, timeUntilReminder);
  }
}

function playSound() {
  const audio = new Audio("music.mp3");
  audio.play();
}
