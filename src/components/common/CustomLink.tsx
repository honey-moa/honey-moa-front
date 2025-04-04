import useSessionStorage from '@/hook/useSessionStorage';
import React, { AnchorHTMLAttributes, ReactNode } from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface CustomLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  children: ReactNode;
  scrollTop?: boolean;
}

const CustomLink = ({ to, children, scrollTop, ...props }: CustomLinkProps) => {
  const navigate = useNavigate();
  const { set } = useSessionStorage('__scroll_position_back');

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // 기본 링크 동작 방지
    if (scrollTop) {
      window.scrollTo(0, 0);
      set([0, 0]);
    } else {
      set([window.scrollX, window.scrollY]);
    }
    navigate(to);
  };

  return (
    <Link to={to} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
};

export default CustomLink;
