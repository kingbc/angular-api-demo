import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './component/header/header.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'appHeader', component: HeaderComponent},
  {path: 'appSidebar', component: SidebarComponent},
  {path: 'appAbout', component: AboutComponent}
];

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    HomeComponent,
    AboutComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    FormsModule
  ],
  exports: [
    RouterModule,
    HeaderComponent,
    SidebarComponent,
    HomeComponent,
  ]
})
export class AppRoutingModule { }
