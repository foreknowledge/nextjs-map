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
    color: '#f7edfe',
  },
  purple: {
    color: '#e2c2fa',
  },
  red: {
    color: '#fac6c2',
  },
  green: {
    color: '#dafac2',
  },
  mint: {
    color: '#c2f6fa',
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
