import { Day } from "https://js.sabae.cc/DateTime.js";
import { checkDay } from "./checkDay.js";
import * as t from "https://deno.land/std/testing/asserts.ts";

/*
木曜日・土曜日午前
土曜日・日曜日・祝日、夏季・冬季休業
日・月曜日、不定休あり
土曜日・日曜日・祝日
正月３日間
日曜日
日曜日・祝日
火曜日
水曜日
*/

Deno.test("simple", () => {
  const day = new Day("2024-04-26"); // fri
  t.assertEquals(checkDay("金", day), true);
  t.assertEquals(checkDay("木", day), false);
  t.assertEquals(checkDay("金曜日", day), true);
  t.assertEquals(checkDay("木金", day), true);
});
Deno.test("祝日 - 非対応", () => {
  const day0 = new Day("2024-04-26"); // fri
  const day = day0.dayAfter(2); // sun
  t.assertEquals(checkDay("祝日", day), false);
});
Deno.test("正月３日間 - 非対応", () => {
  const day0 = new Day("2024-04-26"); // fri
  const day = day0.dayAfter(2); // sun
  t.assertEquals(checkDay("正月３日間", day), false);
});
