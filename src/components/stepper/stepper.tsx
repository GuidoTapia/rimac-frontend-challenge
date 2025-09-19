import React from 'react';
import styles from './stepper.module.scss';

export interface Step {
  label: string;
  optional?: string;
  value?: string;
}

export interface StepperProps {
  steps: Step[];
  activeIndex: number;
  className?: string;
  clickable?: boolean;
  onStepClick?: (index: number) => void;
}

const Stepper: React.FC<StepperProps> = ({
  steps,
  activeIndex,
  className,
  clickable = false,
  onStepClick,
}) => {
  return (
    <ol className={[styles.stepper, className].filter(Boolean).join(' ')}>
      {steps.map((currentStep, stepIndex) => {
        const state =
          stepIndex < activeIndex
            ? 'completed'
            : stepIndex === activeIndex
              ? 'active'
              : 'pending';

        const itemClass = [
          styles.stepper__item,
          styles[`stepper__item--${state}`],
          clickable ? styles['stepper__item--clickable'] : '',
        ]
          .filter(Boolean)
          .join(' ');

        const dividerClass = [
          styles.stepper__divider,
          styles[`stepper__divider--${state}`],
        ]
          .filter(Boolean)
          .join(' ');

        const handleClick = () => {
          if (clickable && onStepClick) onStepClick(stepIndex);
        };

        return (
          <>
            <li
              key={currentStep.label}
              className={itemClass}
              onClick={handleClick}
            >
              <span className={styles.stepper__bullet} aria-hidden>
                {stepIndex + 1}
              </span>
              <span className={styles.stepper__label}>{currentStep.label}</span>
              {currentStep.optional && (
                <span className={styles.stepper__optional}>
                  {currentStep.optional}
                </span>
              )}
            </li>
            {stepIndex < steps.length - 1 && (
              <div className={dividerClass}></div>
            )}
          </>
        );
      })}
    </ol>
  );
};

export default Stepper;
