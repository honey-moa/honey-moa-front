import { PopUp } from '@/components';
import { Svg } from '@/components/Svg';
import * as S from './style';
import { TagsProps } from './type';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { changeInfo } from '@/utils';

export default function Tags({ tags, setContents }: TagsProps) {
  const [tagInfo, setTagInfo] = useState({
    tag: '',
  });

  const onChangeTagText = changeInfo.text({ setState: setTagInfo });
  const makeNewTagHandler: React.KeyboardEventHandler<HTMLInputElement> = e => {
    //Enter시 태그 생성
    if (e.key === 'Enter') {
      if (tagInfo.tag.length > 20) {
        toast.error('태그는 20자 이하로 입력해주세요.');
        return;
      }
      if (tagInfo.tag.trim() === '') {
        toast.error('태그를 입력해 주세요.');
        return;
      }
      if (tags.includes(tagInfo.tag)) {
        toast.error('같은 태그를 등록할 수 없습니다.');
        return;
      }
      setContents(prev => ({
        ...prev,
        tagNames: [...prev.tagNames, tagInfo.tag],
      }));
      setTagInfo({ tag: '' });
    }
    //backspace시 태그 삭제
    if (e.key === 'Backspace') {
      if (tagInfo.tag === '') {
        tags.pop();
        setContents(prev => ({
          ...prev,
          tagNames: tags,
        }));
      }
    }
  };

  const onClickDeleteTag = (index: number) => {
    const delTagsFilter = tags.filter((_, idx) => idx !== index);
    setContents(prev => ({
      ...prev,
      tagNames: delTagsFilter,
    }));
  };

  return (
    <>
      <S.TagsWrapper>
        <PopUp.Tooltip
          message={`입력하고 'Enter키'를 누르면 새로운 태그가 생성됩니다.\n 태그를 지우고 싶다면 만들어진 태그를 누르거나, "Backspace키"를 누르세요.`}
          direction="bottom"
        >
          <Svg.InfoIcon />
        </PopUp.Tooltip>
        {tags.map((tag, idx) => (
          <span key={`${tag}-${idx}`} onClick={() => onClickDeleteTag(idx)}>
            {tag}
          </span>
        ))}
        <input
          type="text"
          name="tag"
          id="tag"
          value={tagInfo.tag}
          placeholder="태그를 입력하세요"
          onKeyDown={makeNewTagHandler}
          onChange={onChangeTagText}
        />
      </S.TagsWrapper>
    </>
  );
}
