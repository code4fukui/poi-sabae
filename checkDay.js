import { Day } from "https://js.sabae.cc/DateTime.js";

export const checkDay = (desc, day) => {
  desc = desc.replace(/祝日/g, ""); // 祝日 非対応
  desc = desc.replace(/日間/, ""); // 正月３日間 非対応
  const week = day.getWeekJA();
  return desc.indexOf(week) >= 0;
};
