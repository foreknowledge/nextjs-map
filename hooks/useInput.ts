import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useCallback,
  useState,
} from 'react';

type ChangeEventType = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

const useInput = (
  initialValue = '',
  maxLength?: number
): [string, (e: ChangeEventType) => void, Dispatch<SetStateAction<string>>] => {
  const [value, setValue] = useState(initialValue);

  const onChange = useCallback(
    (e: ChangeEventType) => {
      setValue(e.target.value.slice(0, maxLength));
    },
    [setValue]
  );

  return [value, onChange, setValue];
};

export default useInput;
