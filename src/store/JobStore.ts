import { flow, makeAutoObservable } from 'mobx';
import { Job } from '../models/Job';
import JobService from '../services/JobService';

class JobStore {
  jobs: Job[] = [];
  loading = false;

  private jobService: JobService;

  constructor({ jobService }: { jobService: JobService }) {
    this.jobService = jobService;
    makeAutoObservable(this);
  }

  fetchJobs = flow(function* (
    this: JobStore,
    latitude: number,
    longitude: number,
  ) {
    this.loading = true;

    this.jobs = yield this.jobService.getJobList(latitude, longitude);

    this.loading = false;
  });
}

export default JobStore;
