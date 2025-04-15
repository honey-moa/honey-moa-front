export const scrollToBottom = (
  scrollToBottomRef: React.RefObject<HTMLDivElement>
) => {
  if (scrollToBottomRef.current) {
    scrollToBottomRef.current.scrollTop =
      scrollToBottomRef.current.scrollHeight;
  }
};
