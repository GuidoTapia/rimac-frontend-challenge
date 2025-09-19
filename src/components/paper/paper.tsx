import React from 'react';
import styles from './paper.module.scss';

export interface PaperProps {
  children: React.ReactNode;
  className?: string;
  shadow?: 'sm' | 'md' | 'lg' | 'none';
  width?: string | number;
  height?: string | number;
  withBorder?: boolean;
}

const Paper: React.FC<PaperProps> = ({
  children,
  className,
  shadow = 'md',
  width,
  height,
  withBorder,
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
    <div className={classes} style={style}>
      {children}
    </div>
  );
};

export default Paper;
