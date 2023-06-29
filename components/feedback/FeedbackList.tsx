import { Feedback } from '@/types/feedback';
import styles from '@/styles/feedback.module.scss';
import { CARD_WIDTH, snailPositionArray } from './variables';

interface Props {
  feedbackList: Feedback[];
}

const FeedbackList = ({ feedbackList }: Props) => {
  return (
    <>
      {feedbackList.map((feedback, i) => {
        const isOutOfRange = i >= snailPositionArray.length;
        return (
          <div
            className={styles.item}
            key={feedback.timestamp}
            style={{
              transform: isOutOfRange
                ? `translate(${-1 * CARD_WIDTH}px, 0)`
                : `translate(
                    ${snailPositionArray[i].row * CARD_WIDTH}px,
                    ${snailPositionArray[i].col * CARD_WIDTH}px
                  )`,
            }}
          >
            <div className={styles.card}>
              <p className={styles.text}>{feedback.content}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default FeedbackList;
