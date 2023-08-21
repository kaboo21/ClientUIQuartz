import { Injectable } from '@angular/core';
import { ScheduleJob } from '../models/schedule-job';
import { HttpClient } from '@angular/common/http';
import { CronModel } from '../models/cron-model';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  baseUrl = "https://localhost:7195/api/Schedule"
  constructor(
    private httpClient: HttpClient) {

    }

  setSchedulerTrigger(cronModel: CronModel){
    return this.httpClient.post(`${this.baseUrl}/cron-model`, cronModel);
  }


}
