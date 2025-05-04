import SettingList from '@/components/Setting/SettingList';
import { useTitle } from '@/hook/useTitle';

export default function Setting() {
  useTitle('꿀모아 | 설정');

  return <SettingList />;
}
