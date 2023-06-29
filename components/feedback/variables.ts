import { Feedback } from '@/types/feedback';

export const SNAIL_SIDE_LENGTH = 11;
export const CARD_WIDTH = 200;
export const BOARD_WIDTH = CARD_WIDTH * SNAIL_SIDE_LENGTH;
export const MAX_CONTENT_LENGTH = 80;

export const generateNewFeedback = (
  content?: Feedback['content'],
  timestamp?: Feedback['timestamp']
): Feedback => ({
  content: content ?? '',
  timestamp: timestamp ?? Date.now(),
});
