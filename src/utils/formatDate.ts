import { format } from 'date-fns';

export const formatDate = (date: string) => {
  if (date) {
    return format(Date.parse(date), 'MMM dd, yyyy');
  }
};

export const formatAxisDate = (seconds: number) => {
  if (seconds) {
    return format(seconds * 1000, 'dd.MM.yyyy');
  }
};

export const formatMStoDate = (milliseconds: number) => {
  if (milliseconds) {
    return format(milliseconds, 'dd.MM.yyyy');
  }
};
