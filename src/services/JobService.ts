import { Job } from '../models/Job';

export default class JobService {
  private baseUrl: string;

  constructor({ baseUrl }: { baseUrl: string }) {
    this.baseUrl = baseUrl;
  }

  async getJobList(latitude: number, longtitude: number): Promise<Job[]> {
    const response = await fetch(
      new URL(
        `/api/shifts/map-list-unauthorized?latitude=${latitude}&longitude=${longtitude}`,
        this.baseUrl,
      ),
    );

    if (!response.ok) throw new Error(response.statusText);

    const json = (await response.json()) as { data: Job[] };

    return json.data;
  }
}
