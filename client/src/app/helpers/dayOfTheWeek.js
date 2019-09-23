import { getDay } from 'date-fns';

const arr = ['Нд', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];

export const dayOfTheWeek = (date) => {
  return arr[getDay(date)];
};

export default dayOfTheWeek;
