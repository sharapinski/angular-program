export interface ICourse{
  title: string;
  order: number;
  duration: Date;
  date: Date;
  description: string;

  getTitle(): string;
  setTitle(title: string): ICourse;

  getOrder(): number;
  setOrder(order: number): ICourse;

  getDuration(): Date;
  setDuration(duration: Date): ICourse;

  getDate(): Date;
  setDate(date: Date): ICourse;

  getDescription(): string;
  setDescription(description: string): ICourse;
}
