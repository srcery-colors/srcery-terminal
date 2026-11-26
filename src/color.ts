export function lower(hex: string): string {
  return hex.toLowerCase();
}

export function double(hex: string): string {
  const digits = hex.slice(1);
  const red = digits.slice(0, 2);
  const green = digits.slice(2, 4);
  const blue = digits.slice(4, 6);
  return `#${red}${red}${green}${green}${blue}${blue}`.toLowerCase();
}

export function sub(hex: string, index = 1): string {
  return hex.substring(index).toLowerCase();
}

export function join(values: readonly unknown[], separator = ","): string {
  return values.join(separator);
}

export function avgRGB(value: number): number {
  return value / 255;
}
