// "DD/MM/YYYY HH:MM";
export function getDateAndHour() {
  const date = new Date();
  return buildDate(date) + " " + buildHour(date);
}

export function buildDate(date: Date) {
  return (
    ("00" + date.getDate()).slice(-2) +
    "/" +
    ("00" + (date.getMonth() + 1)).slice(-2) +
    "/" +
    date.getFullYear()
  );
}

export function buildHour(date: Date) {
  return (
    ("00" + date.getHours()).slice(-2) +
    ":" +
    ("00" + date.getMinutes()).slice(-2)
  );
}
