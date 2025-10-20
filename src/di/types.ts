import JobService from '../services/JobService';
import JobStore from '../store/JobStore';

export type Dependencies = {
  jobService: JobService;
  jobStore: JobStore;
  baseUrl: string;
};
