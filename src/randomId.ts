export function getRandomId() {
  let tmp = "";
  for (; tmp.length < 32;) {
    tmp += (0 | Math.random() * 16).toString(16);
  }
  return tmp;
}