document.querySelectorAll("button").forEach((element) => {
  element.addEventListener("click", setReminder);
});

function setReminder() {
  const selectedDay = document.getElementById("daySelector").value;
  const selectedTime = document.getElementById("timeSelector").value;
  const selectedActivity = document.getElementById("activitySelector").value;

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

function playSound() {
  const audio = new Audio("music.mp3");
  audio.play();
}
