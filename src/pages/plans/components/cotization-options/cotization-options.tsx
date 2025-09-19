import React from 'react';
import styles from './cotization-options.module.scss';
import CotizationOption from '../cotization-option/cotization-option';
import IcProtectionLight from '../../../../assets/IcProtectionLight.svg';
import IcAddUserLight from '../../../../assets/IcAddUserLight.svg';

const CotizationOptionsEnum = {
  FOR_ME: 'FOR_ME',
  FOR_SOMEONE: 'FOR_SOMEONE',
} as const;

export type CotizationOptionType =
  (typeof CotizationOptionsEnum)[keyof typeof CotizationOptionsEnum];

interface CotizationOptionsProps {
  userName?: string;
  selectedOption?: CotizationOptionType;
  onOptionSelect: (option: CotizationOptionType) => void;
}

const cotizationOptions = [
  {
    icon: <img src={IcProtectionLight} alt='Para mi' />,
    title: 'Para mi',
    description:
      'Cotiza tu seguro de salud y agrega familiares si así lo deseas.',
    value: CotizationOptionsEnum.FOR_ME,
  },
  {
    icon: <img src={IcAddUserLight} alt='Para alguien más' />,
    title: 'Para alguien más',
    description:
      'Realiza una cotización para uno de tus familiares o cualquier persona.',
    value: CotizationOptionsEnum.FOR_SOMEONE,
  },
];

const CotizationOptions: React.FC<CotizationOptionsProps> = ({
  userName,
  selectedOption,
  onOptionSelect,
}) => {
  return (
    <div className={styles.cotizationOptions}>
      <div className={styles.cotizationOptions__header}>
        <h2 className={styles.cotizationOptions__title}>
          {userName} ¿Para quién deseas cotizar?
        </h2>
        <p className={styles.cotizationOptions__description}>
          Selecciona la opción que se ajuste más a tus necesidades.
        </p>
      </div>
      <div className={styles.cotizationOptions__content}>
        {cotizationOptions.map(option => (
          <CotizationOption
            key={option.value}
            icon={option.icon}
            title={option.title}
            description={option.description}
            onClick={() => onOptionSelect(option.value)}
            isSelected={selectedOption === option.value}
          />
        ))}
      </div>
    </div>
  );
};

export default CotizationOptions;
export { CotizationOptionsEnum };
