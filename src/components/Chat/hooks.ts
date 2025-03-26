import { useQueryClient } from '@tanstack/react-query';
import { ChatCurrentDataType, ChatMessageListType } from './ChatBox/type';

export const scrollToBottom = (
  scrollToBottomRef: React.RefObject<HTMLDivElement>
) => {
  if (scrollToBottomRef.current) {
    scrollToBottomRef.current.scrollTop =
      scrollToBottomRef.current.scrollHeight;
  }
};

export const useReceivedMessage = () => {
  const queryClient = useQueryClient();

  const transformPaginatedData = (oldData: ChatCurrentDataType) => {
    if (!oldData) return oldData;

    return {
      ...oldData,
      pages: oldData.pages.map(page => ({
        totalCount: page.totalCount,
        limit: page.limit,
        contents: page.contents,
        nextCursor: page.nextCursor,
      })),
    };
  };

  const onMessageReceived = (data: ChatMessageListType) => {
    queryClient.setQueryData(
      ['chat-rooms', 'messages'],
      (oldData: ChatCurrentDataType) => {
        const transformedData = transformPaginatedData(oldData);
        if (!oldData) return oldData;
        return {
          ...transformedData,
          pages: transformedData.pages.map((page, index) => {
            if (index === 0) {
              return {
                ...page,
                contents: [
                  {
                    id: data.id,
                    createdAt: data.createdAt,
                    updatedAt: data.updatedAt,
                    roomId: data.roomId,
                    senderId: data.senderId,
                    message: data.message,
                    blogPostUrl: data.blogPostUrl,
                  },
                  ...page.contents,
                ],
              };
            }
            return page;
          }),
        };
      }
    );
  };

  return { onMessageReceived };
};

// interface UseScrollToBottomParams {
//   dependencies?: unknown[];
//   isLoadingPastData?: boolean; // 과거 데이터 로드 여부
// }

// export const useScrollToBottom = ({
//   dependencies,
//   isLoadingPastData = false,
// }: UseScrollToBottomParams) => {
//   const scrollToBottomRef = useRef<HTMLDivElement>(null);

//   const scrollToBottom = () => {
//     if (scrollToBottomRef.current) {
//       scrollToBottomRef.current.scrollTop =
//         scrollToBottomRef.current.scrollHeight;
//     }
//   };

//   const maintainScrollPosition = () => {
//     const chatBody = scrollToBottomRef.current;
//     if (!chatBody) return;

//     const prevScrollHeight = chatBody.scrollHeight;
//     const prevScrollTop = chatBody.scrollTop;

//     return () => {
//       const newScrollHeight = chatBody.scrollHeight;
//       if (prevScrollHeight && prevScrollTop && newScrollHeight) {
//         // 상단에 데이터가 추가되므로, 이전 위치를 유지하려면 새 높이 차이를 더함
//         chatBody.scrollTop =
//           prevScrollTop + (newScrollHeight - prevScrollHeight);
//       }
//     };
//   };

//   useEffect(() => {
//     if (!scrollToBottomRef.current) return;

//     if (isLoadingPastData) {
//       // 과거 데이터 로드 중: 현재 위치 유지
//       maintainScrollPosition();
//     } else {
//       // 새 메시지 추가 시: 하단으로 이동
//       scrollToBottom();
//     }
//   }, dependencies);

//   return { scrollToBottomRef };
// };
