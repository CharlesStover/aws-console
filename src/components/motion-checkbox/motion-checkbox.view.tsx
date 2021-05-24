import Checkbox from '@awsui/components-react/checkbox';
import I18n from 'lazy-i18n';
import { ReactElement } from 'react';
import useMotionCheckbox from './motion-checkbox.hook';

interface Props {
  onChange(motion: boolean): void;
  value: boolean;
}

export default function MotionCheckbox({
  onChange,
  value,
}: Props): ReactElement {
  const { ariaLabel, handleChange } = useMotionCheckbox({
    onChange,
  });

  return (
    <Checkbox ariaLabel={ariaLabel} checked={value} onChange={handleChange}>
      <I18n>Motion</I18n>
    </Checkbox>
  );
}
