function superbowlWin(record) {
  const winRecord = record.find((game) => game.result === "W");

  return winRecord ? winRecord.year : undefined;
}

const record = [
  { year: "2018", result: "L" },
  { year: "2017", result: "W" },
  { year: "2016", result: "N/A" },
];

const winningYear = superbowlWin(record);
console.log(winningYear);
