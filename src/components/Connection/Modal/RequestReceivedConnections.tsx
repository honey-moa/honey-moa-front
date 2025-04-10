import Image from '@/components/Image';
import * as S from './style';
import { ConnectionStatus } from '@/apis/connection/type';
import { ConnectionQueries } from '@/apis/connection';
import { GetConnectionListErrorHandler } from '@/apis/connection/error';
import { toast } from 'react-toastify';

export default function RequestReceivedConnections() {
  const requestedQuery = ConnectionQueries.GetConnectionListPaginationQuery({
    showRequested: true,
    showRequest: false,
    type: 'requested',
    status: 'PENDING',
  });
  const connectionMutation = ConnectionQueries.PutConnectionQuery();

  const getRequestedListWithPending = requestedQuery?.contents?.filter(
    info => info.status === 'PENDING'
  );

  const onChangeStatusConnectionHandler = (
    id: string,
    status: ConnectionStatus,
    type: 'requester' | 'requested'
  ) => {
    if (status === 'REJECTED' && confirm('정말로 거절 하시겠습니까?')) {
      const params = { id, status, type };
      connectionMutation.mutate(params, {
        onSuccess: () => {
          toast.info('요청이 거절되었습니다.');
        },
        onError: error => {
          toast.error(GetConnectionListErrorHandler(error));
        },
      });
    } else {
      const params = { id, status, type };
      connectionMutation.mutate(params, {
        onSuccess: () => {
          toast.info('요청이 수락되었습니다.');
        },
        onError: error => {
          toast.error(GetConnectionListErrorHandler(error));
        },
      });
    }
  };
  return (
    <>
      {getRequestedListWithPending?.map(connectionItem => {
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
                <div>{connectionItem.requester?.nickname}</div>
              </div>
              <div>
                <S.ConnectionStatusButton
                  $status="ACCEPTED"
                  onClick={() =>
                    onChangeStatusConnectionHandler(
                      connectionItem.id,
                      'ACCEPTED',
                      'requested'
                    )
                  }
                >
                  수락
                </S.ConnectionStatusButton>
                <S.ConnectionStatusButton
                  $status="REJECTED"
                  onClick={() =>
                    onChangeStatusConnectionHandler(
                      connectionItem.id,
                      'REJECTED',
                      'requested'
                    )
                  }
                >
                  거절
                </S.ConnectionStatusButton>
              </div>
            </S.CoupleConnectionButtonModalWrapper>
          </S.ConnectionItemWrapper>
        );
      })}
    </>
  );
}
