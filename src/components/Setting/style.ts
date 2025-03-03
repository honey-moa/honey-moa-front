import styled from 'styled-components';
import { settingListType } from './type';

export const SettingWrapper = styled.div`
  width: 100%;
  margin-top: 48px;
  display: flex;
  justify-content: center;
`;

export const SettingListWrapper = styled.ol`
  width: 60%;
  display: flex;
  flex-direction: column;
`;

export const SettingItem = styled.li`
  width: 100%;
  margin-bottom: 24px;
`;

export const SettingItemTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.text.primary};
  border-bottom: 1px solid ${({ theme }) => theme.border.primary};
  margin-bottom: 16px;
`;

export const SettingItemContents = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
  gap: 24px;
  cursor: pointer;
`;

export const SettingItemContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SettingItemContent = styled.div<
  Pick<settingListType['contents'][number], 'color'>
>`
  font-size: 18px;
  font-weight: 500;
  color: ${({ color, theme }) => color || theme.text.primary};
`;

export const SettingSupportWrapper = styled.div`
  width: 100%;
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  button {
    margin-top: 16px;
    padding: 8px 16px;
    border: none;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.button.secondary.base};
    color: ${({ theme }) => theme.text.primary};
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    &:hover {
      background-color: ${({ theme }) => theme.button.secondary.hover};
    }
  }
`;
