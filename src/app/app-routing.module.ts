import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SchedulerFormComponent } from './components/scheduler-form/scheduler-form.component';

const routes: Routes = [
  { path: 'scheduler-form', component: SchedulerFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
