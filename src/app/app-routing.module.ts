import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProgramsComponent } from './programs/programs.component';
import { ApprovalsComponent } from './approvals/approvals.component';
import { PageNotFoundComponent } from './page-not-found.component';

const routes:Routes=[
    { path:'', pathMatch:'full', redirectTo:'home',},
    { path:'home', component: HomeComponent},
    { path:'programs', component: ProgramsComponent},
    { path:'approvals', component: ApprovalsComponent},
    { path:'**', pathMatch:'full', component:PageNotFoundComponent},
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{ }

export const routableComponents=[
    HomeComponent,
    ProgramsComponent,
    ApprovalsComponent,
    PageNotFoundComponent
];