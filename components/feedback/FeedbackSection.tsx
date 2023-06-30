import { Feedback } from '@/types/feedback';
import { useEffect, useState } from 'react';
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

  // FCP 최적화를 위해 보이지 않는 영역은 최초 렌더링 이후에 show 한다.
  const [showClones, setShowClones] = useState<boolean>(false);
  useEffect(() => {
    setShowClones(true);
  }, []);

  return (
    <FeedbackBoardContainer showClones={showClones}>
      {/* 총 9개의 feedbackBoard 렌더링.
          가운데의 FeedbackBoard가 진짜이고, 나머지는 무한한 공간을 구현하기 위한 가짜 보드. */}
      <FourFakeFeedbackBoard
        feedbackList={feedbackList}
        showClones={showClones}
      />
      <FeedbackBoard feedbackList={feedbackList} />
      <FourFakeFeedbackBoard
        feedbackList={feedbackList}
        showClones={showClones}
      />
    </FeedbackBoardContainer>
  );
};

export default FeedbackSection;

interface FakeFeedbackBoardProps {
  feedbackList: Feedback[];
  showClones: boolean;
}

const FourFakeFeedbackBoard = ({
  feedbackList,
  showClones,
}: FakeFeedbackBoardProps) =>
  showClones ? (
    <>
      <FeedbackBoard feedbackList={feedbackList} />
      <FeedbackBoard feedbackList={feedbackList} />
      <FeedbackBoard feedbackList={feedbackList} />
      <FeedbackBoard feedbackList={feedbackList} />
    </>
  ) : null;
