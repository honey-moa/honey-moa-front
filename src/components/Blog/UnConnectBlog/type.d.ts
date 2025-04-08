import { PartialBlock } from '@blocknote/core';

export interface HoneyListMonthsProps {
  $isNowMonth: boolean;
}

type CoupleProfile = {
  id: string;
  name: string;
  profileImage: string;
};

export interface HoneyCardProps {
  couple: CoupleProfile;
  id: string;
  title: string;
  tags?: string[];
  date?: string;
  location?: string;
  content: PartialBlock[];
  titleImage?: string;
}
