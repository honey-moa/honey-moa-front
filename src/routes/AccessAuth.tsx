import { AuthFunnelModal } from '@/components/Auth/AuthFunnelModal';
import { AuthFunnelStep } from '@/components/Auth/type';
import useFunnel from '@/hook/useFunnel';
import { AccessAuthProps } from './type';
import useLocalStorage from '@/hook/useLocalStorage';

export default function AccessAuth({ children, isPrivate }: AccessAuthProps) {
  const { Funnel, setStep } = useFunnel<AuthFunnelStep>('로그인');
  const { value: token } = useLocalStorage('accessToken');

  return (
    <>
      {isPrivate && !token && (
        <AuthFunnelModal
          Funnel={Funnel}
          setStep={setStep}
          isShow={true}
          outSideClick={false}
        />
      )}
      {children}
    </>
  );
}
