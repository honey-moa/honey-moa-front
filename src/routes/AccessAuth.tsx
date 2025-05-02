import { AuthFunnelModal } from '@/components/Auth/AuthFunnelModal';
import { AuthFunnelStep } from '@/components/Auth/type';
import useFunnel from '@/hook/useFunnel';
import { AccessAuthProps } from './type';
import useLocalStorage from '@/hook/useLocalStorage';
import { Outlet } from 'react-router-dom';
import useSessionStorage from '@/hook/useSessionStorage';
import { isStorageWithKey } from '@/utils/storage/isStorageWithKey';

export default function AccessAuth({ isPrivate }: AccessAuthProps) {
  const { Funnel, setStep } = useFunnel<AuthFunnelStep>('로그인');
  const { value: accessTokenInLocalStorage } = useLocalStorage('accessToken');
  const { value: accessTokenInSessionStorage } =
    useSessionStorage('accessToken');

  const token = isStorageWithKey('accessToken')
    ? accessTokenInLocalStorage
    : accessTokenInSessionStorage;

  if (isPrivate && !token) {
    return (
      <AuthFunnelModal
        Funnel={Funnel}
        setStep={setStep}
        isShow={true}
        outSideClick={false}
      />
    );
  }

  return <Outlet />;
}
