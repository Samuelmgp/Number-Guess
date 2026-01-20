export default function random(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(min + (max - min + 1) * Math.random());
}