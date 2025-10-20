import { makeAutoObservable } from 'mobx';
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

  fetchJobs = async () => {
    this.loading = true;

    this.jobs = await this.jobService.getJobList(45.039268, 38.987221);

    this.loading = false;
  };
}

export default JobStore;
