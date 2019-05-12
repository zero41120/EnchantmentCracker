import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { XpSeedProcessorComponent } from './xp-seed-processor/xp-seed-processor.component';

const routes: Routes = [
  { path: 'xpsp', component: XpSeedProcessorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
