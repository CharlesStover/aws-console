import Select from '@awsui/components-react/select';
import { ReactElement } from 'react';
import Locale from '../../constants/locale';
import useLocaleSelect from './locale-select.hook';

interface Props {
  onChange(locale: Locale): void;
  value: Locale;
}

export default function LocaleSelect({ onChange, value }: Props): ReactElement {
  const { ariaLabel, handleChange, options, selectedOption } = useLocaleSelect({
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
