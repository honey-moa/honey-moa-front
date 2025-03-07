interface onChangeTextInfoParams<T> {
  setState: React.Dispatch<React.SetStateAction<T>>;
  additionalFunction?: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
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
 *      const onChangeLoginInfo = changeInfo.text<LoginRequest>(setLoginInfo);
 *      return (
 *         <form onSubmit={onSubmit}>
 *            <input type="text" id="email" onChange={onChangeLoginInfo} />
 *            <input type="password" id="password" onChange={onChangeLoginInfo} />
 *         </form>
 *      )
 */
export default function onChangeTextInfo<T>({
  setState,
  additionalFunction,
}: onChangeTextInfoParams<T>): React.ChangeEventHandler<
  HTMLTextAreaElement | HTMLInputElement
> {
  return e => {
    const value = e.target.value;
    setState(prev => {
      return {
        ...prev,
        [e.target.id]: value,
      };
    });
    if (additionalFunction) {
      additionalFunction(e);
    }
  };
}
