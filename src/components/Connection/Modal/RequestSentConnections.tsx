import Image from '@/components/Image';
import * as S from './style';
import { ConnectionQueries } from '@/apis/connection';
import { GetConnectionListErrorHandler } from '@/apis/connection/error';
import { toast } from 'react-toastify';
import { ConnectionStatus } from '@/apis/connection/type';

export default function RequestSentConnections() {
  const requesterQuery = ConnectionQueries.GetConnectionListPaginationQuery({
    showRequest: true,
    showRequested: false,
    type: 'requester',
    status: 'PENDING',
  });
  const connectionMutation = ConnectionQueries.PutConnectionQuery();

  const getRequestListWithoutAccepted = requesterQuery?.contents?.filter(
    info => info.status === 'PENDING'
  );

  const onChangeStatusConnectionHandler = (
    id: string,
    status: ConnectionStatus,
    type: 'requester' | 'requested'
  ) => {
    if (confirm('정말로 취소하시겠습니까?')) {
      const params = { id, status, type };
      connectionMutation.mutate(params, {
        onSuccess: () => {
          toast.success('요청이 취소되었습니다.');
        },
        onError: error => {
          toast.error(GetConnectionListErrorHandler(error));
        },
      });
    }
  };

  return (
    <>
      {getRequestListWithoutAccepted?.map(connectionItem => {
        return (
          <S.ConnectionItemWrapper key={connectionItem.id}>
            <S.CoupleConnectionButtonModalWrapper>
              <div>
                <Image
                  src="/images/introImage.jpg"
                  alt="프로필사진"
                  width="25px"
                  height="25px"
                  borderRadius="50%"
                />
                <div>{connectionItem.requested?.nickname}</div>
              </div>
              {connectionItem.status === 'REJECTED' ? (
                <S.ConnectionStatusButton $status="CANCELED">
                  거절됨
                </S.ConnectionStatusButton>
              ) : (
                <S.ConnectionStatusButton
                  $status="CANCELED"
                  onClick={() =>
                    onChangeStatusConnectionHandler(
                      connectionItem.id,
                      'CANCELED',
                      'requester'
                    )
                  }
                >
                  취소
                </S.ConnectionStatusButton>
              )}
            </S.CoupleConnectionButtonModalWrapper>
          </S.ConnectionItemWrapper>
        );
      })}
    </>
  );
}
