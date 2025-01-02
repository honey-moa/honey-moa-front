export interface ImageComponentProps {
  src: string;
  alt?: string;
  width?: string;
  height?: string;
  fit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  borderRadius?: string;
  lazy?: boolean;
  preload?: boolean;
  onLoad?: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void;
  onError?: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void;
}

export interface StyledImageProps {
  $width?: string;
  $height?: string;
  $fit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  $borderRadius?: string;
}

export interface PlaceholderProps {
  $width: string;
  $height: string;
}
