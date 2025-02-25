import { BlogQueries } from '@/apis/blog';
import * as S from './style';
import { useState } from 'react';
import { BlogInfoType } from './type';
import { changeInfo } from '@/utils';
import { useNavigate } from 'react-router-dom';

export default function CreateBlogModal() {
  const navigate = useNavigate();
  const [blogInfo, setBlogInfo] = useState<BlogInfoType>({
    name: '',
    description: '',
    dDayStartDate: '',
  });

  const onChangeBlogName = changeInfo.text<BlogInfoType>({
    setState: setBlogInfo,
  });
  const onChangeDescription = changeInfo.text<BlogInfoType>({
    setState: setBlogInfo,
  });
  const onChangeDDayStartDate = changeInfo.text<BlogInfoType>({
    setState: setBlogInfo,
  });

  const createBlogMutate = BlogQueries.CreateBlogMutate();

  const onSubmitCreateBlog: React.FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();
    createBlogMutate.mutate(blogInfo, {
      onSuccess: data => {
        navigate(`/blog/${data.id}`);
      },
    });
  };

  return (
    <S.ModalWrapper>
      <S.ModalHeader>
        <h2>블로그 생성</h2>
      </S.ModalHeader>
      <S.CreateBlogDescription>
        연인과 <span>연결</span>이 <span>완료</span>되었습니다! <br />
        연인과의 <span>블로그</span>를 만들어 주세요!
      </S.CreateBlogDescription>
      <S.CreateBlogForm onSubmit={onSubmitCreateBlog}>
        <label>블로그 이름을 지어주세요!</label>
        <input
          type="text"
          value={blogInfo.name}
          id="name"
          onChange={onChangeBlogName}
          placeholder="블로그 이름을 입력해주세요."
        />
        <label>사귀기 시작한 날</label>
        <input
          type="date"
          value={blogInfo.dDayStartDate}
          id="dDayStartDate"
          onChange={onChangeDDayStartDate}
        />
        <label>블로그 소개글</label>
        <textarea
          value={blogInfo.description}
          id="description"
          onChange={onChangeDescription}
          placeholder="블로그 소개글을 입력해주세요."
        />
        <button type="submit">블로그 생성하기</button>
      </S.CreateBlogForm>
    </S.ModalWrapper>
  );
}
