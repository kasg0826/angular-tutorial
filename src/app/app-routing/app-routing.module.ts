import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from '../app.component';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroesComponent} from '../hero/heroes.component';
import { HeroService} from '../hero.service';
import { DashbordComponent } from '../dashbord/dashbord.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashbord',
    component: DashbordComponent
  },
  {
    path: 'detail/:id',
    component: HeroDetailComponent
  },
  {
    path: 'heroes',
    component: HeroesComponent
  },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
