import { Feedback } from '@/types/feedback';
import styles from '@/styles/feedback.module.scss';
import {
  CARD_WIDTH,
  FEEDBACK_THEME_SET,
  pickThemeByTimestamp,
  snailPositionArray,
} from './variables';

interface Props {
  feedbackList: Feedback[];
}

const FeedbackList = ({ feedbackList }: Props) => {
  return (
    <>
      {feedbackList.map((feedback, i) => {
        const isOutOfRange = i >= snailPositionArray.length;
        const theme = pickThemeByTimestamp(feedback.timestamp);
        return (
          <div
            className={styles.item}
            key={feedback.timestamp}
            style={{
              zIndex: i === 1 ? 1 : 0,
              transform: isOutOfRange
                ? `translate(${-1 * CARD_WIDTH}px, 0)`
                : `translate(
                      ${snailPositionArray[i].row * CARD_WIDTH}px,
                      ${snailPositionArray[i].col * CARD_WIDTH}px
                    )`,
            }}
          >
            <div
              className={styles.card}
              style={{
                background: `
                  linear-gradient(
                    to left top,
                    transparent 50%,
                    ${FEEDBACK_THEME_SET[theme].secondary} 0
                  ) no-repeat 100% 100% / 22px 22px,
                  linear-gradient(
                    to left top,
                    transparent 15.7px,
                    ${FEEDBACK_THEME_SET[theme].primary} 0
                  )`,
              }}
            >
              <p className={styles.text}>{feedback.content}</p>
              <div className={`${styles.shadow} ${styles.shadowRight}`} />
              <div className={`${styles.shadow} ${styles.shadowBottom}`} />
              <div className={`${styles.shadow} ${styles.shadowCorner}`} />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default FeedbackList;
