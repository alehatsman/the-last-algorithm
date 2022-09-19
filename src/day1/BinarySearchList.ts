export default function bs_list(haystack: number[], needle: number): boolean {
  let l = 0;
  let r = haystack.length;

  while (l < r) {
    let m = Math.floor(l + (r - l) / 2);
    let v = haystack[m];

    if (needle === v) {
      return true;
    } else if (needle > v) {
      l = m + 1;
    } else if (needle < v) {
      r = m;
    }
    console.log(l, r, m, v, needle);
  }

  return false;
}
