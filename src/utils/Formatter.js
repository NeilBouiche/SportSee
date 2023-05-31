export default class Formatter {
  static formatDay(day) {
    return day.slice(-1);
  }
  static formatDayLetter(day) {
    const days = ["L", "M", "M", "J", "V", "S", "S"];
    if (day >= 1 && day <= 7) {
      return days[day - 1];
    }
  }
}
