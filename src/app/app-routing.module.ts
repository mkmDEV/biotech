import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {ResultComponent} from './components/result/result.component';
import {LoadingComponent} from './components/loading/loading.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'loading', component: LoadingComponent},
  {path: 'result', component: ResultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
