import Select from '@awsui/components-react/select';
import { Density } from '@awsui/global-styles';
import { ReactElement } from 'react';
import useDensitySelect from './density-select.hook';

interface Props {
  onChange(density: Density): void;
  value: Density;
}

export default function DensitySelect({
  onChange,
  value,
}: Props): ReactElement {
  const { ariaLabel, handleChange, options, selectedOption } = useDensitySelect(
    {
      onChange,
      value,
    },
  );

  return (
    <Select
      ariaLabel={ariaLabel}
      onChange={handleChange}
      options={options}
      selectedOption={selectedOption}
    />
  );
}
