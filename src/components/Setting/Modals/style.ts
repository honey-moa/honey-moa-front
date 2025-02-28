import styled from 'styled-components';

interface ModalWrapperProps {
  $width?: string;
}
export const ModalWrapper = styled.div<ModalWrapperProps>`
  width: ${({ $width }) => $width || '350px'};
  padding: 24px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.bg.primary};
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  h2 {
    font-size: 18px;
    color: ${({ theme }) => theme.text.primary};
    margin-left: 16px;
    font-weight: 700;
  }
`;

export const SelectThemeContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const ToggleContainer = styled.div`
  position: relative;
  cursor: pointer;
  > .toggle-container {
    width: 50px;
    height: 24px;
    border-radius: 30px;
    background-color: rgb(233, 233, 234);
  }
  //.toggle--checked 클래스가 활성화 되었을 경우의 CSS를 구현
  > .toggle--checked {
    background-color: rgb(0, 200, 102);
    transition: all 0.5s ease-in-out;
  }

  > .toggle-circle {
    position: absolute;
    top: 1px;
    left: 1px;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background-color: rgb(255, 254, 255);
    transition: all 0.5s ease-in-out;
    //.toggle--checked 클래스가 활성화 되었을 경우의 CSS를 구현
  }
  > .toggle--checked {
    left: 27px;
    transition: all 0.5s ease-in-out;
  }
`;
interface ToggleProps {
  $checked: boolean;
  $transition: boolean;
}

export const ToggleBackground = styled.div<ToggleProps>`
  width: 50px;
  height: 24px;
  border-radius: 30px;
  background-color: ${({ $checked }) =>
    $checked ? 'rgb(0, 200, 102)' : 'rgb(233, 233, 234)'};
  transition: ${({ $transition }) =>
    $transition ? 'all 0.5s ease-in-out' : 'none'};
`;

export const ToggleCircle = styled.div<ToggleProps>`
  position: absolute;
  top: 1px;
  left: ${({ $checked }) => ($checked ? '27px' : '1px')};
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background-color: rgb(255, 254, 255);
  transition: all 0.5s ease-in-out;
`;

export const Desc = styled.div`
  //설명 부분의 CSS를 구현
  text-align: center;
  margin: 20px;
  color: ${({ theme }) => theme.text.primary};
`;

export const EditProfileWrapper = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 18px;
`;

export const EditProfileImageOverlay = styled.div`
  position: relative;
  //이미지 오버레이
  label,
  svg {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 24px;
    height: 24px;
    padding: 4px;
    background-color: ${({ theme }) => theme.button.tertiary.base};
    border-radius: 50%;
    cursor: pointer;
    &:hover {
      background-color: ${({ theme }) => theme.button.tertiary.hover};
    }
  }
`;

export const NoneBgImageBox = styled.div`
  width: 100%;
  height: 220px;
  border-radius: 18px;
  background-color: ${({ theme }) => theme.bg.secondary};
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    color: ${({ theme }) => theme.text.primary};
  }
`;

export const EditInputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 12px;
  //이름 입력 창 라벨
  label {
    font-size: 14px;
    color: ${({ theme }) => theme.text.primary};
    font-weight: 700;
  }
  //이름 입력 창
  input {
    width: 100%;
    padding: 8px;
    border: 1px solid ${({ theme }) => theme.border.secondary};
    border-radius: 8px;
    background-color: ${({ theme }) => theme.bg.tertiary};
    color: ${({ theme }) => theme.text.primary};
    outline: none;
  }
  //저장 버튼
  button {
    width: 100%;
    padding: 8px;
    border: none;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.button.primary.base};
    color: ${({ theme }) => theme.text.secondary};
    font-weight: 700;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover {
      background-color: ${({ theme }) => theme.button.primary.hover};
    }
  }
`;

export const CoupleProfileWrapper = styled.div`
  margin-top: 24px;
`;

export const EditCoupleProfileTitleNameWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 16px;
  //커플 프로필 이름 수정
  input {
    padding: 8px 16px;
    border-radius: 8px;
    border: none;
    background-color: ${({ theme }) => theme.bg.secondary};
    color: ${({ theme }) => theme.text.primary};
  }
  label {
    cursor: pointer;
    padding: 8px;
    background-color: ${({ theme }) => theme.button.tertiary.base};
    border-radius: 50%;
    &:hover {
      background-color: ${({ theme }) => theme.button.tertiary.hover};
    }
  }
`;

export const CoupleProfileInfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
  gap: 16px;
`;

export const CoupleInfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  align-items: end;
`;

export const DuringRelationshipDateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
`;

export const EditProfileDescription = styled.div`
  margin-top: 12px;
  grid-column: 1 / 4;
  grid-row: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  textarea {
    padding: 8px 16px;
    resize: none;
    border-radius: 8px;
    width: 100%;
    height: 100px;
    border: none;
    background-color: ${({ theme }) => theme.bg.secondary};
    color: ${({ theme }) => theme.text.primary};
  }
  label {
    cursor: pointer;
    padding: 8px;
    background-color: ${({ theme }) => theme.button.tertiary.base};
    border-radius: 50%;
    &:hover {
      background-color: ${({ theme }) => theme.button.tertiary.hover};
    }
  }
`;

export const SubmitEditProfileButtonWrapper = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 24px;
  //edit profile 버튼
  button {
    padding: 8px 16px;
    border: none;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.button.primary.base};
    color: ${({ theme }) => theme.text.secondary};
    font-weight: 700;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover {
      background-color: ${({ theme }) => theme.button.primary.hover};
    }
  }
`;

export const DisConnectedCoupleButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
  //커플 연결 해제 버튼
`;

export const DisConnectedCoupleButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.accent};
  gap: 12px;
  padding: 8px 16px;
  border: none;
  background-color: inherit;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: ${({ theme }) => theme.button.secondary.hover};
    color: ${({ theme }) => theme.text.secondary};
  }
`;

export const EmailValidationIconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  span {
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.bg.secondary};
    > svg {
      stroke: ${({ theme }) => theme.button.primary.base};
    }
  }
`;

export const EmailValidationButton = styled.button`
  width: 100%;
  padding: 8px;
  margin-top: 16px;
  border: none;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.button.primary.base};
  color: ${({ theme }) => theme.text.secondary};
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: ${({ theme }) => theme.button.primary.hover};
  }
`;

export const EmailValidationDescriptionWrapper = styled.div`
  border-radius: 16px;
  margin-top: 16px;
  padding: 8px 16px;
  background-color: ${({ theme }) => theme.bg.secondary};
  text-align: center;
  color: ${({ theme }) => theme.text.quaternary};
  span {
    font-weight: bold;
    color: ${({ theme }) => theme.button.primary.base};
  }
`;
