export class CronModel {
  second?: TimeSet;
  minute?: TimeSet;
  hour?: TimeSet;
  day?: TimeSet;
  month?: TimeSet;
  isScheduled?: boolean;
}

export class TimeSet {
  everyTimeSpan?: number;
  fromTimeSpan?: number;
  toTimeSpan?: number;
}
