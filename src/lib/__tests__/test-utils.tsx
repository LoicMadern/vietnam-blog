import { buildDate, buildHour } from "../utils";

const event = new Date("August 19, 1975 23:15:30");

test("expected hour format HH:MM", () => {
  const expected_hour_format = "23:15";
  expect(buildHour(event)).toMatch(expected_hour_format);
});

test("expected midnight", () => {
  const midnight = new Date("August 19, 1975 00:00:30");
  const expected_hour_format = "00:00";
  expect(buildHour(midnight)).toMatch(expected_hour_format);
});

test("expected date format DD/MM/YYYY", () => {
  const expected_date_format = "19/08/1975";
  expect(buildDate(event)).toMatch(expected_date_format);
});
