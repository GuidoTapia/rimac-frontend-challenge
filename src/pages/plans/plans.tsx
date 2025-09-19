import { useState } from 'react';
import { Stepper } from '../../components';
import styles from './plans.module.scss';
import TextButton from '../../components/text-button/text-button';
import { useUser } from '../../shared/user/use-auth';
import ArrowBack from '../../assets/arrow-back.svg';
import { tsr } from '../../api/api-client';
import type { PlanSchemaDTO } from '../../api/services/plans/plans.dto';
import CotizationOptions, {
  type CotizationOptionType,
} from './components/cotization-options/cotization-options';
import PlanOptions from './components/plan-options/plan-options';
import SummaryStep from './components/summary-step/summary-step';
import { paths } from '../../shared/paths';
import { Navigate } from 'react-router-dom';

const StepsEnum = {
  PLANS: 'PLANS',
  SUMMARY: 'SUMMARY',
} as const;

const steps = [
  { label: 'Planes y coberturas', value: StepsEnum.PLANS },
  { label: 'Resumen', value: StepsEnum.SUMMARY },
];

const Plans: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<PlanSchemaDTO | null>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [cotizationOption, setCotizationOption] =
    useState<CotizationOptionType>();
  const { logOut, user, documentType, userId, phone, userAge } = useUser();
  const { data: plans } = tsr.plans.useQuery({
    queryKey: ['plans'],
    queryData: {},
  });

  const handleBack = () => {
    if (activeStep === 1) {
      setActiveStep(0);
      setSelectedPlan(null);
    } else {
      logOut();
    }
  };

  const onSelectPlan = (plan: PlanSchemaDTO) => {
    setActiveStep(1);
    setSelectedPlan(plan);
  };
  if (!userId && !user) {
    return <Navigate to={paths.home} />;
  }

  return (
    <div className={styles.plans}>
      <div className={styles.plans__header}>
        <div className={styles.plans__header__backButton}>
          <TextButton
            variant='secondary'
            onClick={handleBack}
            icon={<img src={ArrowBack} />}
          />
        </div>
        <Stepper steps={steps} activeIndex={activeStep} />
      </div>
      <div className={styles.plans__container}>
        <TextButton
          className={styles.plans__backButton}
          variant='secondary'
          onClick={handleBack}
          icon={<img src={ArrowBack} />}
        >
          Volver
        </TextButton>
        {activeStep === 0 && (
          <div className={styles.plans__content}>
            <CotizationOptions
              userName={user?.name}
              selectedOption={cotizationOption}
              onOptionSelect={setCotizationOption}
            />
            {cotizationOption && plans?.body.list && (
              <PlanOptions
                plans={plans.body.list}
                userAge={userAge || 0}
                cotizationOption={cotizationOption}
                onSelectPlan={onSelectPlan}
              />
            )}
          </div>
        )}
        {activeStep === 1 && (
          <SummaryStep
            selectedPlan={selectedPlan}
            userName={user?.name}
            userLastName={user?.lastName}
            documentType={documentType}
            userId={userId}
            phone={phone}
          />
        )}
      </div>
    </div>
  );
};

export default Plans;
