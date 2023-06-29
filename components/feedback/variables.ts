import { Feedback } from '@/types/feedback';
import { generateSnailPositionArray } from './functions';

export const SNAIL_SIDE_LENGTH = 11;
export const CARD_WIDTH = 200;
export const BOARD_WIDTH = CARD_WIDTH * SNAIL_SIDE_LENGTH;
export const MAX_CONTENT_LENGTH = 80;

export const snailPositionArray =
  generateSnailPositionArray(SNAIL_SIDE_LENGTH).reverse();

export const FEEDBACK_THEME_SET = {
  lightpurple: {
    primary: '#f7edfe',
    secondary: '#d8c3e7',
  },
  purple: {
    primary: '#e2c2fa',
    secondary: '#b691d2',
  },
  red: {
    primary: '#fac6c2',
    secondary: '#da9691',
  },
  green: {
    primary: '#dafac2',
    secondary: '#9ad3b5',
  },
  mint: {
    primary: '#c2f6fa',
    secondary: '#8ac4c8',
  },
} as const;

export const pickThemeByTimestamp = (
  timestamp: number
): keyof typeof FEEDBACK_THEME_SET => {
  switch (timestamp % Object.keys(FEEDBACK_THEME_SET).length) {
    case 0:
      return 'lightpurple';
    case 1:
      return 'purple';
    case 2:
      return 'red';
    case 3:
      return 'green';
    case 4:
      return 'mint';
  }
  return 'lightpurple';
};

export const generateNewFeedback = (
  content?: Feedback['content'],
  timestamp?: Feedback['timestamp']
): Feedback => ({
  content: content ?? '',
  timestamp: timestamp ?? Date.now(),
});
