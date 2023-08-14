import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { ProductService } from './demo/service/product.service';
import { CountryService } from './demo/service/country.service';
import { CustomerService } from './demo/service/customer.service';
import { EventService } from './demo/service/event.service';
import { IconService } from './demo/service/icon.service';
import { NodeService } from './demo/service/node.service';
import { ReactiveFormsModule } from '@angular/forms';

import { PhotoService } from './demo/service/photo.service';


//New TODO mydasboard
import { MydashboardComponent } from './demo/components/mydashboard/mydashboard.component';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { RippleModule } from 'primeng/ripple';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToastModule } from 'primeng/toast';
import { SliderModule } from 'primeng/slider';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { RegistrationComponent } from './demo/components/registration/registration.component';
import { ReworkComponent } from './demo/components/rework/rework.component';
import { TasksComponent } from './demo/components/tasks/tasks.component';
import { TaskDetailsComponent } from './demo/components/task-details/task-details.component';
import { PaymentsComponent } from './demo/components/payments/payments.component';
import { MypaymentsComponent } from './demo/components/mypayments/mypayments.component';
import { MysolutionsComponent } from './demo/components/mysolutions/mysolutions.component';
import { RatingComponent } from './demo/components/rating/rating.component';
import { PostTaskComponent } from './demo/components/post-task/post-task.component';
import { SolutionDetailsComponent } from './demo/components/solution-details/solution-details.component';
import { MessagesComponent } from './demo/components/messages/messages.component';
import { DisputesComponent } from './demo/components/disputes/disputes.component';
import { ProgressComponent } from './demo/components/progress/progress.component';


@NgModule({
    declarations: [
        AppComponent, NotfoundComponent, MydashboardComponent, RegistrationComponent, ReworkComponent, TasksComponent, TaskDetailsComponent, PaymentsComponent, MypaymentsComponent, MysolutionsComponent, RatingComponent, PostTaskComponent, SolutionDetailsComponent, MessagesComponent, DisputesComponent, ProgressComponent
    ],
    imports: [
        AppRoutingModule,
        AppLayoutModule,
        ReactiveFormsModule,
        TableModule,
        CommonModule,
        RatingModule,
        ButtonModule,
        SliderModule,
        InputTextModule,
        ToggleButtonModule,
        RippleModule,
        MultiSelectModule,
        DropdownModule,
        ProgressBarModule,
        ToastModule,
        FormsModule
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        CountryService, CustomerService, EventService, IconService, NodeService,
        PhotoService, ProductService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
