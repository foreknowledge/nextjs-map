import styles from '@/styles/feedback.module.scss';
import { useCallback, useEffect, useRef } from 'react';

interface Props {
  children: React.ReactNode;
}

// 마우스, 터치 이벤트 처리를 담당하는 Component
const FeedbackBoardContainer = ({ children }: Props) => {
  const feedbackBoardRef = useRef<HTMLDivElement>(null);
  const isDown = useRef(false);
  const position = useRef({ x: 0, y: 0 }); // recent event position
  const offset = useRef({ x: 0, y: 0 }); // translate offset
  const speed = useRef({ x: 0, y: 0 });

  const onDown = useCallback((e: React.PointerEvent) => {
    isDown.current = true;
    const { clientX, clientY } = e;
    position.current = { x: clientX, y: clientY };
  }, []);

  const onUp = useCallback((e: React.PointerEvent) => {
    isDown.current = false;
  }, []);

  const onMove = useCallback((e: React.PointerEvent) => {
    if (isDown.current) {
      const { clientX, clientY } = e;
      speed.current = {
        x: position.current.x - clientX,
        y: position.current.y - clientY,
      };
      position.current = { x: clientX, y: clientY };
    }
  }, []);

  useEffect(() => {
    let timer: number;
    timer = requestAnimationFrame(function slowDown() {
      offset.current = {
        x: offset.current.x + speed.current.x,
        y: offset.current.y + speed.current.y,
      };

      if (feedbackBoardRef.current) {
        feedbackBoardRef.current.style.transform = `translate(calc(-50% - ${offset.current.x}px), calc(-50% - ${offset.current.y}px)`;
      }

      speed.current = { x: speed.current.x * 0.85, y: speed.current.y * 0.85 };
      timer = requestAnimationFrame(slowDown);
    });
    return () => cancelAnimationFrame(timer);
  }, []);

  return (
    <div
      onPointerDown={onDown}
      onPointerUp={onUp}
      onPointerMove={onMove}
      ref={feedbackBoardRef}
      className={styles.feedbackBoardContainer}
    >
      {children}
    </div>
  );
};

export default FeedbackBoardContainer;
