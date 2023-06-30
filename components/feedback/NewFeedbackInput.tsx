import { Feedback } from '@/types/feedback';
import { ChangeEvent } from 'react';
import styles from '@/styles/feedback.module.scss';
import { FEEDBACK_THEME_SET, MAX_CONTENT_LENGTH } from './variables';

interface Props {
  newFeedbackContent: Feedback['content'];
  onChangeNewFeedbackContent: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

const NewFeedbackInput = ({
  newFeedbackContent,
  onChangeNewFeedbackContent,
}: Props) => {
  return (
    <div className={`${styles.item} ${styles.inputItem}`}>
      <div
        className={styles.card}
        style={{
          background: `linear-gradient(
              to left top,
              transparent 50%,
              ${FEEDBACK_THEME_SET['lightpurple'].secondary} 0
            ) no-repeat 100% 100% / 22px 22px,
            linear-gradient(
              to left top,
              transparent 15.7px,
              ${FEEDBACK_THEME_SET['lightpurple'].primary} 0
            )`,
        }}
      >
        <textarea
          className={styles.text}
          value={newFeedbackContent}
          onChange={onChangeNewFeedbackContent}
          placeholder="피드백을 적어주세요!"
          maxLength={MAX_CONTENT_LENGTH}
        />
        <p className={styles.textLength}>
          {`${newFeedbackContent.length} / ${MAX_CONTENT_LENGTH}`}
        </p>
      </div>
    </div>
  );
};

export default NewFeedbackInput;
