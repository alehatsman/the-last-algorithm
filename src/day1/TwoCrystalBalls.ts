export default function two_crystal_balls(breaks: boolean[]): number {
  const jmpAmnt = Math.floor(Math.sqrt(breaks.length));

  let i = jmpAmnt;
  for (; i < breaks.length; i += jmpAmnt) {
    if (breaks[i]) {
      break;
    }
  }

  i -= jmpAmnt;
  for (let j = 0; j < jmpAmnt && i < breaks.length; j++, i++) {
    if (breaks[i]) {
      return i;
    }
  }

  return -1;
}
