import React from 'react';
import styles from './tag.module.scss';

export interface TagProps {
  children: React.ReactNode;
  className?: string;
  gradient?: 'primary' | 'secondary' | 'success' | 'danger'; // optional variants
}

const Tag: React.FC<TagProps> = ({
  children,
  className,
  gradient = 'primary',
}) => {
  const classes = [styles.tag, styles[`tag--${gradient}`], className]
    .filter(Boolean)
    .join(' ');

  return <div className={classes}>{children}</div>;
};

export default Tag;
