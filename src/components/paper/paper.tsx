import React from 'react';
import styles from './paper.module.scss';

export interface PaperProps {
  children: React.ReactNode;
  className?: string;
  shadow?: 'sm' | 'md' | 'lg' | 'none';
  width?: string | number;
  maxWidth?: string | number;
  height?: string | number;
  withBorder?: boolean;
  onClick?: () => void;
}

const Paper: React.FC<PaperProps> = ({
  children,
  className,
  shadow = 'lg',
  width,
  height,
  withBorder,
  onClick,
}) => {
  const classes = [
    styles.paper,
    styles[`paper--shadow-${shadow}`],
    className,
    withBorder && styles['paper--with-border'],
  ]
    .filter(Boolean)
    .join(' ');

  const style: React.CSSProperties = {
    ...(width ? { width } : {}),
    ...(height ? { height } : {}),
  };

  return (
    <div className={classes} style={style} onClick={onClick}>
      {children}
    </div>
  );
};

export default Paper;
