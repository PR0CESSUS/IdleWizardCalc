//@ts-nocheck
export function secondsToTime(seconds, spread = true) {
  seconds = parseInt(seconds);
  let output = "";
  let c = Math.floor(seconds / 3153600000);
  let y = Math.floor((seconds % 3153600000) / 31536000);
  let d = Math.floor((seconds % 31536000) / 86400);
  let h = Math.floor((seconds % 86400) / 3600);
  let m = Math.floor((seconds % 3600) / 60);
  let s = Math.floor(seconds % 60);

  //   if (h < 10) h = "0" + h;
  //   if (m < 10) m = "0" + m;
  //   if (s < 10) s = "0" + s;

  output = `${c}c${y}y${d}d${h}h${m}m${s}s`;
  if (c) return `${c}c${y}y${d}d${h}h${m}m${s}s`;
  if (y) return `${y}y${d}d${h}h${m}m${s}s`;
  if (d) return `${d}d${h}h${m}m${s}s`;

  return `${h}h${m}m${s}s`;
}
