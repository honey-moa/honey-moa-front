import { Svg } from '@/components/Svg';
import * as S from './style';
import { UserQueries } from '@/apis/user';
import { toast } from 'react-toastify';
import { Loading } from '@/components';

export default function EmailValidationModal({
  setIsShow,
}: {
  setIsShow: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const EmailMutate = UserQueries.ReissueEmailVerifyTokenMutate();

  const onClickEmailValidationHandler = () => {
    EmailMutate.mutate(undefined, {
      onSuccess: () => {
        toast.success('이메일을 전송했습니다.');
        setIsShow(false);
      },
    });
  };

  return (
    <S.ModalWrapper>
      <S.EmailValidationIconWrapper>
        <span>
          <Svg.EmailIcon size={24} />
        </span>
        <h3>이메일 인증</h3>
      </S.EmailValidationIconWrapper>
      <S.EmailValidationButton onClick={onClickEmailValidationHandler}>
        {EmailMutate.isPending ? <Loading.Spinner /> : '인증 메일 전송'}
      </S.EmailValidationButton>
      <S.EmailValidationDescriptionWrapper>
        <p>
          이메일이 보이지 않는 경우 <span>스팸함</span>을 확인해 보세요.
        </p>
        <p>
          전송된 이메일은 <span>5분</span>동안 유효 합니다.
        </p>
        <p>이메일 재전송은 요청 후 5분이 지난 후 가능합니다.</p>
      </S.EmailValidationDescriptionWrapper>
    </S.ModalWrapper>
  );
}
