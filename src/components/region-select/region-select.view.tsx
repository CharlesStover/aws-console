import Select from '@awsui/components-react/select';
import { ReactElement } from 'react';
import REGION_OPTIONS from '../../constants/region-options';
import useRegionSelect from './region-select.hook';

export default function RegionSelect(): ReactElement {
  const { ariaLabel, handleChange, selectedOption } = useRegionSelect();

  return (
    <Select
      ariaLabel={ariaLabel}
      onChange={handleChange}
      options={REGION_OPTIONS}
      selectedOption={selectedOption}
    />
  );
}
