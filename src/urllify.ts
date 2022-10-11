export function urllify(url: string, stringLength: number): string {
  const realString = url.substring(0, stringLength);
  const urlifyString = realString.replace(new RegExp(" ", "g"), "%20");
  return urlifyString;
}
