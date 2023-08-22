import { Component } from '@angular/core';
import { ScheduleService } from 'src/app/services/schedule.service';
import { CronModel, TimeSet } from '../../models/cron-model';
import { FormGroup, UntypedFormBuilder } from '@angular/forms';

@Component({
  selector: 'app-scheduler-form',
  templateUrl: './scheduler-form.component.html',
  styleUrls: ['./scheduler-form.component.css']
})
export class SchedulerFormComponent {

  timeSpanDropDown = ['Second', 'Minute', 'Hour'];

  scheduleForm: FormGroup = this.formBuilder.group({
    everyAmount: [],
    everyType: [this.timeSpanDropDown[0]],
    fromTimeSpan: [],
    toTimeSpan: [],

    everySunday: [],
    everyMonday: [],
    everyTuesday: [],
    everyWendnesday: [],
    everyThursday: [],
    everyFriday: [],
    everySaturday: [],
    isScheduled: [true]
  })
  constructor(
    private scheduleService: ScheduleService,
    private formBuilder: UntypedFormBuilder) {



  }

  saveJob(){
    let cronModel = new CronModel();
      // cronModel.hour = new TimeSet();
      // cronModel.day = new TimeSet();
      // cronModel.month = new TimeSet();

      switch(this.scheduleForm.value.everyType) {
        case this.timeSpanDropDown[0]:{
          cronModel.second = new TimeSet();
          cronModel.second.everyTimeSpan = this.scheduleForm.value.everyAmount;
          break;
        }
        case this.timeSpanDropDown[1]:{
          cronModel.minute = new TimeSet();
          cronModel.minute.everyTimeSpan = this.scheduleForm.value.everyAmount;
          break;
        }
        case this.timeSpanDropDown[2]:{
          cronModel.hour = new TimeSet();
          cronModel.hour.everyTimeSpan = this.scheduleForm.value.everyAmount;
          break;
        }
        default: {
          //statements;
          break;
       }
      }

      let hasInterval = this.scheduleForm.value.fromTimeSpan && this.scheduleForm.value.toTimeSpan

      if(hasInterval){
        if(!cronModel.hour){
          cronModel.hour = new TimeSet();
        }
        cronModel.hour.fromTimeSpan = this.scheduleForm.value.fromTimeSpan;
        cronModel.hour.toTimeSpan = this.scheduleForm.value.toTimeSpan;
      }

      //TODO: Day of week

      cronModel.isScheduled = this.scheduleForm.value.isScheduled;


      this.scheduleService.setSchedulerTrigger(cronModel).subscribe();

  }

}
