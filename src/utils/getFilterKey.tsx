export function getFilterKey(style: string) {
  switch (style) {
    case "All":
      return "";
    case "Motion":
      return ".mp4";
    default:
      return ".jpg";
  }
}
