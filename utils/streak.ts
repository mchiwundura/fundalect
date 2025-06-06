export const getMidWeekDates = (): string[] => {
  const today = new Date();
  const dates: string[] = [];

  for (let offset = -3; offset <= 3; offset++) {
    const d = new Date(today);
    d.setDate(d.getDate() + offset);
    dates.push(d.toISOString().split("T")[0]);
  }

  return dates;
};

export const isToday = (dateStr: string): boolean => {
  const inputDate = new Date(dateStr);
  const today = new Date();

  return (
    inputDate.getDate() === today.getDate() &&
    inputDate.getMonth() === today.getMonth() &&
    inputDate.getFullYear() === today.getFullYear()
  );
};


export const getDayLabel = (dateStr: string): string =>
  new Date(dateStr).toLocaleDateString("en-US", { weekday: "short" }).charAt(0);

export const getDateNumber = (dateStr: string): number =>
  new Date(dateStr).getDate();

export const areConsecutive = (prev: string, next: string): boolean => {
  const prevDate = new Date(prev);
  const nextDate = new Date(next);
  const diff = (nextDate.getTime() - prevDate.getTime()) / (1000 * 3600 * 24);
  return diff === 1;
};