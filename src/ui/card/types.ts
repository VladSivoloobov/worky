import { ViewProps } from 'react-native';
import type { Job } from '../../models/Job';

export type CardProps = {
  job: Job;
} & ViewProps;
