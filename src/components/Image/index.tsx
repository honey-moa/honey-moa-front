import React, { useEffect, useState } from 'react';
import { ImageComponentProps } from './type';
import * as S from './style';
/**
 *
 * @param src - 이미지 경로 [ public/images/ 에 이미지를 넣고, 해당 이미지 이름만 사용하면 됩니다.] ex) introImage.jpg
 * @param alt - 이미지 오류시 대체 텍스트
 * @param width - 이미지 너비 | 기본적으로 px단위로 지정하시면 layout shift를 방지할 수 있습니다.
 * @param height - 이미지 높이 | 기본적으로 px단위로 지정하시면 layout shift를 방지할 수 있습니다.
 * @param fit - 이미지 채우기 방식 | cover, contain, fill, none, scale-down
 * @param borderRadius - 이미지 테두리 둥글게 처리 string값으로 지정
 * @param lazy - 이미지 레이지 로딩 여부 | true: 레이지 로딩, false: 레이지 로딩 안함
 * @param preload - 이미지 프리로딩 여부 | true: 프리로딩, false: 프리로딩 안함
 * @param onLoad - 이미지 로드 완료시 이벤트 | 프리로드 이벤트
 * @param onError - 이미지 로드 실패시 이벤트 | 프리로드 이벤트
 *
 * @returns showImage || preload ? StyledImage : Placeholder
 *
 * @example
 * <Image src="introImage.jpg" alt="intro" width="36px" height="36px" />
 */
export default function Image({
  src,
  alt = '',
  width,
  height,
  fit = 'cover',
  borderRadius,
  lazy = true,
  preload = false,
  onLoad,
  onError,
}: ImageComponentProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showImage, setShowImage] = useState(!lazy);
  const imgRef = React.useRef<HTMLDivElement>(null);

  // 프리로딩
  useEffect(() => {
    if (preload && src) {
      const img = new window.Image();
      img.src = `images/${src}`;
      img.onload = () => setIsLoaded(true);
    }
  }, [preload, src]);

  // lazy 로딩
  useEffect(() => {
    if (!lazy || isLoaded) return;

    const handleScroll = () => {
      if (!imgRef.current) return;
      const rect = imgRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        setShowImage(true);
        window.removeEventListener('scroll', handleScroll);
      }
    };

    if (lazy) {
      window.addEventListener('scroll', handleScroll);
      handleScroll(); // 초기 확인
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lazy, isLoaded]);

  return showImage || preload ? (
    <S.StyledImage
      src={`images/${src}`}
      alt={alt}
      width={width}
      height={height}
      fit={fit}
      borderRadius={borderRadius}
      onLoad={e => {
        setIsLoaded(true);
        if (onLoad) {
          onLoad(e);
        }
      }}
      onError={onError}
    />
  ) : (
    <S.Placeholder
      ref={imgRef}
      width={width || '100%'}
      height={height || '100%'}
    />
  );
}
