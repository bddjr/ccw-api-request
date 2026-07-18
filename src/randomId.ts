export function getRandomId() {
  let tmp = "";
  for (let i = 0; i < 4; i++) {
    tmp += Math.round(Math.random() * 4096)
      .toString(16)
      .padStart(0);
  }
  return tmp;
}