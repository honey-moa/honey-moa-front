import * as S from './changePwStyle';
import { Header } from '../Layouts';
import { Svg } from '../Svg';
import { useState } from 'react';
import { changeInfo as passwordChange } from '@/utils';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthQueries } from '@/apis/auth';
import { Loading } from '..';
import { ChangePasswordErrorHandler } from '@/apis/auth/error';
import { toast } from 'react-toastify';

interface ChangeInfo {
  password: string;
  checkPassword: string;
}

/**해당 컴포넌트는 후에 account폴더로 이동 예정 */
export default function ChangePassword() {
  const [changeInfo, setChangeInfo] = useState<ChangeInfo>({
    password: '',
    checkPassword: '',
  });
  const params = useParams();
  const navigate = useNavigate();

  const onChangeNewPasswordInfo = passwordChange.text({
    setState: setChangeInfo,
  });
  const mutationChangePassword = AuthQueries.useChangePasswordQuery();

  const onSubmitChangePassword: React.FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();
    if (changeInfo.password !== changeInfo.checkPassword) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }
    mutationChangePassword.mutate(
      {
        newPassword: changeInfo.password,
        token: params.token as string,
        id: params.id as string,
      },
      {
        onSuccess: () => {
          alert('비밀번호가 성공적으로 변경되었습니다.');
          navigate('/root');
        },
        onError: error => {
          toast.error(ChangePasswordErrorHandler(error));
        },
      }
    );
  };

  return (
    <>
      <Header.SettingHeader titleText="비밀번호 변경" />
      <S.ChangePasswordWrapper>
        <S.ChangePasswordContainer>
          <S.KeyIconContainer>
            <Svg.KeyIcon size={35} />
          </S.KeyIconContainer>
          <S.NotificationChangePasswordValidationP>
            비밀번호는 영문(대/소), 숫자, 특수문자(@$!%*?&)를 포함한 8자리 이상
            15자리 이하의 비밀번호를 입력해 주세요.
          </S.NotificationChangePasswordValidationP>
          <S.ChangePasswordForm onSubmit={onSubmitChangePassword}>
            <S.ChangePasswordInputBox>
              <div style={{ display: 'flex' }}>
                <label>새 비밀번호</label>
              </div>
              <input
                type="password"
                id="password"
                value={changeInfo.password}
                onChange={onChangeNewPasswordInfo}
              />
            </S.ChangePasswordInputBox>
            <S.ChangePasswordInputBox>
              <label>새 비밀번호 확인</label>
              <input
                type="password"
                id="checkPassword"
                value={changeInfo.checkPassword}
                onChange={onChangeNewPasswordInfo}
              />
            </S.ChangePasswordInputBox>
            <S.ChangePasswordSubmitButtonContainer>
              <button>
                {mutationChangePassword.isPending ? (
                  <Loading.Spinner />
                ) : (
                  <>비밀번호 변경</>
                )}
              </button>
            </S.ChangePasswordSubmitButtonContainer>
          </S.ChangePasswordForm>
        </S.ChangePasswordContainer>
      </S.ChangePasswordWrapper>
    </>
  );
}
