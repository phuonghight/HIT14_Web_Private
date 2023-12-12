const s = "   (Sssda))sdds99sad   99";
const ss = s.replaceAll(/[0-9]|[^a-zA-Z]/g, " ").trim();
let cnt = 0;
for (let i = ss.length - 1; i >= 0; i--) {
  if (ss.charAt(i) === " ") {
    console.log(cnt);
    break;
  }
  cnt++;
}
