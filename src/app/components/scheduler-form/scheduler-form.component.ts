import { Component } from '@angular/core';
import { ScheduleService } from 'src/app/services/schedule.service';
import { CronModel, TimeSet } from '../../models/cron-model';

@Component({
  selector: 'app-scheduler-form',
  templateUrl: './scheduler-form.component.html',
  styleUrls: ['./scheduler-form.component.css']
})
export class SchedulerFormComponent {

  constructor(
    private scheduleService: ScheduleService) {

      let cronModel = new CronModel();
      cronModel.second = new TimeSet();
      cronModel.isScheduled = true;
      cronModel.second.everyTimeSpan = 2;

      scheduleService.setSchedulerTrigger(cronModel).subscribe();

  }

}
