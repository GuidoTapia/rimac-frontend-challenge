import React from 'react';
import styles from './plan-options.module.scss';
import PlanOption from '../plan-option/plan-option';
import IcHomeLight from '../../../../assets/IcHomeLight.svg';
import IcHospitalLight from '../../../../assets/IcHospitalLight.svg';
import type { PlanSchemaDTO } from '../../../../api/services/plans/plans.dto';
import { CotizationOptionsEnum } from '../cotization-options/cotization-options';

interface PlanOptionsProps {
  plans: PlanSchemaDTO[];
  userAge: number;
  cotizationOption: string;
  onSelectPlan: (plan: PlanSchemaDTO) => void;
}

const PlanOptions: React.FC<PlanOptionsProps> = ({
  plans,
  userAge,
  cotizationOption,
  onSelectPlan,
}) => {
  const filteredPlans = plans.filter(
    plan =>
      plan.age >= userAge ||
      cotizationOption === CotizationOptionsEnum.FOR_SOMEONE
  );

  const getPlanIcon = (planName: string) => {
    return planName.toLowerCase().includes('clínica') ? (
      <img src={IcHospitalLight} alt='Hospital' />
    ) : (
      <img src={IcHomeLight} alt='Home' />
    );
  };

  const getPlanPrice = (plan: PlanSchemaDTO) => {
    return cotizationOption === CotizationOptionsEnum.FOR_SOMEONE
      ? plan.price * 0.95
      : plan.price;
  };

  const handleSelectPlan = (plan: PlanSchemaDTO) => {
    const planWithPrice = {
      ...plan,
      price: getPlanPrice(plan),
    };
    onSelectPlan(planWithPrice);
  };

  return (
    <div className={styles.planOptions}>
      {filteredPlans.map(plan => (
        <PlanOption
          key={plan.name}
          icon={getPlanIcon(plan.name)}
          title={plan.name}
          price={plan.price}
          descriptionItems={plan.description}
          discountedPrice={
            cotizationOption === CotizationOptionsEnum.FOR_SOMEONE
              ? plan.price * 0.95
              : undefined
          }
          onSelect={() => handleSelectPlan(plan)}
        />
      ))}
    </div>
  );
};

export default PlanOptions;
