export function formateDate(dateString: string): string {
  return new Date(dateString).toLocaleString("pl-PL", {
    year: "numeric",
    month: "short",
    day: "numeric",
    minute: "numeric",
  });
}
