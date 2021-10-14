import dayjs from 'dayjs';
import {MAX_RATING} from '../const';


// Генерация рейтинга;
export const getRatingWidth = (rating: number): number => Math.round(rating) * 100 / MAX_RATING;

// Конвертер времени через dayjs;
export const getFormatData = (date: string, format: string): string => dayjs(date).format(format);
