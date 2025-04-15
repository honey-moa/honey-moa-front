interface ToggleOppositeParams<T> {
  setState: React.Dispatch<React.SetStateAction<T>>;
  key: keyof T;
  additionalFunction?: () => void;
}

interface ToggleOppositeSingleStateParams {
  setState: React.Dispatch<React.SetStateAction<boolean>>;
  additionalFunction?: () => void;
}
/**
 * toggleOpposite 함수 - state object타입
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
function toggleOpposite<T>(params: ToggleOppositeParams<T>): () => void;

/**
 * toggleOpposite 함수 - state single타입
 * @template boolean
 * @param params {setState: React.Dispatch<React.SetStateAction<boolean>>}
 * @param params {additionalFunction?: () => void} 추가적으로 실행할 함수
 *
 * @description boolean타입을 가진 toggle가능한 ui요소를 업데이트 하는데 사용하는 함수
 * @example
 *    const toggleCondition = changeInfo.toggle({setState: setLoginInfo});
 *   return (
 *    <input type="checkbox" onChange={toggleCondition} />
 *   )
 */
function toggleOpposite(params: ToggleOppositeSingleStateParams): () => void;

function toggleOpposite<T>(
  params: ToggleOppositeParams<T> | ToggleOppositeSingleStateParams
): () => void {
  if (isKeyedParams(params)) {
    return () => {
      params.setState(prev => ({
        ...prev,
        [params.key]: !prev[params.key],
      }));
      if (params.additionalFunction) {
        params.additionalFunction();
      }
    };
  } else {
    return () => {
      params.setState(prev => !prev);
      if (params.additionalFunction) {
        params.additionalFunction();
      }
    };
  }
}

function isKeyedParams<T>(
  params:
    | {
        setState: React.Dispatch<React.SetStateAction<T>>;
        key: keyof T;
        additionalFunction?: () => void;
      }
    | {
        setState: React.Dispatch<React.SetStateAction<boolean>>;
        additionalFunction?: () => void;
      }
): params is {
  setState: React.Dispatch<React.SetStateAction<T>>;
  key: keyof T;
  additionalFunction?: () => void;
} {
  return 'key' in params;
}

export default toggleOpposite;
