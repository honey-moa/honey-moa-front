import * as S from './style';
import { Header } from '../Layouts';
import { toast } from 'react-toastify';
import { Tooltip } from '../PopUp';

export default function Support() {
  const onClickCopyEmail = () => {
    navigator.clipboard.writeText('honeymoa7069@gmail.com');
    toast.success('이메일이 복사되었습니다!');
  };

  return (
    <>
      <Header.SettingHeader titleText="설정" />
      <h2>고객지원</h2>
      <S.SettingSupportWrapper>
        <p>
          사이트를 이용시 불편 사항은 아래 이메일로 문의해주시면 신속히
          처리하겠습니다😭
        </p>
        <Tooltip message="클릭시 복사됩니다." direction="left">
          <button onClick={onClickCopyEmail}>honeymoa7069@gmail.com</button>
        </Tooltip>
      </S.SettingSupportWrapper>
    </>
  );
}
