import { Feedback } from '@/types/feedback';
import styles from '@/styles/feedback.module.scss';
import { CARD_WIDTH } from './variables';

interface Props {
  feedbackList: Feedback[];
}

const FeedbackList = ({ feedbackList }: Props) => {
  return (
    <>
      {feedbackList.map((feedback, i) => {
        return (
          <div
            className={styles.item}
            key={feedback.timestamp}
            style={{
              transform: `translate(${(i % 5) * CARD_WIDTH}px, ${
                Math.floor(i / 5) * CARD_WIDTH
              }px)`,
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
