import Select from '@awsui/components-react/select';
import { Mode } from '@awsui/global-styles';
import { ReactElement } from 'react';
import useModeSelect from './mode-select.hook';

interface Props {
  onChange(mode: Mode): void;
  value: Mode;
}

export default function ModeSelect({ onChange, value }: Props): ReactElement {
  const { ariaLabel, handleChange, options, selectedOption } = useModeSelect({
    onChange,
    value,
  });

  return (
    <Select
      ariaLabel={ariaLabel}
      onChange={handleChange}
      options={options}
      selectedOption={selectedOption}
    />
  );
}
