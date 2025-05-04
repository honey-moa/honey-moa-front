import SupportWithEmail from '@/components/Setting/Support';
import { useTitle } from '@/hook/useTitle';

export default function Support() {
  useTitle('꿀모아 | 고객센터');

  return <SupportWithEmail />;
}
