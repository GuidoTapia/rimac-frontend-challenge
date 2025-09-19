import React from 'react';
import styles from './layout.module.scss';
import Phone from '../../assets/phone.svg';
import RimacLogo from '../rimac-logo/rimac-logo';
import TextButton from '../text-button/text-button';

export interface LayoutProps {
  variant?: 'default' | 'login';
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ variant = 'default', children }) => {
  const withVariant = (base: string) =>
    [styles[base], styles[`${base}--${variant}`]].filter(Boolean).join(' ');

  return (
    <div className={withVariant('layout')}>
      <header className={withVariant('layout__header')}>
        <div className={styles[`layout__header-left`]}>
          <RimacLogo color='dark' />
        </div>
        <div className={styles[`layout__header-right`]}>
          <div className={styles[`layout__header-slogan`]}>
            ¡Compra por este medio!
          </div>
          <TextButton variant='dark' icon={<img src={Phone} alt='Phone' />}>
            (01) 411 6001
          </TextButton>
        </div>
      </header>

      <main className={styles.layout__content}>{children}</main>

      {variant === 'login' && (
        <footer className={styles.layout__footer}>
          <div className={styles[`layout__footer-left`]}>
            <RimacLogo color='light' />
          </div>
          <div className={styles[`layout__footer-separator`]} />
          <div className={styles[`layout__footer-right`]}>
            © 2023 RIMAC Seguros y Reaseguros.
          </div>
        </footer>
      )}
    </div>
  );
};

export default Layout;
