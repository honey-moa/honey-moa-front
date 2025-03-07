interface toggleCheckBoxParams<T> {
  setState: React.Dispatch<React.SetStateAction<T>>;
  key: keyof T;
  additionalFunction?: () => void;
}

/**
 * toggleChangeBox 함수
 * @description boolean타입을 가진 toggle가능한 ui요소를 업데이트 하는데 사용하는 함수
 *
 * @template T
 * @param {React.Dispatch<React.SetStateAction<T>>} setState 사용하는 부분에서 선언하는 setState함수
 * @param {keyof T} key 사용하는 부분에서 선언하는 state의 key값
 *
 * @example
 *    const toggleCondition = changeInfo.toggle<LoginInfo>({setState: setLoginInfo, key: 'condition'});
 *    return (
 *     <input type="checkbox" onChange={toggleCondition} />
 *    )
 */
export default function toggleCheckBox<T>({
  setState,
  key,
  additionalFunction,
}: toggleCheckBoxParams<T>) {
  return () => {
    setState(prev => ({
      ...prev,
      [key]: !prev[key],
    }));
    if (additionalFunction) {
      additionalFunction();
    }
  };
}
