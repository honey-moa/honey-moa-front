import { useTheme } from 'styled-components';
import { Header } from '../Layouts';
import * as S from './style';
import { settingListType } from './type';
import { Svg } from '../Svg';
import { useState } from 'react';
import useFunnel from '@/hook/useFunnel';
import Modal from '../Modal';
import SendEmailForChangePasswordModal from '../Auth/SendEmailForChangePasswordModal';
import ChangeThemeModal from './Modals/ChangeThemeModal';
import EditCoupleProfileModal from './Modals/EditCoupleProfileModal';
import EditMyProfileModal from './Modals/EditMyProfileModal';
import EmailValidationModal from './Modals/EmailValidationModal';

export default function Setting() {
  const theme = useTheme();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { Funnel, setStep } = useFunnel<
    | '이메일 인증'
    | '비밀번호 변경'
    | '테마 설정'
    | '마이 프로필'
    | '블로그 프로필'
  >('이메일 인증');

  const settingList: settingListType[] = [
    {
      title: '계정',
      contents: [
        {
          name: '계정 관리',
          event: () => {
            setStep('마이 프로필');
            setIsOpenModal(prev => !prev);
          },
        },
        {
          name: '커플 프로필 관리',
          event: () => {
            setStep('블로그 프로필');
            setIsOpenModal(prev => !prev);
          },
        },
        {
          name: '이메일 인증',
          event: () => {
            setStep('이메일 인증');
            setIsOpenModal(prev => !prev);
          },
        },
        {
          name: '비밀번호 변경',
          event: () => {
            setStep('비밀번호 변경');
            setIsOpenModal(prev => !prev);
          },
        },
        { name: '로그아웃', color: theme.accent },
        { name: '회원탈퇴', color: theme.accent },
      ],
    },
    {
      title: '알림',
      contents: [
        {
          name: '알림 설정',
        },
      ],
    },
    {
      title: '앱 설정',
      contents: [
        {
          name: '테마 설정',
          event: () => {
            setStep('테마 설정');
            setIsOpenModal(prev => !prev);
          },
        },
      ],
    },
    {
      title: '지원',
      contents: [
        {
          name: '고객지원',
        },
      ],
    },
  ];
  return (
    <>
      <Modal isShow={isOpenModal} setIsShow={setIsOpenModal}>
        <Funnel>
          <Funnel.Step name="이메일 인증">
            <EmailValidationModal setIsShow={setIsOpenModal} />
          </Funnel.Step>
          <Funnel.Step name="비밀번호 변경">
            <SendEmailForChangePasswordModal setStep={setStep} />
          </Funnel.Step>
          <Funnel.Step name="테마 설정">
            <ChangeThemeModal />
          </Funnel.Step>
          <Funnel.Step name="마이 프로필">
            <EditMyProfileModal setIsShow={setIsOpenModal} />
          </Funnel.Step>
          <Funnel.Step name="블로그 프로필">
            <EditCoupleProfileModal setIsShow={setIsOpenModal} />
          </Funnel.Step>
        </Funnel>
      </Modal>
      <Header.SettingHeader titleText="설정" />
      <S.SettingWrapper>
        <S.SettingListWrapper>
          {settingList.map(item => {
            return (
              <S.SettingItem key={`${item.title}--setting-item`}>
                <S.SettingItemTitle>{item.title}</S.SettingItemTitle>
                <S.SettingItemContents>
                  {item.contents.map(content => {
                    return (
                      <S.SettingItemContentWrapper
                        onClick={content.event}
                        key={`${content.name}--setting-item-content`}
                      >
                        <S.SettingItemContent color={content.color}>
                          {content.name}
                        </S.SettingItemContent>
                        <Svg.NextIcon />
                      </S.SettingItemContentWrapper>
                    );
                  })}
                </S.SettingItemContents>
              </S.SettingItem>
            );
          })}
        </S.SettingListWrapper>
      </S.SettingWrapper>
    </>
  );
}
