import { useState } from 'react';
import { Svg } from '../Svg';
import * as S from './style';
import { changeInfo } from '@/utils';
import { EmailForChangePwType, ModalProps } from './type';
import { AuthQueries } from '@/apis/auth';
import { Loading } from '..';
import { AxiosError } from 'axios';
import { SendEmailForChangePwErrorHandler } from '@/apis/auth/error';
import { toast } from 'react-toastify';

export default function SendEmailForChangePasswordModal<T>({
  setStep,
  redirect,
}: ModalProps<T>) {
  const [forChangePw, setForChangePw] = useState<EmailForChangePwType>({
    email: '',
  });

  const mutationSendEmail = AuthQueries.useSendEmailForChangePwQuery();

  const onChangeEmailForChangePw = changeInfo.text<EmailForChangePwType>({
    setState: setForChangePw,
  });
  const onSubmitEmailForChangePw: React.FormEventHandler<
    HTMLFormElement
  > = e => {
    e.preventDefault();
    if (forChangePw.email) {
      mutationSendEmail.mutate(
        {
          email: forChangePw.email,
        },
        {
          onSuccess: () =>
            alert(
              `${forChangePw.email}해당 이메일로 메일을 보내드렸습니다.\n만약 메일이 오지 않았다면 스팸함을 확인해 주세요😊`
            ),
          onError: (error: AxiosError) => {
            toast.error(SendEmailForChangePwErrorHandler(error));
          },
        }
      );
    }
  };

  return (
    <S.ModalWrapper>
      <S.ChangePasswordHeader>
        <S.KeyIconContainer>
          <Svg.KeyIcon size={24} />
        </S.KeyIconContainer>
        <h3>비밀번호 찾기</h3>
        <S.SendToEmailP>
          가입하신 이메일 주소를 입력해 주세요. 비밀번호 재설정 링크를
          보내드립니다.
        </S.SendToEmailP>
      </S.ChangePasswordHeader>
      <form onSubmit={onSubmitEmailForChangePw}>
        <S.EmailInputForChangePasswordContainer>
          <label>이메일 주소</label>
          <input
            type="email"
            id="email"
            required
            value={forChangePw.email}
            onChange={onChangeEmailForChangePw}
          />
        </S.EmailInputForChangePasswordContainer>
        <S.SendEmailBottom>
          <button type="submit">
            {mutationSendEmail.isPending ? (
              <Loading.Spinner />
            ) : (
              <>비밀번호 변경 이메일 받기</>
            )}
          </button>
          {redirect && (
            <button type="button" onClick={() => setStep(redirect as T)}>
              취소
            </button>
          )}
        </S.SendEmailBottom>
      </form>
    </S.ModalWrapper>
  );
}
