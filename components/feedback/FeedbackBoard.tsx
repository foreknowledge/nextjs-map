import FeedbackList from './FeedbackList';
import styles from '@/styles/feedback.module.scss';
import { Feedback } from '@/types/feedback';

interface Props {
  feedbackList: Feedback[];
}

const FeedbackBoard = ({ feedbackList }: Props) => {
  return (
    <div className={styles.feedbackBoard}>
      <FeedbackList feedbackList={feedbackList} />
    </div>
  );
};

export default FeedbackBoard;
