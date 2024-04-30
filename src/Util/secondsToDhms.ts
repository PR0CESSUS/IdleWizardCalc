//@ts-nocheck
export function secondsToDhms(seconds, spread = true) {
  seconds = parseInt(seconds);
  let output = "";
  let y = Math.floor(seconds / (3600 * 24 * 365));
  let d = Math.floor(seconds / (3600 * 24));
  let h = Math.floor((seconds % (3600 * 24)) / 3600);
  let m = Math.floor((seconds % 3600) / 60);
  let s = Math.floor(seconds % 60);

  if (h < 10) h = "0" + h;
  if (m < 10) m = "0" + m;
  if (s < 10) s = "0" + s;

  output = `${h}h${m}m${s}s`;

  if (y > 0) return `${y}y${d % 365}` + output;
  if (d > 0) output = `${d}d` + output;

  if (d == 0 && h == 0) return `${m}m${s}s`;
  if (d == 0) return `${h}h${m}m${s}s`;
  if (spread) return `${d}d ${h}:${m}:${s}`;
  return output;
}
