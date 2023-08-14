import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { AppLayoutComponent } from "./layout/app.layout.component";
import { RegistrationComponent } from './demo/components/registration/registration.component';
import { LandingComponent } from './demo/components/landing/landing.component';
import { PostTaskComponent } from './demo/components/post-task/post-task.component';
import { TasksComponent } from './demo/components/tasks/tasks.component';
import { MysolutionsComponent } from './demo/components/mysolutions/mysolutions.component';
import { ReworkComponent } from './demo/components/rework/rework.component';
import { MessagesComponent } from './demo/components/messages/messages.component';
import { DisputesComponent } from './demo/components/disputes/disputes.component';
import { ProgressComponent } from './demo/components/progress/progress.component';
import { PaymentComponent } from './demo/components/uikit/menus/payment.component';

const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' }, // Redirect to the landing component as the default page
  {
    path: '', component: AppLayoutComponent,
     
    children: [
   
      { path: 'progress', component: ProgressComponent },

      { path: 'newtask', component: PostTaskComponent },
      { path: 'mytasks', component: TasksComponent },
      { path: 'mysolutions', component: MysolutionsComponent },
      { path: 'MyReworks', component: ReworkComponent },
      { path: 'Messages', component: MessagesComponent },
      { path: 'Disputes', component: DisputesComponent },
      { path: 'payment', component: PaymentComponent },






      { path: 'uikit', loadChildren: () => import('./demo/components/uikit/uikit.module').then(m => m.UikitModule) },

   
      { path: '', loadChildren: () => import('./demo/components/dashboard/dashboard.module').then(m => m.DashboardModule) },
      { path: 'utilities', loadChildren: () => import('./demo/components/utilities/utilities.module').then(m => m.UtilitiesModule) },
      { path: 'pages', loadChildren: () => import('./demo/components/pages/pages.module').then(m => m.PagesModule) },
    ],
  },
  { path: 'auth', loadChildren: () => import('./demo/components/auth/auth.module').then(m => m.AuthModule) },
  { path: 'landing', component: LandingComponent },
  { path: 'pages/notfound', component: NotfoundComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: '**', redirectTo: 'pages/notfound' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
