import * as S from './style';
import RequestSentConnections from './RequestSentConnections';
import RequestReceivedConnections from './RequestReceivedConnections';

export default function ConnectionList() {
  return (
    <S.ConnectionFeatureWrapper>
      <S.ListContainer>
        <h2>보낸 요청</h2>
        <RequestSentConnections />
      </S.ListContainer>
      <S.ListContainer>
        <h2>받은 요청</h2>
        <RequestReceivedConnections />
      </S.ListContainer>
    </S.ConnectionFeatureWrapper>
  );
}
