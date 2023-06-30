import styles from '@/styles/feedback.module.scss';
import { Feedback } from '@/types/feedback';
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { MAX_CONTENT_LENGTH, generateNewFeedback } from './variables';
import { addFeedbackToFirestore } from '@/firebase/feedback';

interface Props {
  newFeedbackContent: Feedback['content'];
  setNewFeedbackContent: Dispatch<SetStateAction<string>>;
  setFeedbackList: Dispatch<SetStateAction<Feedback[]>>;
}

const FeedbackSubmitButton = ({
  newFeedbackContent,
  setNewFeedbackContent,
  setFeedbackList,
}: Props) => {
  // submit 등록 후 10초 동안 disable
  const [secondsLeft, setSecondsLeft] = useState(0);
  const timer = useRef<NodeJS.Timeout | null>(null);
  useEffect(() => {
    if (secondsLeft === 0 && timer.current !== null) {
      clearInterval(timer.current);
      timer.current = null;
    }
  }, [secondsLeft]);

  const appendNewFeedback = useCallback((text: string) => {
    if (
      timer.current !== null ||
      text.trim().length === 0 ||
      text.length > MAX_CONTENT_LENGTH
    ) {
      return;
    }

    // 새로운 피드백 추가
    const newFeedback = generateNewFeedback(text);
    setFeedbackList((prev) => [newFeedback, ...prev.slice(1)]);
    addFeedbackToFirestore(newFeedback);

    setTimeout(() => {
      // 0번째 인덱스에 빈 피드백 추가
      setFeedbackList((prev) => [generateNewFeedback('', 0), ...prev]);
      setNewFeedbackContent('');

      // disable timer 작동
      setSecondsLeft(10);
      timer.current = setInterval(() => {
        setSecondsLeft((second) => second - 1);
      }, 1000);
    }, 0);
  }, []);

  if (newFeedbackContent.trim().length === 0) return null;
  return (
    <button
      className={styles.submitButton}
      onClick={() => appendNewFeedback(newFeedbackContent)}
      disabled={secondsLeft > 0}
    >
      {secondsLeft > 0 ? `${secondsLeft}초만 기다려주세요` : '피드백 등록'}
    </button>
  );
};

export default FeedbackSubmitButton;
