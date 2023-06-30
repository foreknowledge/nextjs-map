import styles from '@/styles/feedback.module.scss';
import { Feedback } from '@/types/feedback';
import { ChangeEvent } from 'react';
import FeedbackList from './FeedbackList';
import NewFeedbackInput from './NewFeedbackInput';

interface Props {
  feedbackList: Feedback[];
  newFeedbackContent?: Feedback['content'];
  onChangeNewFeedbackContent?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

const FeedbackBoard = ({
  feedbackList,
  newFeedbackContent,
  onChangeNewFeedbackContent,
}: Props) => {
  return (
    <div className={styles.feedbackBoard}>
      <FeedbackList feedbackList={feedbackList} />
      {newFeedbackContent !== undefined && onChangeNewFeedbackContent && (
        <NewFeedbackInput
          newFeedbackContent={newFeedbackContent}
          onChangeNewFeedbackContent={onChangeNewFeedbackContent}
        />
      )}
    </div>
  );
};

export default FeedbackBoard;
