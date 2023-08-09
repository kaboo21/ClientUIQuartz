import { Injectable } from '@angular/core';
import { ScheduleJob } from '../models/schedule-job';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor() { }

  public getScheduleJob() {
    let job = new ScheduleJob();

    job.id = 1;
    job.name = "FirstJob";

    return job;
  }
}
