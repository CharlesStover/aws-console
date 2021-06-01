import { SelectProps } from '@awsui/components-react/select';
import Region from '../constants/region';

const REGION_OPTIONS: SelectProps.Option[] = [
  {
    label: 'us-east-1',
    value: Region.UsEast1,
  },
  {
    label: 'us-west-1',
    value: Region.UsWest1,
  },
  {
    label: 'us-west-2',
    value: Region.UsWest2,
  },
];

export default REGION_OPTIONS;
