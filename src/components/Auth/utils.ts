interface onChangeTextInfoParams<T> {
  setState: React.Dispatch<React.SetStateAction<T>>;
}

/**input Text 핸들러 동작시키는 함수
 *
 * @template T
 * @param {React.Dispatch<React.SetStateAction<T>>} 사용하는 부분에서 선언하는 setState함수
 * @returns {React.ChangeEventHandler<HTMLInputElement>} input text에 대한 이벤트 핸들러
 *
 * @description 주의해야할 점은 input태그의 id와 state의 key값을 동일시 시켜야 함
 *
 * @example
 *      const [loginInfo, setLoginInfo] = useState<LoginRequest>({
 *       email: '', password: '', isAutoLogin: false, });
 *      const onChangeLoginInfo = onChangeTextInfo<LoginRequest>(setLoginInfo);
 *      return (
 *         <form onSubmit={onSubmit}>
 *            <input type="text" id="email" onChange={onChangeLoginInfo} />
 *            <input type="password" id="password" onChange={onChangeLoginInfo} />
 *         </form>
 *      )
 */
export function onChangeTextInfo<T>({
  setState,
}: onChangeTextInfoParams<T>): React.ChangeEventHandler<HTMLInputElement> {
  return e => {
    const value = e.target.value;
    setState(prev => {
      return {
        ...prev,
        [e.target.id]: value,
      };
    });
  };
}

interface toggleCheckBoxParams<T> {
  setState: React.Dispatch<React.SetStateAction<T>>;
  key: keyof T;
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
 *    const toggleCondition = toggleCheckBox<LoginInfo>({setState: setLoginInfo, key: 'condition'});
 *    return (
 *     <input type="checkbox" onChange={toggleCondition} />
 *    )
 */
export function toggleCheckBox<T>({ setState, key }: toggleCheckBoxParams<T>) {
  return () => {
    setState(prev => ({
      ...prev,
      [key]: !prev[key],
    }));
  };
}
