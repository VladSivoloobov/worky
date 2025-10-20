import container from './container';
import JobService from '../services/JobService';
import JobStore from '../store/JobStore';
import { asClass, asValue } from 'awilix';
import environment from '../const/environment';

container.register({
  baseUrl: asValue(environment.serverHost),
  jobService: asClass(JobService).singleton(),
  jobStore: asClass(JobStore).singleton(),
});
