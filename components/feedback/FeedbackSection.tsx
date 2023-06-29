import { Feedback } from '@/types/feedback';
import { useState } from 'react';
import FeedbackBoard from './FeedbackBoard';
import { SNAIL_SIDE_LENGTH, generateNewFeedback } from './variables';
import FeedbackBoardContainer from './FeedbackBoardContainer';

interface Props {
  initialFeedbackList: Feedback[];
}

const FeedbackSection = ({ initialFeedbackList }: Props) => {
  // 전체 피드백 리스트
  // - index 0은 Input을 위한 공간이므로 빈 feedback으로 채운다.
  // - index 1부터는 initialFeedbackList로 채우고, 나머지는 빈 feedback으로 채운다.
  const [feedbackList, setFeedbackList] = useState<Feedback[]>(() => [
    generateNewFeedback('', 0),
    ...initialFeedbackList,
    ...Array(
      Math.max(SNAIL_SIDE_LENGTH ** 2 - initialFeedbackList.length - 1, 0)
    )
      .fill(null)
      .map((_, i) => generateNewFeedback('', i + 1)),
  ]);

  return (
    <FeedbackBoardContainer>
      <FeedbackBoard feedbackList={feedbackList} />
    </FeedbackBoardContainer>
  );
};

export default FeedbackSection;
