import { isApi } from "../conf";

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
  static formatPerf(performanceData) {
    console.log(performanceData);
    if (!isApi) {
      return Object.entries(performanceData).map(([perf, value]) => ({
        perf: perf.charAt(0).toUpperCase() + perf.slice(1),
        value,
      }));
    } else {
      return performanceData.data.map((data) => ({
        perf: performanceData.kind[data.kind],
        value: data.value,
      }));
    }
  }
}
