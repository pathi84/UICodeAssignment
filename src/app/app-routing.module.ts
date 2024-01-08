import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoriesComponent } from './stories/stories.component';

const routes: Routes = [{ path: '', component: StoriesComponent, pathMatch: 'full' },
{ path: 'stories-data', component: StoriesComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
